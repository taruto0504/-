import * as THREE from "three";
import { Background } from "./background";
import { Companion, loadVrm, type Mood } from "./character";

// 3D の舞台：カメラ・ライト・背景・キャラクターをまとめ、キャラクターを画面内で自由に動かす。
// 端末の性能に合わせて画質を自動で下げ、省電力モードでは背景を止める。

export interface StageEvents {
  // 毎フレーム、キャラクターの頭の画面上の位置（吹き出し用・CSS ピクセル）を知らせる
  onHead?: (x: number, y: number) => void;
  onTap?: () => void;
}

const FOV = 35;
const CAMERA_Z = 10;

export function detectQuality(): "high" | "low" {
  const cores = navigator.hardwareConcurrency ?? 4;
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && innerWidth < 1100);
  return cores >= 8 && !mobile ? "high" : "low";
}

export class Stage {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 300);
  private clock = new THREE.Clock();
  private background: Background;
  readonly companion = new Companion();
  private frame = 0;
  private quality: "high" | "low";
  private pixelRatio: number;
  private powerSave = false;
  private visible = { w: 1, h: 1 };
  private reserveBottom = 0; // 画面下で会話パネルが占める割合
  private target = new THREE.Vector3();
  private velocity = new THREE.Vector3();
  private nextMove = 0;
  private hold = 0; // 話している間などは立ち止まる
  private pointer = new THREE.Vector2(0, 0);
  private fps = { frames: 0, time: 0 };
  private tmp = new THREE.Vector3();
  private disposed = false;

  constructor(
    private canvas: HTMLCanvasElement,
    private events: StageEvents = {},
  ) {
    this.quality = detectQuality();
    this.pixelRatio = Math.min(devicePixelRatio, this.quality === "high" ? 2 : 1.5);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: this.quality === "high", alpha: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.camera.position.set(0, 0, CAMERA_Z);
    this.scene.add(new THREE.AmbientLight("#a9c4ff", 0.35));
    const key = new THREE.DirectionalLight("#ffffff", 2.4);
    key.position.set(1, 2, 3);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight("#4aa8ff", 1.2);
    rim.position.set(-2, 1, -2);
    this.scene.add(rim);

    this.background = new Background(this.quality);
    this.scene.add(this.background.group);
    this.scene.add(this.companion.root);
    this.scene.add(this.companion.lookTarget);

    this.resize();
    this.companion.root.position.set(0, -this.visible.h * 0.25, 0);
    this.target.copy(this.companion.root.position);
    addEventListener("resize", this.resize);
    canvas.addEventListener("pointermove", this.onPointerMove);
    canvas.addEventListener("pointerdown", this.onPointerDown);
    document.addEventListener("visibilitychange", this.onVisibility);
    this.loop();
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    removeEventListener("resize", this.resize);
    this.canvas.removeEventListener("pointermove", this.onPointerMove);
    this.canvas.removeEventListener("pointerdown", this.onPointerDown);
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.renderer.dispose();
  }

  async setVrmData(data: ArrayBuffer | null) {
    const vrm = data ? await loadVrm(data) : null;
    if (this.disposed) return;
    this.companion.setVrm(vrm);
    this.applyScale();
  }

  setMood(mood: Mood) {
    this.companion.setMood(mood);
    if (mood !== "idle") this.hold = 2.5;
  }

  setPowerSave(on: boolean) {
    this.powerSave = on;
    this.renderer.setPixelRatio(on ? 1 : this.pixelRatio);
    this.resize();
  }

  setReserveBottom(fraction: number) {
    this.reserveBottom = fraction;
    this.clampTarget();
  }

  private onVisibility = () => {
    // 見えていない間は描画を止めて電池を節約する
    cancelAnimationFrame(this.frame);
    if (!document.hidden) {
      this.clock.getDelta();
      this.loop();
    }
  };

  private onPointerMove = (e: PointerEvent) => {
    this.pointer.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  };

  private onPointerDown = (e: PointerEvent) => {
    this.onPointerMove(e);
    // キャラクターの体のあたりを触ったら反応する
    const root = this.companion.root;
    const h = this.companion.height * root.scale.y;
    const p = this.toScreen(this.tmp.set(root.position.x, root.position.y + h * 0.5, 0));
    const r = this.toScreen(this.tmp.set(root.position.x, root.position.y + h, 0));
    const dy = Math.abs(p.y - r.y);
    if (Math.abs(e.clientX - p.x) < dy * 0.6 && Math.abs(e.clientY - p.y) < dy * 1.05) this.events.onTap?.();
    else {
      // 何もないところを触ったら、そちらへ移動する
      const v = this.fromScreen(e.clientX, e.clientY);
      this.target.set(v.x, v.y - h * 0.5, 0);
      this.clampTarget();
      this.nextMove = this.clock.elapsedTime + 6;
    }
  };

  private toScreen(v: THREE.Vector3) {
    v.project(this.camera);
    return { x: ((v.x + 1) / 2) * innerWidth, y: ((1 - v.y) / 2) * innerHeight };
  }

  private fromScreen(x: number, y: number) {
    return new THREE.Vector3(((x / innerWidth) * 2 - 1) * (this.visible.w / 2), (-(y / innerHeight) * 2 + 1) * (this.visible.h / 2), 0);
  }

  private resize = () => {
    const w = innerWidth;
    const h = innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.visible.h = 2 * CAMERA_Z * Math.tan(THREE.MathUtils.degToRad(FOV / 2));
    this.visible.w = this.visible.h * this.camera.aspect;
    this.background.layout(this.camera.aspect);
    this.applyScale();
    if (this.powerSave) this.renderer.render(this.scene, this.camera);
  };

  // 画面の大きさに合わせてキャラクターの大きさを決める（縦長のスマホでは少し小さく）
  private applyScale() {
    const share = this.camera.aspect < 1 ? 0.36 : 0.5;
    const s = (this.visible.h * share) / this.companion.height;
    this.companion.root.scale.setScalar(s);
    this.clampTarget();
  }

  // 行動範囲：画面の内側。下は会話パネルの上まで
  private bounds() {
    const h = this.companion.height * this.companion.root.scale.y;
    const halfW = this.visible.w / 2;
    const halfH = this.visible.h / 2;
    const marginX = Math.min(h * 0.3, halfW * 0.4);
    const bottom = -halfH + this.visible.h * this.reserveBottom;
    const top = Math.max(bottom, halfH - h * 1.05 - this.visible.h * 0.17); // 頭の上に吹き出しの場所を空ける
    return { minX: -halfW + marginX, maxX: halfW - marginX, minY: bottom, maxY: top };
  }

  private clampTarget() {
    const b = this.bounds();
    this.target.x = THREE.MathUtils.clamp(this.target.x, b.minX, b.maxX);
    this.target.y = THREE.MathUtils.clamp(this.target.y, b.minY, b.maxY);
  }

  private pickTarget() {
    const b = this.bounds();
    this.target.set(THREE.MathUtils.randFloat(b.minX, b.maxX), THREE.MathUtils.randFloat(b.minY, b.maxY), 0);
  }

  private loop = () => {
    this.frame = requestAnimationFrame(this.loop);
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const t = this.clock.elapsedTime;
    this.watchFps(dt);

    // ふらふらと画面内を移動する。止まる時間もつくる
    this.hold = Math.max(0, this.hold - dt);
    if (t > this.nextMove && this.hold === 0) {
      this.pickTarget();
      this.nextMove = t + THREE.MathUtils.randFloat(5, 11);
    }
    const root = this.companion.root;
    const toTarget = this.tmp.copy(this.target).sub(root.position);
    const desired = toTarget.multiplyScalar(this.hold > 0 ? 0.3 : 0.8).clampLength(0, 1.6);
    this.velocity.lerp(desired, 1 - Math.exp(-dt * 2));
    root.position.addScaledVector(this.velocity, dt);
    const speed = this.velocity.length();
    // 進む向きに少し体を向ける。止まったら正面を向く
    const yaw = THREE.MathUtils.clamp(this.velocity.x * 0.45, -0.6, 0.6);
    root.rotation.y += (yaw - root.rotation.y) * (1 - Math.exp(-dt * 3));

    // 視線は指・マウスのほうへ
    const look = this.fromScreen(((this.pointer.x + 1) / 2) * innerWidth, ((1 - this.pointer.y) / 2) * innerHeight);
    this.companion.lookTarget.position.set(look.x, look.y, CAMERA_Z * 0.6);

    this.companion.update(dt, t, Math.min(speed, 1));
    if (!this.powerSave) this.background.update(dt, t);
    this.renderer.render(this.scene, this.camera);

    if (this.events.onHead) {
      root.updateMatrixWorld();
      const head = this.toScreen(this.companion.headPosition(this.tmp));
      this.events.onHead(head.x, head.y);
    }
  };

  // 動きが重い時は描画の解像度を下げる
  private watchFps(dt: number) {
    this.fps.frames++;
    this.fps.time += dt;
    if (this.fps.time < 3) return;
    const fps = this.fps.frames / this.fps.time;
    this.fps.frames = 0;
    this.fps.time = 0;
    if (fps < 40 && this.pixelRatio > 1) {
      this.pixelRatio = Math.max(1, this.pixelRatio - 0.25);
      this.renderer.setPixelRatio(this.pixelRatio);
      this.resize();
    }
  }
}
