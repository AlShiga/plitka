<template>
  <div class="contFirst p-t-100 p-b-100">
    <div class=" position-relative z-1 col-22 offset-1 contFirst__content d-flex align-items-end">
      <h2 class="h3">
        Let's start<br />
        your a project
      </h2>
      <svg
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
        mesh: ''
      }
    }
  },
  props: {
    // msg: String
  },
  methods: {
    animate: function (e) {
      this.stage.onRaf()
      this.mesh.onRaf()
      requestAnimationFrame(this.animate)
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

          this.uniforms = {
            resolution: {
              type: 'v2',
              value: [this.canvasWidth, this.canvasHeight]
            },
            time: { type: 'f', value: 0.0 },
            xScale: { type: 'f', value: 1.0 },
            yScale: { type: 'f', value: 0.5 },
            distortion: { type: 'f', value: 0.05 }
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
      console.log(this.mesh)
      console.log(this.stage)
    } else {
      // window.addEventListener('resize', this.stage.onResize)
      this.animate()
    }
  },
  unmounted () {
    console.log('Пока1')
    // window.removeEventListener('resize', this.stage.onResize)
    cancelAnimationFrame(this.animate)
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
