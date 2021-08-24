<template>
  <div class="contFirst p-t-100 p-b-100">
    <div class=" position-relative z-1 col-22 offset-1 contFirst__content d-flex align-items-end">
      <h2 v-if="$store.state.langEn" class="h3">
        Let's start<br />
        your a project
        <svg style='height:0.5em; width:auto; margin-left:0.5em'
        width="92"
        height="72"
        viewBox="0 0 92 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 0V32.9474C5 38.4702 9.47715 42.9474 15 42.9474H85M85 42.9474L58.75 19.6842M85 42.9474L58.75 68"
          stroke="#F8F8F8"
          stroke-width="9"
        />
      </svg>
      </h2>
       <h2 v-else class="h3">
        Скорее за<br />
        работу
        <svg style='height:0.5em; width:auto; margin-left:0.5em'
        width="92"
        height="72"
        viewBox="0 0 92 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 0V32.9474C5 38.4702 9.47715 42.9474 15 42.9474H85M85 42.9474L58.75 19.6842M85 42.9474L58.75 68"
          stroke="#F8F8F8"
          stroke-width="9"
        />
      </svg>
      </h2>

    </div>
  <canvas class="sinWrap"></canvas>
  </div>
</template>

<script>
// import Matter from 'matter-js'
import * as THREE from 'three'

export default {
  data () {
    return {
      name: 'contFirst',
      contFirst: {
        pause: false,
        stage: '',
        mesh: '',
        mouseX: 1000,
        mouseY: 1000,
        oldMouseX: 1000,
        oldMouseY: 1000
        // dist: 0.1
      }
    }
  },
  props: {
    // msg: String
  },
  methods: {
    animate: function (e) {
      if (this.stop) return
      this.stage.onRaf()
      this.mesh.onRaf()
      // console.log('animCont')
      requestAnimationFrame(this.animate)
    },
    mouseMove: function (e) {
      // console.log(e)
      this.contFirst.mouseX = e.clientX
      this.contFirst.mouseY = e.clientY
      // console.log(this.contFirst.mouseX)
    }
  },
  // methods(){},
  mounted () {
    console.log('Прив1')
    if (this.contFirst.pause === false) {
      const jsVertexShader = `
      attribute vec3 position;
      void main(){
        gl_Position = vec4(position, 1.0);
      }
    `

      const jsFragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        gl_FragColor = vec4(r, g, b, 1.0);
      }

    `

      // let raf
      const dist = 0.05
      class Stage {
        constructor () {
          this.renderParam = {
            clearColor: 0x666666,
            width: window.innerWidth,
            height: window.innerHeight
          }

          this.cameraParam = {
            left: -1,
            right: 1,
            top: 1,
            bottom: 1,
            near: 0,
            far: -1
          }

          this.scene = null
          this.camera = null
          this.renderer = null
          this.geometry = null
          this.material = null
          this.mesh = null

          this.isInitialized = false
        }

        init () {
          this._setScene()
          this._setRender()
          this._setCamera()

          this.isInitialized = true
        }

        _setScene () {
          this.scene = new THREE.Scene()
        }

        _setRender () {
          this.renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('.sinWrap')
          })
          this.renderer.setPixelRatio(window.devicePixelRatio)
          this.renderer.setClearColor(
            new THREE.Color(this.renderParam.clearColor)
          )
          this.renderer.setSize(this.renderParam.width, this.renderParam.height)
        }

        _setCamera () {
          if (!this.isInitialized) {
            this.camera = new THREE.OrthographicCamera(
              this.cameraParam.left,
              this.cameraParam.right,
              this.cameraParam.top,
              this.cameraParam.bottom,
              this.cameraParam.near,
              this.cameraParam.far
            )
          }

          const windowWidth = window.innerWidth
          const windowHeight = window.innerHeight

          this.camera.aspect = windowWidth / windowHeight

          this.camera.updateProjectionMatrix()
          this.renderer.setSize(windowWidth, windowHeight)
        }

        _render () {
          this.renderer.render(this.scene, this.camera)
        }

        onResize () {
          this._setCamera()
        }

        onRaf () {
          this._render()
        }
      }

      class Mesh {
        constructor (stage) {
          this.canvas = document.querySelector('.sinWrap')
          this.canvasWidth = this.canvas.width
          this.canvasHeight = this.canvas.height
          document.querySelector('.contFirst').style.height = this.canvas.height + 'px'
          this.uniforms = {
            resolution: {
              type: 'v2',
              value: [this.canvasWidth, this.canvasHeight]
            },
            time: { type: 'f', value: 0.0 },
            xScale: { type: 'f', value: 1.0 },
            yScale: { type: 'f', value: 0.5 },
            distortion: { type: 'f', value: dist }
          }

          this.stage = stage
        }

        init () {
          this._setMesh()
        }

        _setMesh () {
          const position = [
            -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0,
            1.0, 0.0, 1.0, 1.0, 0.0
          ]

          const positions = new THREE.BufferAttribute(
            new Float32Array(position),
            3
          )

          const geometry = new THREE.BufferGeometry()
          geometry.setAttribute('position', positions)

          const material = new THREE.RawShaderMaterial({
            vertexShader: jsVertexShader,
            fragmentShader: jsFragmentShader,
            uniforms: this.uniforms,
            side: THREE.DoubleSide
          })

          this.mesh = new THREE.Mesh(geometry, material)

          this.stage.scene.add(this.mesh)
        }

        _render () {
          this.uniforms.time.value += 0.01
        }

        onRaf () {
          this._render()
        }
      }

      this.stage = new Stage()

      this.stage.init()

      this.mesh = new Mesh(this.stage)

      this.mesh.init()

      // window.addEventListener('resize', this.stage.onResize)

      this.animate()
      // console.log(this.mesh)
      // console.log(this.stage)
      setInterval(() => {
        this.contFirst.oldMouseX = (this.contFirst.oldMouseX * 5 + this.contFirst.mouseX) / 6
        this.contFirst.oldMouseY = (this.contFirst.oldMouseY * 5 + this.contFirst.mouseY) / 6
        // console.log(this.contFirst.mouseX)
        // console.log(this.contFirst.oldMouseX)
        const moveX = (this.contFirst.oldMouseX) / innerWidth
        const moveY = (this.contFirst.oldMouseY) / innerHeight
        this.mesh.uniforms.distortion.value = 0.05 + 0.05 * moveY * moveX
        // this.mesh.uniforms.xScale.value = 1 + 0.1 * this.contFirst.mouseX
        this.mesh.uniforms.yScale.value = 0.4 + 0.2 * moveY
      }, 32)
    } else {
      window.addEventListener('resize', this.stage.onResize)
      this.animate()
    }
    document.addEventListener('mousemove', this.mouseMove)
  },
  unmounted () {
    window.removeEventListener('resize', this.stage.onResize)
    cancelAnimationFrame(this.animate)
    this.stop = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contFirst {
  position: relative;
}
.sinWrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
