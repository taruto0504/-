import * as THREE from "three";
import { glowSprite, glowTexture } from "./textures";

// 宇宙空間の背景：星、つながり合う光の粒（ネットワーク）、地球、漂う光の球。
// すべて3Dで描いて実際に動かす。省電力モードでは update を止めて静止画にする。

const BLUE = new THREE.Color("#4aa8ff");
const GOLD = new THREE.Color("#ffb347");

export class Background {
  readonly group = new THREE.Group();
  private nodes: { pos: THREE.Vector3; vel: THREE.Vector3 }[] = [];
  private nodePoints: THREE.Points;
  private lines: THREE.LineSegments;
  private linkDistance = 4.2;
  private earth: THREE.Group;
  private orbs: { sprite: THREE.Sprite; base: THREE.Vector3; phase: number }[] = [];
  private stars: THREE.Points;
  private box = new THREE.Vector3(18, 10, 6); // ネットワークが動く範囲（半分の大きさ）

  constructor(quality: "high" | "low") {
    const nodeCount = quality === "high" ? 110 : 55;
    this.stars = this.makeStars(quality === "high" ? 1800 : 800);
    this.group.add(this.stars);

    for (let i = 0; i < nodeCount; i++) {
      this.nodes.push({
        pos: new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(this.box.x * 2),
          THREE.MathUtils.randFloatSpread(this.box.y * 2),
          THREE.MathUtils.randFloatSpread(this.box.z * 2) - 14,
        ),
        vel: new THREE.Vector3().randomDirection().multiplyScalar(THREE.MathUtils.randFloat(0.08, 0.25)),
      });
    }
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(nodeCount * 3), 3));
    const nodeColors = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) (Math.random() < 0.12 ? GOLD : BLUE).toArray(nodeColors, i * 3);
    nodeGeo.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));
    this.nodePoints = new THREE.Points(
      nodeGeo,
      new THREE.PointsMaterial({
        size: 0.35,
        map: glowTexture(),
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    this.group.add(this.nodePoints);

    const maxLinks = nodeCount * 6;
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(maxLinks * 6), 3));
    lineGeo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(maxLinks * 6), 3));
    this.lines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    this.group.add(this.lines);

    this.earth = this.makeEarth();
    this.group.add(this.earth);

    for (let i = 0; i < 7; i++) {
      const gold = i % 3 === 0;
      const sprite = glowSprite(gold ? "#ffae42" : "#5ab4ff", THREE.MathUtils.randFloat(0.8, 2.2), 0.55);
      const base = new THREE.Vector3(THREE.MathUtils.randFloatSpread(26), THREE.MathUtils.randFloatSpread(14), THREE.MathUtils.randFloat(-22, -8));
      sprite.position.copy(base);
      this.orbs.push({ sprite, base, phase: Math.random() * Math.PI * 2 });
      this.group.add(sprite);
    }
    this.updateNetwork(0);
  }

  private makeStars(count: number): THREE.Points {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(THREE.MathUtils.randFloat(60, 120));
      v.z = -Math.abs(v.z); // カメラの前側だけ
      v.toArray(pos, i * 3);
      c.setHSL(THREE.MathUtils.randFloat(0.55, 0.65), 0.6, THREE.MathUtils.randFloat(0.55, 0.95));
      c.toArray(col, i * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return new THREE.Points(
      geo,
      new THREE.PointsMaterial({ size: 0.5, map: glowTexture(), vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
    );
  }

  // 地球：海・陸・夜の街明かりをシェーダーで描き、ふちに青い大気の光をつける
  private makeEarth(): THREE.Group {
    const g = new THREE.Group();
    const radius = 8;
    const surface = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 64, 48),
      new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uLight: { value: new THREE.Vector3(-1, 0.6, 0.8).normalize() } },
        vertexShader: /* glsl */ `
          varying vec3 vNormal; varying vec3 vPos; varying vec3 vView;
          void main() {
            vPos = position;
            vNormal = normalize(normalMatrix * normal);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vView = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: /* glsl */ `
          uniform float uTime; uniform vec3 uLight;
          varying vec3 vNormal; varying vec3 vPos; varying vec3 vView;
          float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
          float noise(vec3 p) {
            vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
            return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                       mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
          }
          float fbm(vec3 p) { float v = 0.0; float a = 0.5; for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.1; a *= 0.5; } return v; }
          void main() {
            vec3 p = normalize(vPos) * 2.2;
            float land = smoothstep(0.5, 0.56, fbm(p));
            float light = clamp(dot(vNormal, uLight), 0.0, 1.0);
            vec3 ocean = vec3(0.01, 0.05, 0.16);
            vec3 ground = vec3(0.04, 0.12, 0.12);
            vec3 day = mix(ocean, ground, land) * (0.25 + light * 1.4);
            float city = land * step(0.82, noise(p * 40.0)) * (1.0 - smoothstep(0.0, 0.35, light));
            vec3 col = day + vec3(1.0, 0.68, 0.3) * city * 0.9;
            float rim = pow(1.0 - max(dot(vNormal, vView), 0.0), 3.0);
            col += vec3(0.25, 0.6, 1.0) * rim * 0.55;
            gl_FragColor = vec4(col, 1.0);
          }`,
      }),
    );
    g.add(surface);
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.08, 48, 32),
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        vertexShader: /* glsl */ `
          varying vec3 vNormal; varying vec3 vView;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vView = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: /* glsl */ `
          varying vec3 vNormal; varying vec3 vView;
          void main() {
            float i = pow(0.7 - dot(vNormal, vView), 4.0);
            gl_FragColor = vec4(0.3, 0.65, 1.0, 1.0) * clamp(i, 0.0, 1.0) * 0.9;
          }`,
      }),
    );
    g.add(atmosphere);
    g.position.set(14, -13, -30);
    g.rotation.z = 0.35;
    return g;
  }

  // 画面の縦横比に合わせて地球の位置を変える（スマホの縦長では下のほうに大きく）
  layout(aspect: number) {
    if (aspect < 1) this.earth.position.set(5, -19, -36);
    else this.earth.position.set(19, -13, -36);
  }

  private updateNetwork(dt: number) {
    const { nodes, box } = this;
    const pos = this.nodePoints.geometry.getAttribute("position") as THREE.BufferAttribute;
    nodes.forEach((n, i) => {
      n.pos.addScaledVector(n.vel, dt);
      // 範囲の端で跳ね返る
      if (Math.abs(n.pos.x) > box.x) n.vel.x *= -1;
      if (Math.abs(n.pos.y) > box.y) n.vel.y *= -1;
      if (Math.abs(n.pos.z + 14) > box.z) n.vel.z *= -1;
      pos.setXYZ(i, n.pos.x, n.pos.y, n.pos.z);
    });
    pos.needsUpdate = true;

    const lp = this.lines.geometry.getAttribute("position") as THREE.BufferAttribute;
    const lc = this.lines.geometry.getAttribute("color") as THREE.BufferAttribute;
    const max = lp.count / 2;
    let k = 0;
    for (let i = 0; i < nodes.length && k < max; i++) {
      for (let j = i + 1; j < nodes.length && k < max; j++) {
        const d = nodes[i].pos.distanceTo(nodes[j].pos);
        if (d > this.linkDistance) continue;
        const a = (1 - d / this.linkDistance) * 0.55;
        lp.setXYZ(k * 2, nodes[i].pos.x, nodes[i].pos.y, nodes[i].pos.z);
        lp.setXYZ(k * 2 + 1, nodes[j].pos.x, nodes[j].pos.y, nodes[j].pos.z);
        lc.setXYZ(k * 2, BLUE.r * a, BLUE.g * a, BLUE.b * a);
        lc.setXYZ(k * 2 + 1, BLUE.r * a, BLUE.g * a, BLUE.b * a);
        k++;
      }
    }
    this.lines.geometry.setDrawRange(0, k * 2);
    lp.needsUpdate = true;
    lc.needsUpdate = true;
  }

  update(dt: number, t: number) {
    this.updateNetwork(dt);
    this.earth.rotation.y += dt * 0.02;
    this.stars.rotation.z += dt * 0.004;
    for (const o of this.orbs) {
      o.sprite.position.set(o.base.x + Math.sin(t * 0.15 + o.phase) * 1.5, o.base.y + Math.cos(t * 0.12 + o.phase) * 1.0, o.base.z);
      (o.sprite.material as THREE.SpriteMaterial).opacity = 0.4 + Math.sin(t * 0.8 + o.phase) * 0.15;
    }
  }
}
