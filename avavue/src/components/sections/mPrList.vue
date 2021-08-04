<template>
  <div class="row m-b-150">
    <div class="offset-1 col-lg-12 col-md-16 col-18">
      <h3 v-if="$store.state.langEn" class="h7 ttu">
        forward and we see our agency as a either the meaning of the work is
        obvious or to hell with it
      </h3>
      <h3 v-else class="h7 ttu">
        Здесь наши завершённые работы. Не сомневайтесь, ваш сайт будет ещё лучше.
      </h3>
    </div>
  </div>
  <div class="mPrItem row m-b-250">
    <div
      class="
        col-xl-16
        offset-xl-7
        col-lg-17
        offset-lg-6
        col-md-19
        offset-md-4
        col-22
        offset-1
        position-relattive
      "
    >
      <img src="~@/assets/img/mProj/p1.jpg" alt="" class="imgDisp w-100" />
      <div class="mPrItem__det">
        <div class="mPrItem__tags d-none d-lg-block m-b-40">
          <span class="p1">[ Branding ]</span>&nbsp;&nbsp;
          <span class="p1">[ Web ]</span>&nbsp;&nbsp;
          <span class="p1">[ Printing ]</span>&nbsp;&nbsp;
          <span class="p1">[ Logo ]</span>&nbsp;&nbsp;
          <span class="p1">[ 2021 ]</span>&nbsp;&nbsp;
        </div>
        <span class="h3 d-block">zapolie-village</span>
      </div>
    </div>
  </div>
  <div class="mPrItem row m-b-250">
    <div
      class="
        col-xl-16
        offset-xl-7
        col-lg-17
        offset-lg-6
        col-md-19
        offset-md-4
        col-22
        offset-1
        position-relattive
      "
    >
      <img src="~@/assets/img/mProj/p2.jpg" alt="" class="imgDisp w-100" />
      <div class="mPrItem__det">
        <div class="mPrItem__tags d-none d-lg-block m-b-40">
          <span class="p1">[ Branding ]</span>&nbsp;&nbsp;
          <span class="p1">[ Web ]</span>&nbsp;&nbsp;
          <span class="p1">[ Printing ]</span>&nbsp;&nbsp;
          <span class="p1">[ Logo ]</span>&nbsp;&nbsp;
          <span class="p1">[ 2021 ]</span>&nbsp;&nbsp;
        </div>
        <span class="h3 d-block">zapolie-village</span>
      </div>
    </div>
  </div>
  <div class="mPrItem row m-b-250">
    <div
      class="
        col-xl-16
        offset-xl-7
        col-lg-17
        offset-lg-6
        col-md-19
        offset-md-4
        col-22
        offset-1
        position-relattive
      "
    >
      <img src="~@/assets/img/mProj/p3.jpg" alt="" class="imgDisp w-100" />
      <div class="mPrItem__det">
        <div class="mPrItem__tags d-none d-lg-block m-b-40">
          <span class="p1">[ Branding ]</span>&nbsp;&nbsp;
          <span class="p1">[ Web ]</span>&nbsp;&nbsp;
          <span class="p1">[ Printing ]</span>&nbsp;&nbsp;
          <span class="p1">[ Logo ]</span>&nbsp;&nbsp;
          <span class="p1">[ 2021 ]</span>&nbsp;&nbsp;
        </div>
        <span class="h3 d-block">zapolie-village</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
const vertexShader = `
    precision mediump float;
    uniform float uxVelo;
    uniform float uyVelo;
    varying vec2 vUv;
    #define M_PI 3.1415926535897932384626433832795
    void main(){
      vec3 pos = position;
      pos.x = pos.x + ((sin(uv.y * M_PI) * uxVelo) * 0.125);
      pos.y = pos.y + ((cos(uv.x * M_PI) * uyVelo) * 0.125);
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
    }
    `

const fragmentShader = `
precision mediump float;

vec2 backgroundCoverUv(vec2 screenSize, vec2 imageSize, vec2 uv) {
  float screenRatio = screenSize.x / screenSize.y;
  float imageRatio = imageSize.x / imageSize.y;

  vec2 newSize = screenRatio < imageRatio 
      ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)
      : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);

  vec2 newOffset = (screenRatio < imageRatio 
      ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
      : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;

  return uv * screenSize / newSize + newOffset;
}

uniform sampler2D uTexture;

uniform vec2 uMeshSize;
uniform vec2 uImageSize;

uniform float uxVelo;
uniform float uyVelo;
uniform float uScale;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  vec2 texCenter = vec2(0.5);
  vec2 texUv = backgroundCoverUv(uMeshSize, uImageSize, uv);
  vec2 texScale = (texUv - texCenter) * uScale + texCenter;
  vec4 texturer = texture(uTexture, texScale);

  texScale.x += 0.15 * uxVelo;
  if(uv.x < 1.) texturer.g = texture(uTexture, texScale).g;

  texScale.x += 0.10 * uxVelo;
  if(uv.x < 1.) texturer.b = texture(uTexture, texScale).b;
  texScale.y += 0.15 * uyVelo;
  if(uv.x < 1.) texturer.g = texture(uTexture, texScale).g;

  texScale.y += 0.10 * uyVelo;
  if(uv.x < 1.) texturer.b = texture(uTexture, texScale).b;


  
  gl_FragColor = texturer;
}
`

const checkScrollSpeed = (function (settings) {
  settings = settings || {}

  let lastPos; let newPos; let timer; let delta
  const delay = settings.delay || 50 // in "ms" (higher means lower fidelity )

  function clear () {
    lastPos = null
    delta = 0
  }

  clear()

  return function () {
    newPos = window.scrollY
    if (lastPos != null) { // && newPos < maxScroll
      delta = newPos - lastPos
    }
    lastPos = newPos
    clearTimeout(timer)
    timer = setTimeout(clear, delay)
    return delta
  }
})()
const uniforms = []
const AddImg = {
  canvasW: 0,
  canvasH: 0,
  aspect: 0,
  scroll: 0,
  images: [],
  line: [],
  loader: {},
  scene: {},
  camera: {},
  renderer: {},
  scr: 0,
  init: function () {
    this.canvasW = window.innerWidth
    this.canvasH = window.innerHeight
    this.aspect = window.innerWidth / window.innerHeight

    this.loader = new THREE.TextureLoader()

    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(
      70,
      this.aspect,
      100,
      1000
    )
    this.camera.position.set(0, 0, 1000)
    this.camera.fov =
      2 *
      Math.atan(
        window.innerWidth /
          (this.aspect) /
          (2 * 1000)
      ) *
      (180 / Math.PI)
    this.camera.updateProjectionMatrix()

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })
    this.renderer.setClearColor(0xffffff, 0)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)
    this.renderer.domElement.classList.add('dispWrap')
    this.findImg('.imgDisp')
    // window.addEventListener('scroll', () => {
    //   this.changePos()
    //   // this.scroll = window.scrollY;
    // })
  },
  findImg: function (selector) {
    const images = document.querySelectorAll(selector)
    images.forEach((el, key) => {
      // console.dir(el);
      let texturr
      this.loader.load(
        el.src,
        (texture) => {
          texture.minFilter = THREE.LinearFilter
          texture.generateMipmaps = false
          texturr = texture
          uniforms[key].uTexture.value = texture
        }
      )

      // shader uniforms
      uniforms[key] = {
        uTime: { value: 0 },
        uTexture: { value: texturr },
        uMeshSize: {
          value: new THREE.Vector2(el.offsetWidth, el.offsetHeight)
        },
        uImageSize: {
          value: new THREE.Vector2(el.offsetWidth, el.offsetHeight)
        },
        uScale: { value: 1 },
        uxVelo: { value: 0 },
        uyVelo: { value: 0.1 }
      }
      const geometry = new THREE.PlaneBufferGeometry(1, 1, 30, 30)
      const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: uniforms[key],
        transparent: true
      })
      const cube = new THREE.Mesh(geometry, material)
      this.images[key] = cube
      cube.scale.set(el.offsetWidth, el.offsetHeight, 1)
      el.style.opacity = '0.3'

      this.scene.add(this.images[key])

      cube.position.x = 0 - this.canvasW / 2 + el.offsetWidth / 2 + el.offsetLeft
      cube.position.y = -this.canvasH / 2 + el.offsetHeight / 2 + el.offsetTop
    })
    console.log(AddImg.images)

    this.render()
    // console.log(this);
  },
  render: () => {
    requestAnimationFrame(AddImg.render)
    const newPos = window.scrollY
    // let delta
    if (AddImg.scroll != null) { // && newPos < maxScroll
      // delta = newPos - AddImg.scroll
      AddImg.scroll = newPos
    }
    // console.log(delta)
    AddImg.changePos()
    AddImg.renderer.render(AddImg.scene, AddImg.camera)
    AddImg.scr = (AddImg.scr * 3 + checkScrollSpeed() / 100) / 4
    uniforms.forEach((el) => {
      el.uyVelo.value = AddImg.scr
    }
    )
  },
  changePos: () => {
    document.querySelectorAll('.imgDisp').forEach((el, key) => {
      AddImg.images[key].position.y = AddImg.canvasH / 2 - el.offsetHeight / 2 - el.y
    })
  }
}
export default {
  data () {
    return {
    }
  },
  components: {

  },
  methods: {

  },
  mounted () {
    setTimeout(() => {
      // AddImg.init()
    }, 500)
  },
  unmounted () {
    console.log('Пока1')
  }
}

</script>

<style lang="scss" >
.dispWrap {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 1;
  // z-index: 1;
}

.mPrItem {
  &__det {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-100vw/24 * 6, -20%);
    @media (max-width: 1449.98px) {
      transform: translate(-100vw/24 * 5, -20%);
    }

    @media (max-width: 1024.98px) {
      transform: translate(-100vw/24 * 3, -20%);
    }

    @media (max-width: 767.98px) {
      transform: translate(0, 20%);
    }
  }
}
</style>
