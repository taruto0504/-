import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { VRM, VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { glowSprite } from "./textures";

// キャラクター本体：VRMモデル、または VRM を読み込むまでの仮のキャラクター（光の精）。
// まばたき・呼吸・浮遊・待機モーション・視線、会話中の表情（考え中・話し中・うれしい）を受け持つ。

export type Mood = "idle" | "thinking" | "talking" | "happy";

export const MODEL_HEIGHT = 1.6; // 仮キャラクターの高さ。VRM は実寸（多くは 1.4〜1.7）

export async function loadVrm(data: ArrayBuffer): Promise<VRM> {
  const loader = new GLTFLoader();
  loader.register((parser) => new VRMLoaderPlugin(parser));
  const gltf = await loader.parseAsync(data, "");
  const vrm = gltf.userData.vrm as VRM | undefined;
  if (!vrm) throw new Error("VRMファイルではないようです");
  VRMUtils.removeUnnecessaryVertices(gltf.scene);
  VRMUtils.combineSkeletons(gltf.scene);
  VRMUtils.rotateVRM0(vrm); // 古い形式（VRM 0.x）も正面を向かせる
  vrm.scene.traverse((o) => (o.frustumCulled = false));
  return vrm;
}

export class Companion {
  readonly root = new THREE.Group(); // 足元が原点
  private body = new THREE.Group(); // 浮遊・傾きを付ける
  private vrm: VRM | null = null;
  private spirit: Spirit;
  private aura: THREE.Sprite;
  private mood: Mood = "idle";
  private moodWeight = { happy: 0, thinking: 0, talking: 0 };
  private blinkTimer = 2;
  private blinkPhase = -1;
  readonly lookTarget = new THREE.Object3D();
  height = MODEL_HEIGHT;

  constructor() {
    this.root.add(this.body);
    this.spirit = new Spirit();
    this.body.add(this.spirit.group);
    this.aura = glowSprite("#3d9dff", 1.6, 0.45);
    this.aura.position.y = -0.05;
    this.aura.scale.set(1.4, 0.45, 1);
    this.root.add(this.aura);
  }

  setVrm(vrm: VRM | null) {
    if (this.vrm) {
      this.body.remove(this.vrm.scene);
      VRMUtils.deepDispose(this.vrm.scene);
    }
    this.vrm = vrm;
    this.spirit.group.visible = !vrm;
    if (vrm) {
      this.body.add(vrm.scene);
      if (vrm.lookAt) vrm.lookAt.target = this.lookTarget;
      const head = vrm.humanoid.getNormalizedBoneNode("head");
      this.root.updateMatrixWorld(true);
      this.height = head ? this.body.worldToLocal(head.getWorldPosition(new THREE.Vector3())).y + 0.15 : MODEL_HEIGHT;
    } else {
      this.height = MODEL_HEIGHT;
    }
  }

  get hasVrm() {
    return !!this.vrm;
  }

  setMood(mood: Mood) {
    this.mood = mood;
  }

  // 頭のあたり（吹き出しの位置）をワールド座標で返す
  headPosition(out: THREE.Vector3): THREE.Vector3 {
    return out.set(0, this.height * 1.02, 0).applyMatrix4(this.body.matrixWorld);
  }

  update(dt: number, t: number, moving: number) {
    // 表情の重みをなめらかに切り替える
    const ease = 1 - Math.exp(-dt * 8);
    for (const k of ["happy", "thinking", "talking"] as const) {
      this.moodWeight[k] += ((this.mood === k ? 1 : 0) - this.moodWeight[k]) * ease;
    }
    const blink = this.updateBlink(dt);
    const mouth = this.moodWeight.talking * (0.35 + 0.35 * Math.sin(t * 17) * Math.sin(t * 5.3));

    // 浮遊と傾き
    this.body.position.y = 0.06 + Math.sin(t * 1.4) * 0.05;
    this.body.rotation.z = Math.sin(t * 0.7) * 0.03 + this.moodWeight.thinking * 0.08;
    this.body.rotation.x = moving * 0.12;
    const breath = Math.sin(t * 2.2);
    this.aura.material.opacity = 0.35 + 0.1 * Math.sin(t * 1.4) + this.moodWeight.happy * 0.2;

    if (this.vrm) this.poseVrm(this.vrm, dt, t, breath, blink, Math.max(0, mouth));
    else this.spirit.update(t, blink, Math.max(0, mouth), this.moodWeight);
  }

  private updateBlink(dt: number): number {
    if (this.blinkPhase < 0) {
      this.blinkTimer -= dt;
      if (this.blinkTimer <= 0) this.blinkPhase = 0;
      return 0;
    }
    this.blinkPhase += dt / 0.16;
    if (this.blinkPhase >= 1) {
      this.blinkPhase = -1;
      this.blinkTimer = THREE.MathUtils.randFloat(1.8, 5.5);
      return 0;
    }
    return Math.sin(this.blinkPhase * Math.PI);
  }

  private poseVrm(vrm: VRM, dt: number, t: number, breath: number, blink: number, mouth: number) {
    const h = vrm.humanoid;
    const bone = (name: Parameters<typeof h.getNormalizedBoneNode>[0]) => h.getNormalizedBoneNode(name);
    const { happy, thinking, talking } = this.moodWeight;

    // 腕を下ろして、ゆらゆらさせる（T ポーズのままにしない）
    const sway = Math.sin(t * 1.1) * 0.05;
    bone("leftUpperArm")?.rotation.set(0, 0, -1.35 + sway - happy * 0.15);
    bone("rightUpperArm")?.rotation.set(0, 0, 1.35 - sway + happy * 0.15);
    bone("leftLowerArm")?.rotation.set(0, -0.25 - thinking * 0.3, 0);
    bone("rightLowerArm")?.rotation.set(0, 0.25 + thinking * 1.4, 0);
    bone("rightHand")?.rotation.set(0, 0, thinking * 0.4);
    // 浮いているので脚を少し後ろに流す
    bone("leftUpperLeg")?.rotation.set(0.08 + Math.sin(t * 1.4) * 0.03, 0, 0.03);
    bone("rightUpperLeg")?.rotation.set(0.14 + Math.sin(t * 1.4 + 1) * 0.03, 0, -0.03);
    bone("leftLowerLeg")?.rotation.set(-0.12, 0, 0);
    bone("rightLowerLeg")?.rotation.set(-0.25, 0, 0);
    // 呼吸・首かしげ・話す時のうなずき
    bone("spine")?.rotation.set(breath * 0.015, 0, 0);
    bone("chest")?.rotation.set(breath * 0.02, 0, 0);
    bone("neck")?.rotation.set(talking * Math.sin(t * 3) * 0.04, 0, 0);
    bone("head")?.rotation.set(-thinking * 0.15, 0, thinking * 0.18 + Math.sin(t * 0.6) * 0.03);

    const ex = vrm.expressionManager;
    if (ex) {
      ex.setValue("blink", happy > 0.5 ? 0 : blink);
      ex.setValue("happy", happy * 0.9);
      ex.setValue("relaxed", thinking * 0.4);
      ex.setValue("aa", mouth);
    }
    vrm.update(dt);
  }
}

// VRM を読み込むまでの仮のキャラクター。光る頭・目・体・輪だけの簡単な姿
class Spirit {
  readonly group = new THREE.Group();
  private head: THREE.Mesh;
  private eyes: THREE.Mesh[] = [];
  private mouth: THREE.Mesh;
  private ring: THREE.Mesh;
  private core: THREE.Sprite;

  constructor() {
    const glass = new THREE.MeshPhysicalMaterial({
      color: "#9fd4ff",
      emissive: "#1a4f9c",
      emissiveIntensity: 0.6,
      roughness: 0.15,
      transmission: 0.35,
      transparent: true,
      opacity: 0.92,
    });
    this.head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 48, 32), glass);
    this.head.position.y = 1.18;
    this.group.add(this.head);

    const eyeMat = new THREE.MeshBasicMaterial({ color: "#f4fbff" });
    for (const x of [-0.12, 0.12]) {
      const eye = new THREE.Mesh(new THREE.CapsuleGeometry(0.03, 0.06, 4, 12), eyeMat);
      eye.position.set(x, 0.02, 0.28);
      this.head.add(eye);
      this.eyes.push(eye);
    }
    this.mouth = new THREE.Mesh(new THREE.CircleGeometry(0.035, 20), new THREE.MeshBasicMaterial({ color: "#ffd59a" }));
    this.mouth.position.set(0, -0.1, 0.295);
    this.head.add(this.mouth);

    // 体：しずく形のすそが広がったドレス
    const profile = [
      [0.0, 0.12], [0.1, 0.13], [0.2, 0.2], [0.27, 0.32], [0.29, 0.45], [0.24, 0.62], [0.16, 0.78], [0.1, 0.88], [0.0, 0.92],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    const body = new THREE.Mesh(new THREE.LatheGeometry(profile, 48), glass);
    this.group.add(body);
    this.ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.46, 0.012, 8, 80),
      new THREE.MeshBasicMaterial({ color: "#ffb347", transparent: true, opacity: 0.85 }),
    );
    this.ring.position.y = 1.18;
    this.ring.rotation.x = Math.PI / 2.4;
    this.ring.scale.setScalar(0.85);
    this.group.add(this.ring);

    this.core = glowSprite("#ffcf7a", 0.45, 0.9);
    this.core.position.y = 0.5;
    this.group.add(this.core);
  }

  update(t: number, blink: number, mouth: number, mood: { happy: number; thinking: number; talking: number }) {
    for (const e of this.eyes) e.scale.y = Math.max(0.08, 1 - blink) * (1 - mood.happy * 0.6);
    this.mouth.scale.set(1 + mood.happy * 0.6, 0.4 + mouth * 2.2 + mood.happy * 0.3, 1);
    this.ring.rotation.z = t * (0.6 + mood.thinking * 2.5);
    this.head.rotation.z = mood.thinking * 0.2 + Math.sin(t * 0.6) * 0.04;
    this.head.rotation.x = -mood.thinking * 0.15;
    this.core.material.opacity = 0.7 + 0.25 * Math.sin(t * 2.2) + mood.happy * 0.2;
  }
}
