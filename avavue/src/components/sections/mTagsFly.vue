<template>
  <div class="bg_g p-t-100">
    <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />
    <div class="wrapFlyTags"></div>
  </div>
</template>

<script>
import secTitle from '@/components/secTitle.vue'

import Matter from 'matter-js'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
// import { ScrollTrigger } from 'gsap/all'

// import 'poly-decomp'

export default {

  data () {
    return {
      name: 'mTagsFly',
      scrollTr: {},
      scrollTrPlay: {},
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
  components: { secTitle },
  props: {
    // msg: String
  },
  methods: {
    scrollAnimation () {
      this.scrollTr = ScrollTrigger.create({
        trigger: '.wrapFlyTags',
        start: 'center center',
        markers: true,
        // end: 'bottom top',
        scrub: 2,
        id: '1',
        // onToggle: self => console.log('toggled, isActive:', self.isActive)
        onToggle: () => { this.world.gravity.scale = 0.0015 }
      })
      this.scrollTrPlay = ScrollTrigger.create({
        trigger: '.wrapFlyTags',
        start: 'top bottom',
        markers: true,
        end: 'bottom top',
        // scrub: 2,
        id: '2',
        onToggle: self => {
          console.log('toggled, isActive:', self.isActive)
          if (self.isActive) {
            this.Render.run(this.render)
            this.myMatter.pause = false
          } else {
            this.Render.stop(this.render)
            this.myMatter.pause = true
          }
        }
        // onToggle: () => { this.world.gravity.scale = 0.0015 }
      })
    }
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
          height: window.innerHeight * 0.9,
          pixelRatio: 2,
          background: '#C4C4C4',
          wireframes: false
        }
      })

      this.elWorld = {
        ground: this.Bodies.rectangle(
          window.innerWidth * 0.9 / 2 + 160,
          window.innerHeight * 0.9 + 80,
          window.innerWidth + 320,
          160,
          { render: { fillStyle: '#080808' }, isStatic: true }
        ),
        wallLeft: this.Bodies.rectangle(
          -80,
          window.innerHeight * 0.9 / 2,
          160,
          window.innerHeight * 0.9,
          { isStatic: true }
        ),
        wallRight: this.Bodies.rectangle(
          window.innerWidth + 80,
          window.innerHeight * 0.9 / 2,
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
        web: this.Bodies.rectangle(600, 200, 460, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/web.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        love: this.Bodies.rectangle(900, 200, 240, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/love.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        brand: this.Bodies.rectangle(1200, 200, 430, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/brand.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        sites: this.Bodies.rectangle(300, 300, 243, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/sites.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        animations: this.Bodies.rectangle(640, 300, 411, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/animations.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        copywriting: this.Bodies.rectangle(1080, 300, 448, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/copywriting.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        promotion: this.Bodies.rectangle(1520, 300, 422, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/promotion.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        naming: this.Bodies.rectangle(520, 400, 313, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/naming.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        cats: this.Bodies.rectangle(820, 400, 233, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/cats.svg'),
              xScale: 1,
              yScale: 1
            }
          }
        }),
        uxui: this.Bodies.rectangle(1180, 400, 457, 78, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/uxui.svg'),
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
        this.elWorld.web,
        this.elWorld.love,
        this.elWorld.brand,
        this.elWorld.sites,
        this.elWorld.animations,
        this.elWorld.copywriting,
        this.elWorld.promotion,
        this.elWorld.naming,
        this.elWorld.cats,
        this.elWorld.uxui

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
      // this.Render.run(this.render)
    } else {
      // this.Render.play(this.render)
    }
    this.scrollAnimation()
  },
  unmounted () {
    this.Render.stop(this.render)
    this.myMatter.pause = true
    this.scrollTr.kill()
    this.scrollTrPlay.kill()
  }
}
</script>

<style scoped lang="scss"></style>
