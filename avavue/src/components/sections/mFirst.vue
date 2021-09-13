<template>
  <div class="mFirst p-t-250 p-b-250">
    <div v-if="$store.state.langEn" class="row z-5 position-relative">
      <div
        class="
          col-xl-19
          offset-xl-4
          col-lg-11
          offset-lg-4
          col-md-19
          offset-md-3
          col-20
          offset-2
        "
      >
        <h1 class="h2 m-b-80">let’s</h1>
      </div>
      <div
        class="
          col-xl-16
          offset-xl-7
          col-lg-15
          offset-lg-7
          col-md-16
          offset-md-6
          col-18
          offset-5
        "
      >
        <h1 class="h2 m-b-80">create</h1>
      </div>
      <div
        class="
          col-xl-22
          offset-xl-1
          col-lg-22
          offset-lg-1
          col-md-22
          offset-md-1
          col-20
          offset-1
        "
      >
        <h1 class="h2 m-b-100 d-lg-flex align-items-end">design<span class="d-none d-lg-block mFirst__textSm mp0 p1"><span class="p1 d-block m-b-10">[ AVA-Digital ];</span><span class="p1 d-block m-b-10">[ 2021 ];</span><span class="p1 d-block">[ UX / UI / branding / development ];</span></span></h1>
      </div>
      <div
        class="
          col-xl-17
          offset-xl-1
          col-lg-18
          offset-lg-1
          col-md-20
          offset-md-2
          col-20
          offset-2
        "
      >
        <h1 class="h2 m-b-80 text-right">filled</h1>
      </div>
      <div
        class="
          col-xl-17
          offset-xl-1
          col-lg-18
          offset-lg-1
          col-md-20
          offset-md-2
          col-20
          offset-2
        "
      >
        <h1 class="h2 m-b-80 text-right">with</h1>
      </div>
      <div
        class="
          col-xl-17
          offset-xl-1
          col-lg-18
          offset-lg-1
          col-md-20
          offset-md-2
          col-20
          offset-2
        "
      >
        <h1 class="h2 m-b-80 text-right">e&#8209;motions</h1>
      </div>
    </div>
    <div v-else class="row z-5 position-relative">
      <div
        class="
          col-xl-17
          offset-xl-1
          col-lg-18
          offset-lg-1
          col-md-19
          offset-md-3
          col-20
          offset-2
        "
      >
        <h1 class="h2 m-b-80">мы</h1>
      </div>
      <div
        class="
          col-xl-19
          offset-xl-4
          col-lg-11
          offset-lg-4
          col-md-17
          offset-md-5
          col-18
          offset-4
        "
      >
        <h1 class="h2 m-b-80">создаём</h1>
      </div>
      <div
        class="
          col-xl-22
          offset-xl-1
          col-lg-22
          offset-lg-1
          col-md-22
          offset-md-1
          col-20
          offset-1
        "
      >
        <h1 class="h2 m-b-100 d-lg-flex align-items-end">дизаин <span class="d-none d-lg-block mFirst__textSm p1"><span class="p1 d-block m-b-10">[ AVA-Digital ];</span><span class="p1 d-block m-b-10">[ 2021 ];</span><span class="p1 d-block">[ UX / UI / branding / development ];</span></span></h1>
      </div>
      <div
        class="
          col-xl-17
          offset-xl-1
          col-lg-18
          offset-lg-1
          col-md-20
          offset-md-2
          col-20
          offset-2
        "
      >
        <h1 class="h2 m-b-80 text-right">полный</h1>
      </div>
      <div
        class="
          col-xl-17
          offset-xl-1
          col-lg-18
          offset-lg-1
          col-md-20
          offset-md-2
          col-20
          offset-2
        "
      >
        <h1 class="h2 m-b-80 text-right">огня</h1>
      </div>
      <div
        class="
          col-xl-17
          offset-xl-1
          col-lg-18
          offset-lg-1
          col-md-20
          offset-md-2
          col-20
          offset-2
        "
      >
        <h1 class="h2 m-b-80 text-right">и страсти</h1>
      </div>
    </div>
    <div class="containerMAdv" touch-action="none">
      <canvas class="canvas1" width="1920" height="947" ></canvas>
      <!-- <canvas class="canvas2" width="1920" height="947" ></canvas> -->
      <!-- <div class="containerMAdv__bg z-1" touch-action="none"></div> -->
      <!-- <div class="containerMAdv__bg containerMAdv__bg_top z-1" touch-action="none"></div> -->
      <img src="@/assets/img/bgFp.png" alt="" class="containerMAdv__img">
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  data () {
    return {
      container: '',
      camera: '',
      renderer: '',
      uniforms: '',
      render: '',
      mFirstPause: false,
      mouse: {},
      play: 0,
      playNum: 2,
      pause: false,
      RAF: {},
      played: false,
      loaded: false
    }
  },
  methods: {
    onPointerMove: function (e) {
      this.mouse.X = e.pageX
      this.mouse.Y = e.pageY
      e.preventDefault()
    },
    onWindowResize: function (e) {
      this.renderer.setSize(window.innerWidth * 1.1, window.innerHeight * 1.1)
      this.uniforms.u_resolution.value.x = this.renderer.domElement.width
      this.uniforms.u_resolution.value.y = this.renderer.domElement.height
    },
    animate: function () {
      // console.log('anim')
      if (this.stop) return
      this.RAF = requestAnimationFrame(this.animate)
      if (!(this.play % this.playNum)) {
        this.render()
        this.mousePos()
      }
      ++this.play
      if (this.play >= 20) this.play = 0
    },
    mousePos: function () {
      const ratio = window.innerHeight / window.innerWidth

      this.mouse.oldX = (this.mouse.oldX * 5 + this.mouse.X) / 6
      this.mouse.oldY = (this.mouse.oldY * 5 + this.mouse.Y) / 6
      this.uniforms.u_mouse.value.x =
        (this.mouse.oldX - window.innerWidth / 2) / window.innerWidth / ratio
      this.uniforms.u_mouse.value.y =
        ((this.mouse.oldY - window.innerHeight / 2) / window.innerHeight) * -1
    }
  },
  mounted () {
    if (innerWidth < 1023) this.playNum = 4
    const fragmentShader = `
        uniform vec2 u_resolution;
        uniform float u_pxaspect;
        uniform vec2 u_mouse;
        uniform float u_time;
        uniform sampler2D u_noise;
        uniform sampler2D u_text500;
        uniform bool u_mousemoved;

        const float PI =  3.14;
        const float TAU = 6.28;

        const bool addNoise = true; // Whether to add noise to the rays
        const float decay = .96; // the amount to decay each sample by
        const float exposure = .65; // the screen exposure
        const float lightStrength = 5.5;
        const vec3 lightcolour = vec3(1.0, 0.1, 0.1); // the colour of the light
        const vec3 falloffcolour = vec3(0.90, 0.0, 0.05); // the colour of the falloff
        const vec3 bgcolour = vec3(.125, 0.125, .125); // the base colour of the render
        const float falloff = .5;
        const int samples = 12; // The number of samples to take
        const float density = .98; // The density of the "smoke"
        const float weight = .25; // how heavily to apply each step of the supersample
        const int octaves = 1; // the number of octaves to generate in the FBM noise
        const float seed = 43758.5453123; // A random seed :)

        vec2 res = vec2(0.9 , 0.5);

        float starSDF(vec2 st, int V, float s) {
            // st = st*4.-2.;
            float a = atan(st.y, st.x)/TAU;
            float seg = a * float(V);
            a = ((floor(seg) + 0.5)/float(V) +
                mix(s,-s,step(.5,fract(seg))))
                * TAU;
            return abs(dot(vec2(cos(a),sin(a)),
                           st));
        }

        float random2d(vec2 uv) {
          uv /= 256.;
          vec4 tex = texture2D(u_noise, uv);
          return mix(tex.x, tex.y, tex.a);
        }
        vec2 random2(vec2 st, float seed){
            st = vec2( dot(st,vec2(127.1,311.7)),
                      dot(st,vec2(269.5,183.3)) );
            return -1.0 + 2.0*fract(sin(st)*seed);
        }

        // Value Noise by Inigo Quilez - iq/2013
        // https://www.shadertoy.com/view/lsf3WH
        float noise(vec2 st, float seed) {
          vec3 x = vec3(st, 1.);
          vec3 p = floor(x);
          vec3 f = fract(x);
          f = f*f*(3.0-2.0*f);
          vec2 uv = (p.xy+vec2(37.0,17.0)*p.z) + f.xy;
          vec2 rg = texture2D(u_noise, (uv+0.5) / 256., 0.).yx - .5;
          return mix( rg.x, rg.y, f.z );
        }

        float fbm1(in vec2 _st, float seed) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100.0);
          // Rotate to reduce axial bias
          mat2 rot = mat2(cos(0.5), sin(0.5),
                          -sin(0.5), cos(0.50));
          for (int i = 0; i < octaves; ++i) {
              v += a * noise(_st, seed);
              _st = rot * _st * 2.0 + shift;
              a *= 0.4;
          }
          return v + .4;
        }

        float pattern(vec2 uv, float seed, float time, inout vec2 q, inout vec2 r) {

          q = vec2( fbm1( uv + vec2(0.0,0.0), seed ),
                         fbm1( uv + vec2(5.2,1.3), seed ) );

          r = vec2( fbm1( uv + 4.0*q + vec2(1.7 - time / 2.,9.2), seed ),
                         fbm1( uv + 4.0*q + vec2(8.3 - time / 2.,2.8), seed ) );

          float rtn = fbm1( uv + 4.0*r, seed );

          return rtn;
        }

        float tri(vec2 uv) {
          uv = (uv * 2.-1.)*2.;
          return max(abs(uv.x) * 0.866025 + uv.y * 0.5, -uv.y * 0.5);
        }
        float smin(float a, float b, float k) {
            float res = exp(-k*a) + exp(-k*b);
            return -log(res)/k;
        }

        float shapes(vec2 uv) {
      //     vec2 _uv = uv * .1;

      //     const float k = 6.0;
      //     const float w = 2.0;
      //     const float t = .5;

      //     float i = floor(length(uv)*k);

      //     float c = cos(cos(u_time * .3) * 3. / i * 5.);
      //     float s = sin(cos(u_time * .3) * 3. / i * 5.);
      //     uv *= mat2(c, -s, s, c);

      //     vec2 radial = vec2(i, atan(uv.y, uv.x));

      //     radial = vec2((i + .5)*(1.0/k),
      //              (floor(radial.y*(1.0/PI)*(i*w+t)) + 0.5 ) * PI/(i*w+t));

      //     vec2 cart = vec2(cos(radial.y), sin(radial.y)) * radial.x;

      //     float shade = length(uv-cart) * 30.;

      //     return smoothstep(0.5, 0.5 + fwidth(shade), shade - 0.02);

          uv += u_mouse * .1;

          float aspect = res.x / res.y;

          float scale = 1. / aspect * .3;

          return texture2D(u_text500, (uv) * scale + .5, -1.).x;

        }

        float occlusion(vec2 uv, vec2 lightpos, float objects) {
          return (1. - smoothstep(0.0, lightStrength, length(lightpos - uv))) * (1. - objects);
        }

        vec4 mainRender(vec2 uv, inout vec4 fragcolour) {

          float scale = 4.;
          uv *= scale;

          float exposure = exposure + (sin(u_time) * .5 + 1.) * .05;

          vec2 _uv = uv;
          vec2 lightpos = (vec2(u_mouse.x, u_mouse.y * -1.)) / u_resolution.y;
          lightpos = u_mouse * scale;

          if(!u_mousemoved) {
            // lightpos.x += cos(u_time * .25);
            // lightpos.y += sin(u_time * .5);
          }

          float obj = shapes(uv);
          float map = occlusion(uv, lightpos, obj);
          // dither = 0.;

          float _pattern = 0.;
          vec2 q = vec2(0.);
          vec2 r = vec2(0.);
          if(addNoise) {
            _pattern = pattern(_uv * 3. , seed, u_time, q, r) / 2.;
          }

          vec2 dtc = (_uv - lightpos) * (1. / float(samples) * density);
          // dtc += _pattern / 80.;
          float illumination_decay = 1.;
          vec3 basecolour = bgcolour;

          for(int i=0; i<samples; i++) {
            _uv -= dtc;
            if(addNoise) {
              uv += _pattern / 16.;
            }

            float movement = u_time * 20. * float(i + 1);

            float dither = random2d(uv * 512. + mod(vec2(movement*sin(u_time * .5), -movement), 1000.)) * 2.;

            float stepped_map = occlusion(uv, lightpos, shapes(_uv+dtc*dither));
            stepped_map *= illumination_decay * weight;
            illumination_decay *= decay;

            map += stepped_map;
          }

          float l = length(lightpos - uv);

          vec3 lightcolour = mix(lightcolour, falloffcolour, l*falloff);

          vec3 colour = vec3(basecolour+map*exposure*lightcolour);

          fragcolour = vec4(colour,1.0);
          return fragcolour;
        }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

        mainRender(uv, gl_FragColor);
      }
    `

    const vertexShader = `
      void main() {
          gl_Position = vec4( position, 1.0 );
      }
    `

    let scene

    const loader = new THREE.TextureLoader()
    let texture, _500
    loader.setCrossOrigin('anonymous')
    loader.load(require('@/assets/img/noise.png'), (tex) => {
      texture = tex
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.minFilter = THREE.LinearFilter

      loader.load(require('@/assets/img/mainAva.jpg'), (tex) => {
        _500 = tex
        this.loaded = true
        init()
        // console.log(this.played)
        if (this.played === false) {
          this.played = true
          this.animate()
        }
      })
    })

    const init = () => {
      this.container = document.querySelector('.containerMAdv')

      this.camera = new THREE.Camera()
      this.camera.position.z = 1

      scene = new THREE.Scene()

      var geometry = new THREE.PlaneBufferGeometry(2, 2)

      this.uniforms = {
        u_time: { type: 'f', value: 1.0 },
        u_resolution: { type: 'v2', value: new THREE.Vector2() },
        u_pxaspect: { type: 'f', value: window.devicePixelRatio },
        u_noise: { type: 't', value: texture },
        u_text500: { type: 't', value: _500 },
        u_mouse: { type: 'v2', value: new THREE.Vector2(-0.1, -0.1) }
      }

      var material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      })
      material.extensions.derivatives = true

      var mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      // this.renderer = new THREE.WebGLRenderer()
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('.containerMAdv .canvas1')
      })
      this.renderer.setPixelRatio(window.devicePixelRatio)

      // this.container.appendChild(this.renderer.domElement)

      this.onWindowResize()
      // window.addEventListener('resize', this.onWindowResize, false)
      // document
      document.querySelector('.mFirst').addEventListener('mousemove', this.onPointerMove)
    }

    this.render = () => {
      this.renderer.render(scene, this.camera)
    }

    this.mouse.X = innerWidth / 10 * 9
    this.mouse.oldX = innerWidth / 10 * 9
    this.mouse.Y = innerHeight / 10
    this.mouse.oldY = innerHeight / 10
    // this.scrollAnimation()

    this.tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.mFirst',
        start: 'top top',
        end: 'bottom top',
        scrub: 3
        // markers: true
      }
    })
    this.tl.to('.containerMAdv', { yPercent: 30 })

    ScrollTrigger.create({
      trigger: '.mFirst',
      start: 'top bottom',
      // markers: true,
      end: 'bottom top',
      // scrub: 2,
      // id: '2',
      onToggle: self => {
        // console.log(self.isActive)
        // console.log(this.played)
        if (self.isActive && this.loaded) {
          if (!this.played) {
            // console.log('start')
            this.played = true
            this.animate()
          }
        } else {
          cancelAnimationFrame(this.RAF)
          this.played = false
        }
      }
      // onToggle: () => { this.world.gravity.scale = 0.0015 }
    })
    // this.tl.push(tl)
  },
  unmounted () {
    ScrollTrigger.getAll().forEach(t => t.kill())
    window.removeEventListener('resize', this.onWindowResize, false)
    document.removeEventListener('mousemove', this.onPointerMove)
    this.mFirstPause = true
    this.stop = true
  }
}
</script>

<style scoped lang="scss">
.mFirst {
  position: relative;
  padding-top: 300px;
  // overflow: hidden;
  &__textSm{
    transform: translate(50px, 50%);
    @media (max-width: 1439.98px) {
      transform: translate(40px, 40%);
    }
  }
  @media (max-width: 767.98px) {
    .h2{
      margin-bottom: 27px;
    }
  }
}
.containerMAdv {
  position: absolute;
  top: 0;
  left: 0;
  // bottom: 0;
  // right: 0;
  background-color: #202020;
  &__bg{
    position: absolute;
    bottom: 0vh;
    right: 0;
    left: 0;
    height: 10vh;
    background: linear-gradient(to bottom, rgba(32,32,32,0) 0%, #202020 100%);
    transition: 1s ease-in-out;
    &_top{
      background: linear-gradient(to top, rgba(32,32,32,0) 0%, #202020 100%);
      top: 0vh;
      bottom: auto;
    }
  }
  &__img{
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    object-fit: cover;
  }
  // canvas{
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
}
.bg_w .containerMAdv__bg{background: linear-gradient(to bottom, #202020 0%, #202020 100%);}
.bg_w .containerMAdv__bg_top{background: linear-gradient(to top, #202020 0%, #202020 100%);}
</style>
