<template>
  <div class="bg_g p-t-100">
    <secTitle :title="($store.state.langEn)?('[ we make cool things ];'):('[ мы делаем крутые штуки ];')" :addClass='"m-b-100"' />
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
        // markers: true,
        // end: 'bottom top',
        scrub: 2,
        // id: '1',
        // onToggle: self => console.log('toggled, isActive:', self.isActive)
        onToggle: () => { if (innerWidth > 1024) { this.world.gravity.scale = 0.0015 } else { this.world.gravity.scale = 0.0008 } }
      })
      this.scrollTrPlay = ScrollTrigger.create({
        trigger: '.wrapFlyTags',
        start: 'top bottom',
        // markers: true,
        end: 'bottom top',
        // scrub: 2,
        // id: '2',
        onToggle: self => {
          // console.log('toggled, isActive:', self.isActive)
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
          height: window.innerHeight * 0.8,
          pixelRatio: 1,
          background: '#C4C4C4',
          wireframes: false
        }
      })
      this.size = {
        xl: {
          web: {
            x: 600 / 1920 * innerWidth,
            y: 200 / 1920 * innerWidth,
            w: 460 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          },
          love: {
            x: 900 / 1920 * innerWidth,
            y: 200 / 1920 * innerWidth,
            w: 240 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          },
          brand: {
            x: 1200 / 1920 * innerWidth,
            y: 200 / 1920 * innerWidth,
            w: 430 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          },
          sites: {
            x: 300 / 1920 * innerWidth,
            y: 300 / 1920 * innerWidth,
            w: 243 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          },
          animations: {
            x: 640 / 1920 * innerWidth,
            y: 300 / 1920 * innerWidth,
            w: 411 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          },
          copywriting: {
            x: 1080 / 1920 * innerWidth,
            y: 300 / 1920 * innerWidth,
            w: 448 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          },
          promotion: {
            x: 1520 / 1920 * innerWidth,
            y: 300 / 1920 * innerWidth,
            w: 422 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          },
          naming: {
            x: 520 / 1920 * innerWidth,
            y: 400 / 1920 * innerWidth,
            w: 313 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          },
          cats: {
            x: 820 / 1920 * innerWidth,
            y: 400 / 1920 * innerWidth,
            w: 233 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          },
          uxui: {
            x: 1180 / 1920 * innerWidth,
            y: 400 / 1920 * innerWidth,
            w: 457 / 1920 * innerWidth,
            h: 78 / 1920 * innerWidth,
            s: innerWidth / 1920
          }
        },
        md: {
          web: {
            x: 600 / 1920 * innerWidth,
            y: 240 / 1920 * innerWidth,
            w: 460 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          },
          love: {
            x: 960 / 1920 * innerWidth,
            y: 100 / 1920 * innerWidth,
            w: 240 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          },
          brand: {
            x: 1320 / 1920 * innerWidth,
            y: 240 / 1920 * innerWidth,
            w: 430 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          },
          sites: {
            x: 400 / 1920 * innerWidth,
            y: 380 / 1920 * innerWidth,
            w: 243 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          },
          animations: {
            x: 940 / 1920 * innerWidth,
            y: 380 / 1920 * innerWidth,
            w: 411 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          },
          naming: {
            x: 1520 / 1920 * innerWidth,
            y: 380 / 1920 * innerWidth,
            w: 313 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          },
          copywriting: {
            x: 680 / 1920 * innerWidth,
            y: 520 / 1920 * innerWidth,
            w: 448 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          },
          promotion: {
            x: 1380 / 1920 * innerWidth,
            y: 520 / 1920 * innerWidth,
            w: 422 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          },
          cats: {
            x: 620 / 1920 * innerWidth,
            y: 660 / 1920 * innerWidth,
            w: 233 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          },
          uxui: {
            x: 1180 / 1920 * innerWidth,
            y: 660 / 1920 * innerWidth,
            w: 457 / 1920 * innerWidth * 3 / 2,
            h: 78 / 1920 * innerWidth * 3 / 2,
            s: innerWidth / 1920 * 3 / 2
          }
        },
        sm: {
          web: {
            x: innerWidth / 12 + 460 / 1920 * innerWidth,
            y: 200 / 1920 * innerWidth,
            w: 460 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          },
          love: {
            x: innerWidth / 12 + 240 / 1920 * innerWidth,
            y: 400 / 1920 * innerWidth,
            w: 240 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          },
          brand: {
            x: innerWidth / 12 + 430 / 1920 * innerWidth,
            y: 600 / 1920 * innerWidth,
            w: 430 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          },
          sites: {
            x: innerWidth / 12 + 243 / 1920 * innerWidth,
            y: 800 / 1920 * innerWidth,
            w: 243 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          },
          animations: {
            x: innerWidth / 12 + 411 / 1920 * innerWidth,
            y: 1000 / 1920 * innerWidth,
            w: 411 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          },
          copywriting: {
            x: innerWidth / 12 + 448 / 1920 * innerWidth,
            y: 1200 / 1920 * innerWidth,
            w: 448 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          },
          promotion: {
            x: innerWidth / 12 + 422 / 1920 * innerWidth,
            y: 1400 / 1920 * innerWidth,
            w: 422 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          },
          naming: {
            x: innerWidth / 12 + 313 / 1920 * innerWidth,
            y: 1600 / 1920 * innerWidth,
            w: 313 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          },
          cats: {
            x: innerWidth / 12 + 233 / 1920 * innerWidth,
            y: 1800 / 1920 * innerWidth,
            w: 233 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          },
          uxui: {
            x: innerWidth / 12 + 457 / 1920 * innerWidth,
            y: 2000 / 1920 * innerWidth,
            w: 457 / 1920 * innerWidth * 2,
            h: 78 / 1920 * innerWidth * 2,
            s: innerWidth / 1920 * 2
          }
        }
      }

      this.curSize = (innerWidth > 700) ? ((innerWidth > 1100) ? this.size.xl : this.size.md) : this.size.sm

      this.elWorld = {
        ground: this.Bodies.rectangle(
          window.innerWidth * 1 / 2 + 160,
          window.innerHeight * 0.8 + 80,
          window.innerWidth + 320,
          160,
          { render: { fillStyle: '#080808' }, isStatic: true }
        ),
        wallLeft: this.Bodies.rectangle(
          -80 - 2,
          window.innerHeight * 1 / 2,
          160,
          window.innerHeight * 0.8,
          { isStatic: true }
        ),
        wallRight: this.Bodies.rectangle(
          window.innerWidth + 80 + 2,
          window.innerHeight * 0.8 / 2,
          160,
          1200,
          { isStatic: true }
        ),
        roof: this.Bodies.rectangle(
          window.innerWidth / 2 + 160,
          -80 - 1,
          window.innerWidth + 320,
          160 + 1,
          { isStatic: true }
        ),
        web: this.Bodies.rectangle(this.curSize.web.x, this.curSize.web.y, this.curSize.web.w, this.curSize.web.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/web.svg'),
              xScale: this.curSize.web.s,
              yScale: this.curSize.web.s
            }
          }
        }),
        love: this.Bodies.rectangle(this.curSize.love.x, this.curSize.love.y, this.curSize.love.w, this.curSize.love.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/love.svg'),
              xScale: this.curSize.love.s,
              yScale: this.curSize.love.s
            }
          }
        }),
        brand: this.Bodies.rectangle(this.curSize.brand.x, this.curSize.brand.y, this.curSize.brand.w, this.curSize.brand.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/brand.svg'),
              xScale: this.curSize.brand.s,
              yScale: this.curSize.brand.s
            }
          }
        }),
        sites: this.Bodies.rectangle(this.curSize.sites.x, this.curSize.sites.y, this.curSize.sites.w, this.curSize.sites.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/sites.svg'),
              xScale: this.curSize.sites.s,
              yScale: this.curSize.sites.s
            }
          }
        }),
        animations: this.Bodies.rectangle(this.curSize.animations.x, this.curSize.animations.y, this.curSize.animations.w, this.curSize.animations.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/animations.svg'),
              xScale: this.curSize.animations.s,
              yScale: this.curSize.animations.s
            }
          }
        }),
        copywriting: this.Bodies.rectangle(this.curSize.copywriting.x, this.curSize.copywriting.y, this.curSize.copywriting.w, this.curSize.copywriting.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/copywriting.svg'),
              xScale: this.curSize.copywriting.s,
              yScale: this.curSize.copywriting.s
            }
          }
        }),
        promotion: this.Bodies.rectangle(this.curSize.promotion.x, this.curSize.promotion.y, this.curSize.promotion.w, this.curSize.promotion.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/promotion.svg'),
              xScale: this.curSize.promotion.s,
              yScale: this.curSize.promotion.s
            }
          }
        }),
        naming: this.Bodies.rectangle(this.curSize.naming.x, this.curSize.naming.y, this.curSize.naming.w, this.curSize.naming.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/naming.svg'),
              xScale: this.curSize.naming.s,
              yScale: this.curSize.naming.s
            }
          }
        }),
        cats: this.Bodies.rectangle(this.curSize.cats.x, this.curSize.cats.y, this.curSize.cats.w, this.curSize.cats.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/cats.svg'),
              xScale: this.curSize.cats.s,
              yScale: this.curSize.cats.s
            }
          }
        }),
        uxui: this.Bodies.rectangle(this.curSize.uxui.x, this.curSize.uxui.y, this.curSize.uxui.w, this.curSize.uxui.h, {
          chamfer: { radius: this.radius },
          render: {
            sprite: {
              texture: require('@/assets/img/tags/uxui.svg'),
              xScale: this.curSize.uxui.s,
              yScale: this.curSize.uxui.s
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
      // let touchStart
      // this.mouseConstraint.mouse.element.addEventListener('touchstart', (event) => {
      //   if (!this.mouseConstraint.body) {
      //     // touchStart = event
      //   }
      // })

      this.mouseConstraint.mouse.element.addEventListener('touchend', (event) => {
        if (!this.mouseConstraint.body) {
          // const startY = touchStart.changedTouches[0].clientY
          // const endY = event.changedTouches[0].clientY
          // const delta = Math.abs(startY - endY)
          this.mouse.element.removeEventListener('touchmove', this.mouse.mousemove)
          this.mouse.element.removeEventListener('touchstart', this.mouse.mousedown)
          this.mouse.element.removeEventListener('touchend', this.mouse.mouseup)
          setTimeout(() => {
            this.mouse.element.addEventListener('touchmove', this.mouse.mousemove)
            this.mouse.element.addEventListener('touchstart', this.mouse.mousedown)
            this.mouse.element.addEventListener('touchend', this.mouse.mouseup)
          }, 500)
          // if (delta > 80) {
          //   // window.scrollTo(0, 600)
          //   // console.log('xxx')
          // }
        }
      })
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
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}
</script>

<style lang="scss">
  .wrapFlyTags{
    position: relative;
  }
  .wrapFlyTags canvas{
    position: absolute;
    top: 0;
    left: 0;
  }
  .wrapFlyTags canvas:first-of-type{
    position: relative
  }
 </style>
