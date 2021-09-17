var THREE = _interopRequireWildcard(require("https://cdn.skypack.dev/three@0.124.0"));

var _kyouka = _interopRequireDefault(require("https://cdn.skypack.dev/kyouka@1.2.5"));

var _OrbitControls = require("https://cdn.skypack.dev/three@0.124.0/examples/jsm/controls/OrbitControls");

var _GLTFLoader = require("https://cdn.skypack.dev/three@0.124.0/examples/jsm/loaders/GLTFLoader");

var _FBXLoader = require("https://cdn.skypack.dev/three@0.124.0/examples/jsm/loaders/FBXLoader");

var _stats = _interopRequireDefault(require("https://cdn.skypack.dev/three@0.124.0/examples/jsm/libs/stats.module"));

var CANNON = _interopRequireWildcard(require("https://cdn.skypack.dev/cannon-es@0.18.0"));

var _postprocessing = require("https://cdn.skypack.dev/postprocessing@6.22.2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const calcAspect = el => el.clientWidth / el.clientHeight;

const getNormalizedMousePos = e => {
  return {
    x: e.clientX / window.innerWidth * 2 - 1,
    y: -(e.clientY / window.innerHeight) * 2 + 1
  };
}; // 三维点


class Point {
  constructor(p) {
    this.x = p.x;
    this.y = p.y;
    this.z = p.z;
  }

} // 数组转化为点


const array2Point = arr => new Point({
  x: arr[0],
  y: arr[1],
  z: arr[2]
}); // 点转化为数组


const point2Array = point => [point.x, point.y, point.z]; // 多个数组转化为多个点


const arrays2Point = arrs => arrs.map(item => array2Point(item)); // 点转化为Three.js的向量


const point2ThreeVector = point => new THREE.Vector3(point.x, point.y, point.z); // 点转化为Cannon.js的向量


const point2CannonVec = point => new CANNON.Vec3(point.x, point.y, point.z);

class MeshPhysicsObject {
  constructor(mesh, body, copyPosition = true, copyQuaternion = true) {
    this.mesh = mesh;
    this.body = body;
    this.copyPosition = copyPosition;
    this.copyQuaternion = copyQuaternion;
  }

}

class Base {
  constructor(sel, debug = false) {
    this.debug = debug;
    this.container = document.querySelector(sel);
    this.perspectiveCameraParams = {
      fov: 75,
      near: 0.1,
      far: 100
    };
    this.orthographicCameraParams = {
      zoom: 2,
      near: -100,
      far: 1000
    };
    this.cameraPosition = new THREE.Vector3(0, 3, 10);
    this.lookAtPosition = new THREE.Vector3(0, 0, 0);
    this.rendererParams = {
      outputEncoding: THREE.LinearEncoding,
      config: {
        alpha: true,
        antialias: true
      }
    };
    this.mousePos = new THREE.Vector2(0, 0);
    this.mouseSpeed = 0;
  } // 初始化


  init() {
    this.createScene();
    this.createPerspectiveCamera();
    this.createRenderer();
    this.createMesh({});
    this.createLight();
    this.createOrbitControls();
    this.addListeners();
    this.setLoop();
  } // 创建场景


  createScene() {
    const scene = new THREE.Scene();

    if (this.debug) {
      scene.add(new THREE.AxesHelper());
      const stats = (0, _stats.default)();
      this.container.appendChild(stats.dom);
      this.stats = stats;
    }

    this.scene = scene;
  } // 创建透视相机


  createPerspectiveCamera() {
    const {
      perspectiveCameraParams,
      cameraPosition,
      lookAtPosition
    } = this;
    const {
      fov,
      near,
      far
    } = perspectiveCameraParams;
    const aspect = calcAspect(this.container);
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.copy(cameraPosition);
    camera.lookAt(lookAtPosition);
    this.camera = camera;
  } // 创建正交相机


  createOrthographicCamera() {
    const {
      orthographicCameraParams,
      cameraPosition,
      lookAtPosition
    } = this;
    const {
      left,
      right,
      top,
      bottom,
      near,
      far
    } = orthographicCameraParams;
    const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
    camera.position.copy(cameraPosition);
    camera.lookAt(lookAtPosition);
    this.camera = camera;
  } // 更新正交相机参数


  updateOrthographicCameraParams() {
    const {
      container
    } = this;
    const {
      zoom,
      near,
      far
    } = this.orthographicCameraParams;
    const aspect = calcAspect(container);
    this.orthographicCameraParams = {
      left: -zoom * aspect,
      right: zoom * aspect,
      top: zoom,
      bottom: -zoom,
      near,
      far,
      zoom
    };
  } // 创建渲染


  createRenderer(useWebGL1 = false) {
    var _a;

    const {
      rendererParams
    } = this;
    const {
      outputEncoding,
      config
    } = rendererParams;
    const renderer = !useWebGL1 ? new THREE.WebGLRenderer(config) : new THREE.WebGL1Renderer(config);
    renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    renderer.outputEncoding = outputEncoding;
    this.resizeRendererToDisplaySize();
    (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(renderer.domElement);
    this.renderer = renderer;
    this.renderer.setClearColor(0x000000, 0);
  } // 允许投影


  enableShadow() {
    this.renderer.shadowMap.enabled = true;
  } // 调整渲染器尺寸


  resizeRendererToDisplaySize() {
    const {
      renderer
    } = this;

    if (!renderer) {
      return;
    }

    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const {
      clientWidth,
      clientHeight
    } = canvas;
    const width = clientWidth * pixelRatio | 0;
    const height = clientHeight * pixelRatio | 0;
    const isResizeNeeded = canvas.width !== width || canvas.height !== height;

    if (isResizeNeeded) {
      renderer.setSize(width, height, false);
    }

    return isResizeNeeded;
  } // 创建网格


  createMesh(meshObject, container = this.scene) {
    const {
      geometry = new THREE.BoxGeometry(1, 1, 1),
      material = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#d9dfc8")
      }),
      position = new THREE.Vector3(0, 0, 0)
    } = meshObject;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    container.add(mesh);
    return mesh;
  } // 创建光源


  createLight() {
    const dirLight = new THREE.DirectionalLight(new THREE.Color("#ffffff"), 0.5);
    dirLight.position.set(0, 50, 0);
    this.scene.add(dirLight);
    const ambiLight = new THREE.AmbientLight(new THREE.Color("#ffffff"), 0.4);
    this.scene.add(ambiLight);
  } // 创建轨道控制


  createOrbitControls() {
    const controls = new _OrbitControls.OrbitControls(this.camera, this.renderer.domElement);
    const {
      lookAtPosition
    } = this;
    controls.target.copy(lookAtPosition);
    controls.update();
    this.controls = controls;
  } // 监听事件


  addListeners() {
    this.onResize();
  } // 监听画面缩放


  onResize() {
    window.addEventListener("resize", e => {
      if (this.shaderMaterial) {
        this.shaderMaterial.uniforms.uResolution.value.x = window.innerWidth;
        this.shaderMaterial.uniforms.uResolution.value.y = window.innerHeight;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      } else {
        if (this.camera instanceof THREE.PerspectiveCamera) {
          const aspect = calcAspect(this.container);
          const camera = this.camera;
          camera.aspect = aspect;
          camera.updateProjectionMatrix();
        } else if (this.camera instanceof THREE.OrthographicCamera) {
          this.updateOrthographicCameraParams();
          const camera = this.camera;
          const {
            left,
            right,
            top,
            bottom,
            near,
            far
          } = this.orthographicCameraParams;
          camera.left = left;
          camera.right = right;
          camera.top = top;
          camera.bottom = bottom;
          camera.near = near;
          camera.far = far;
          camera.updateProjectionMatrix();
        }

        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      }
    });
  } // 动画


  update() {
    console.log("animation");
  } // 渲染


  setLoop() {
    this.renderer.setAnimationLoop(() => {
      this.resizeRendererToDisplaySize();
      this.update();

      if (this.controls) {
        this.controls.update();
      }

      if (this.stats) {
        this.stats.update();
      }

      if (this.composer) {
        this.composer.render();
      } else {
        this.renderer.render(this.scene, this.camera);
      }
    });
  } // 创建文本


  createText(text = "", config, material = new THREE.MeshStandardMaterial({
    color: "#ffffff"
  })) {
    const geo = new THREE.TextGeometry(text, config);
    const mesh = new THREE.Mesh(geo, material);
    return mesh;
  } // 创建音效源


  createAudioSource() {
    const listener = new THREE.AudioListener();
    this.camera.add(listener);
    const sound = new THREE.Audio(listener);
    this.sound = sound;
  } // 加载音效


  loadAudio(url) {
    const loader = new THREE.AudioLoader();
    return new Promise(resolve => {
      loader.load(url, buffer => {
        this.sound.setBuffer(buffer);
        resolve(buffer);
      });
    });
  } // 加载模型


  loadModel(url) {
    const loader = new _GLTFLoader.GLTFLoader();
    return new Promise((resolve, reject) => {
      loader.load(url, gltf => {
        const model = gltf.scene;
        console.log(model);
        resolve(model);
      }, undefined, err => {
        console.log(err);
        reject();
      });
    });
  } // 加载FBX模型


  loadFBXModel(url) {
    const loader = new _FBXLoader.FBXLoader();
    return new Promise((resolve, reject) => {
      loader.load(url, obj => {
        resolve(obj);
      }, undefined, err => {
        console.log(err);
        reject();
      });
    });
  } // 加载字体


  loadFont(url) {
    const loader = new THREE.FontLoader();
    return new Promise(resolve => {
      loader.load(url, font => {
        resolve(font);
      });
    });
  } // 创建点选模型


  createRaycaster() {
    this.raycaster = new THREE.Raycaster();
    this.trackMousePos();
  } // 追踪鼠标位置


  trackMousePos() {
    window.addEventListener("mousemove", e => {
      this.setMousePos(e);
    });
    window.addEventListener("touchstart", e => {
      this.setMousePos(e.touches[0]);
    }, {
      passive: false
    });
    window.addEventListener("touchmove", e => {
      this.setMousePos(e.touches[0]);
    });
  } // 设置鼠标位置


  setMousePos(e) {
    const {
      x,
      y
    } = getNormalizedMousePos(e);
    this.mousePos.x = x;
    this.mousePos.y = y;
  } // 获取点击物


  getInterSects(container = this.scene) {
    this.raycaster.setFromCamera(this.mousePos, this.camera);
    const intersects = this.raycaster.intersectObjects(container.children, true);
    return intersects;
  } // 选中点击物时


  onChooseIntersect(target, container = this.scene) {
    const intersects = this.getInterSects(container);
    const intersect = intersects[0];

    if (!intersect || !intersect.face) {
      return null;
    }

    const {
      object
    } = intersect;
    return target === object ? intersect : null;
  } // 获取跟屏幕同像素的fov角度


  getScreenFov() {
    return _kyouka.default.rad2deg(2 * Math.atan(window.innerHeight / 2 / this.cameraPosition.z));
  } // 获取重心坐标系


  getBaryCoord(bufferGeometry) {
    // https://gist.github.com/mattdesl/e399418558b2b52b58f5edeafea3c16c
    const length = bufferGeometry.attributes.position.array.length;
    const count = length / 3;
    const bary = [];

    for (let i = 0; i < count; i++) {
      bary.push(0, 0, 1, 0, 1, 0, 1, 0, 0);
    }

    const aCenter = new Float32Array(bary);
    bufferGeometry.setAttribute("aCenter", new THREE.BufferAttribute(aCenter, 3));
  } // 追踪鼠标速度


  trackMouseSpeed() {
    // https://stackoverflow.com/questions/6417036/track-mouse-speed-with-js
    let lastMouseX = -1;
    let lastMouseY = -1;
    let mouseSpeed = 0;
    window.addEventListener("mousemove", e => {
      const mousex = e.pageX;
      const mousey = e.pageY;

      if (lastMouseX > -1) {
        mouseSpeed = Math.max(Math.abs(mousex - lastMouseX), Math.abs(mousey - lastMouseY));
        this.mouseSpeed = mouseSpeed / 100;
      }

      lastMouseX = mousex;
      lastMouseY = mousey;
    });
    document.addEventListener("mouseleave", () => {
      this.mouseSpeed = 0;
    });
  } // 使用PCFSoft阴影


  usePCFSoftShadowMap() {
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  } // 使用VSM阴影


  useVSMShadowMap() {
    this.renderer.shadowMap.type = THREE.VSMShadowMap;
  } // 将相机的方向设为z轴


  setCameraUpZ() {
    this.camera.up.set(0, 0, 1);
  } // 获取viewport


  getViewport() {
    const {
      camera
    } = this;
    const position = new THREE.Vector3();
    const target = new THREE.Vector3();
    const distance = camera.getWorldPosition(position).distanceTo(target);
    const fov = camera.fov * Math.PI / 180; // convert vertical fov to radians

    const h = 2 * Math.tan(fov / 2) * distance; // visible height

    const w = h * (window.innerWidth / window.innerHeight);
    const viewport = {
      width: w,
      height: h
    };
    this.viewport = viewport;
  }

}

class PhysicsBase extends Base {
  constructor(sel, debug = false) {
    super(sel, debug);
    this.gravity = new CANNON.Vec3(0, -9.82, 0);
    this.meshPhysicsObjs = [];
  } // 创建物理世界


  createWorld() {
    const {
      gravity
    } = this;
    const world = new CANNON.World();
    world.gravity.copy(gravity);
    this.world = world;
  } // 创建物理物体


  createBody(shape, body, bodyOffset = new CANNON.Vec3(0, 0, 0), orientation = new CANNON.Quaternion(0, 0, 0)) {
    body.addShape(shape, bodyOffset, orientation);
    this.world.addBody(body);
    return body;
  } // 动画


  update() {
    this.sync();
    this.world.step(1 / 60);
  } // 同步物理和渲染


  sync() {
    this.meshPhysicsObjs.forEach(obj => {
      const {
        mesh,
        body,
        copyPosition,
        copyQuaternion
      } = obj;

      if (copyPosition) {
        mesh.position.copy(body.position);
      }

      if (copyQuaternion) {
        mesh.quaternion.copy(body.quaternion);
      }
    });
  }

}

class BouncyBalloon extends PhysicsBase {
  constructor(sel, debug) {
    super(sel, debug);
    this.perspectiveCameraParams = {
      fov: 35,
      near: 10,
      far: 40
    }; // 透视相机相关参数

    this.cameraPosition = new THREE.Vector3(0, 0, 20); // 相机位置

    this.gravity = new CANNON.Vec3(0, 0, 0); // 重力

    this.ballMat = null; // 球的材质

    this.balls = []; // 一堆小球

    this.planes = []; // 4个平面隔板

    this.mouseFollowBall = null; // 跟随鼠标的大球

    this.params = {
      ballColor: "#002f93" // 球的颜色

    };
  } // 初始化


  init() {
    this.createWorld();
    this.createScene();
    this.createPerspectiveCamera();
    this.getViewport();
    this.createRenderer();
    this.changeRendererParams();
    this.createBallMaterial();
    this.createBalls();
    this.createFourPlanes();
    this.addBallsDamping();
    this.createMouseFollowBall();
    this.hideSomeObjs();
    this.createLight();
    this.createPostprocessingEffect();
    this.trackMousePos();
    this.addListeners();
    this.setLoop();
  } // 创建球材质


  createBallMaterial() {
    const {
      ballColor
    } = this.params;
    const ballMat = new THREE.MeshLambertMaterial({
      color: new THREE.Color("silver"),
      emissive: new THREE.Color(ballColor)
    });
    this.ballMat = ballMat;
  } // 创建球


  createBall({
    position = new Point({
      x: 0,
      y: 0,
      z: 0
    }),
    scale = 1
  }) {
    // 在three.js中创建渲染物体
    const geo = new THREE.SphereBufferGeometry(1, 64, 64);
    const mat = this.ballMat;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(point2ThreeVector(position));
    mesh.scale.copy(new THREE.Vector3(scale, scale, scale));
    this.scene.add(mesh); // 在cannon.js中创建物理物体

    const body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Box(new CANNON.Vec3(scale, scale, scale)),
      position: point2CannonVec(position)
    });
    this.world.addBody(body); // 将两物体的数据同步

    const obj = new MeshPhysicsObject(mesh, body);
    this.meshPhysicsObjs.push(obj);
    return obj;
  } // 创建一堆球


  createBalls(count = 64) {
    const balls = [...Array(count).keys()].map(() => {
      const scale = _kyouka.default.randomNumberInRange(0.5, 1);

      const ball = this.createBall({
        scale
      });
      return ball;
    });
    this.balls = balls;
  } // 创建平面


  createPlane({
    position = new Point({
      x: 0,
      y: 0,
      z: 0
    }),
    rotation = new Point({
      x: 0,
      y: 0,
      z: 0
    })
  }) {
    // 在three.js中创建渲染物体
    const geo = new THREE.PlaneGeometry(1, 1);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("red"),
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(point2ThreeVector(position)); // @ts-ignore

    mesh.rotation.set(...point2Array(rotation));
    this.scene.add(mesh); // 在cannon.js中创建物理物体

    const body = new CANNON.Body({
      shape: new CANNON.Plane(),
      position: point2CannonVec(position),
      quaternion: new CANNON.Quaternion().setFromEuler( // @ts-ignore
      ...point2Array(rotation))
    });
    this.world.addBody(body); // 将两物体的数据同步

    const obj = new MeshPhysicsObject(mesh, body);
    this.meshPhysicsObjs.push(obj);
    return obj;
  } // 创建4个平面隔板


  createFourPlanes() {
    const planePositions = arrays2Point([[0, 0, 0], [0, 0, 8], [0, -4, 0], [0, 4, 0]]);
    const planeRotations = arrays2Point([[0, 0, 0], [0, _kyouka.default.deg2rad(-180), 0], [_kyouka.default.deg2rad(-90), 0, 0], [_kyouka.default.deg2rad(90), 0, 0]]);
    const planes = [];

    for (let i = 0; i < 4; i++) {
      const position = planePositions[i];
      const rotation = planeRotations[i];
      const plane = this.createPlane({
        position,
        rotation
      });
      planes.push(plane);
    }

    this.planes = planes;
  } // 给球添加阻尼


  addBallsDamping() {
    this.balls.forEach(ball => {
      ball.body.angularDamping = 0.2;
      ball.body.linearDamping = 0.95;
    });
  } // 动画


  update() {
    this.sync();
    this.world.step(1 / 60);
    this.applyForce2Balls();
    this.mouseBallFollow();
  } // 给球施加力


  applyForce2Balls() {
    this.balls.forEach(obj => {
      const force = new THREE.Vector3().copy(obj.body.position).normalize().multiplyScalar(-36);
      obj.body.applyForce(force);
    });
  } // 创建跟踪鼠标的球


  createMouseFollowBall(scale = 2) {
    // 在three.js中创建渲染物体
    const geo = new THREE.SphereBufferGeometry(1, 64, 64);
    const mat = this.ballMat;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.copy(new THREE.Vector3(scale, scale, scale));
    this.scene.add(mesh); // 在cannon.js中创建物理物体

    const body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(2),
      type: CANNON.Body.KINEMATIC
    });
    this.world.addBody(body); // 将两物体的数据同步

    const mouseFollowBall = new MeshPhysicsObject(mesh, body);
    this.meshPhysicsObjs.push(mouseFollowBall);
    this.mouseFollowBall = mouseFollowBall;
  } // 大球跟踪鼠标


  mouseBallFollow() {
    const mousePos = this.mousePos;
    const x = mousePos.x * this.viewport.width / 2;
    const y = mousePos.y * this.viewport.height / 2;
    const pos = new CANNON.Vec3(x, y, 2.5);
    this.mouseFollowBall.body.position.copy(pos);
  } // 隐藏部分物体


  hideSomeObjs() {
    this.planes.forEach(plane => plane.mesh.visible = false);
    this.mouseFollowBall.mesh.visible = false;
  } // 更改渲染器参数


  changeRendererParams() {
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.CineonToneMapping;
    this.renderer.toneMappingExposure = 1.5;
  } // 创建光源


  createLight() {
    const {
      ballColor
    } = this.params; // 环境光

    const ambiLight = new THREE.AmbientLight(new THREE.Color("white"), 0.75);
    this.scene.add(ambiLight); // 平行光

    const dirLight1 = new THREE.DirectionalLight(new THREE.Color("white"), 4);
    dirLight1.position.set(0, 5, -5);
    this.scene.add(dirLight1); // 聚光

    const spotLight = new THREE.SpotLight(new THREE.Color(ballColor));
    spotLight.position.set(20, 20, 25);
    this.scene.add(spotLight);
  } // 创建后期处理特效


  createPostprocessingEffect() {
    const {
      ballColor
    } = this.params;
    const composer = new _postprocessing.EffectComposer(this.renderer); // 渲染通道

    const renderPass = new _postprocessing.RenderPass(this.scene, this.camera);
    composer.addPass(renderPass); // 法线通道

    const normalPass = new _postprocessing.NormalPass(this.scene, this.camera);
    composer.addPass(normalPass); // SSAO特效

    const ssaoConfig = {
      rangeThreshold: 0.5,
      rangeFalloff: 0.1,
      bias: 0.5
    };
    const ssaoEffect1 = new _postprocessing.SSAOEffect(this.camera, normalPass.renderTarget.texture, Object.assign(Object.assign({}, ssaoConfig), {
      color: ballColor,
      samples: 9,
      radius: 30,
      intensity: 30
    }));
    const ssaoEffect2 = new _postprocessing.SSAOEffect(this.camera, normalPass.renderTarget.texture, Object.assign(Object.assign({}, ssaoConfig), {
      color: ballColor,
      samples: 18,
      radius: 5,
      intensity: 30
    })); // 特效通道

    const effectPass = new _postprocessing.EffectPass(this.camera, ssaoEffect1, ssaoEffect2);
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);
    this.composer = composer;
  }

}

const start = () => {
  const bouncyBalloon = new BouncyBalloon(".bouncy-balloon", false);
  bouncyBalloon.init();
};

start();