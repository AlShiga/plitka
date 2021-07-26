<template>
  <div class="bg_g">
    <div class="wrapFlyTags"></div>
  </div>
</template>

<script>
import Matter from 'matter-js'
// import { ScrollTrigger } from 'gsap/all'

// import 'poly-decomp'

export default {
  data () {
    return {
      name: 'mTagsFly',
      myMatter: {
        pause: false,
        Engine: '',
        Render: '',
        MouseConstraint: '',
        World: '',
        Bodies: '',
        engine: '',
        world: '',
        render: '',
        radius: 20,
        elWorld: {},
        mouse: '',
        mouseConstraint: ''
      }
    }
  },
  props: {
    // msg: String
  },
  // methods(){},
  mounted () {
    if (this.myMatter.pause === false) {
      this.Engine = Matter.Engine
      this.Render = Matter.Render
      this.MouseConstraint = Matter.MouseConstraint
      this.Mouse = Matter.Mouse
      this.World = Matter.World
      this.Bodies = Matter.Bodies
      this.engine = this.Engine.create()
      this.world = this.engine.world

      this.world.gravity.scale = 0

      this.render = this.Render.create({
        element: document.querySelector('.wrapFlyTags'),
        engine: this.engine,
        options: {
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: 2,
          background: '#C4C4C4',
          wireframes: false
        }
      })

      this.elWorld = {
        ground: this.Bodies.rectangle(
          window.innerWidth / 2 + 160,
          window.innerHeight + 80,
          window.innerWidth + 320,
          160,
          { render: { fillStyle: '#080808' }, isStatic: true }
        ),
        wallLeft: this.Bodies.rectangle(
          -80,
          window.innerHeight / 2,
          160,
          window.innerHeight,
          { isStatic: true }
        ),
        wallRight: this.Bodies.rectangle(
          window.innerWidth + 80,
          window.innerHeight / 2,
          160,
          1200,
          { isStatic: true }
        ),
        roof: this.Bodies.rectangle(
          window.innerWidth / 2 + 160,
          -80,
          window.innerWidth + 320,
          160,
          { isStatic: true }
        ),
        art: this.Bodies.rectangle(235, 460, 355, 58, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/web.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        threeD: this.Bodies.rectangle(90, 760, 180, 58, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/love.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        })
      }
      this.World.add(this.engine.world, [
        this.elWorld.ground,
        this.elWorld.wallLeft,
        this.elWorld.wallRight,
        this.elWorld.roof,
        this.elWorld.art,
        this.elWorld.threeD
      ])
      // add mouse control
      this.mouse = this.Mouse.create(this.render.canvas)
      this.mouseConstraint = this.MouseConstraint.create(this.engine, {
        mouse: this.mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      })

      this.World.add(this.world, this.mouseConstraint)

      this.mouse.element.removeEventListener('mousewheel', this.mouse.mousewheel)
      this.mouse.element.removeEventListener('DOMMouseScroll', this.mouse.mousewheel)

      // run the engine
      this.Engine.run(this.engine)

      // run the renderer
      this.Render.run(this.render)
    } else {
      this.Render.run(this.render)
    }
  },
  unmounted () {
    this.Render.stop(this.render)
    this.myMatter.pause = true
  }
}
</script>

<style scoped lang="scss"></style>
