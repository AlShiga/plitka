<template>
  <div class="bg_g">
    <div class="p-t-250 p-b-200 wrapFlyTags"></div>
  </div>
</template>

<script>
import Matter from 'matter-js'
// import 'poly-decomp'

export default {
  data () {
    return {
      name: 'mTagsFly',
      props: {
        // msg: String
      }
    }
  },
  // methods(){},
  mounted () {
    console.log('Прив1')
    var Engine = Matter.Engine
    var Render = Matter.Render
    var Events = Matter.Events
    var MouseConstraint = Matter.MouseConstraint
    var Mouse = Matter.Mouse
    var World = Matter.World
    var Bodies = Matter.Bodies

    // create an engine
    var engine = Engine.create()
    var world = engine.world

    // create a renderer
    var render = Render.create({
      element: document.querySelector('.wrapFlyTags'),
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: 2,
        background: '#C4C4C4',
        wireframes: false
      }
    })

    // create bounds
    var ground = Bodies.rectangle(
      window.innerWidth / 2 + 160,
      window.innerHeight + 80,
      window.innerWidth + 320,
      160,
      { render: { fillStyle: '#080808' }, isStatic: true }
    )
    var wallLeft = Bodies.rectangle(
      -80,
      window.innerHeight / 2,
      160,
      window.innerHeight,
      { isStatic: true }
    )
    var wallRight = Bodies.rectangle(
      window.innerWidth + 80,
      window.innerHeight / 2,
      160,
      1200,
      { isStatic: true }
    )
    var roof = Bodies.rectangle(
      window.innerWidth / 2 + 160,
      -80,
      window.innerWidth + 320,
      160,
      { isStatic: true }
    )

    // object colors & variables
    // var arts = '#EDDC8C'
    // var videos = '#B3E8F3'
    // var abouts = '#4D4D4D'

    // var border = 2
    var radius = 20

    // create objects
    //  require('@/assets/img/tags/ok.svg'),
    //       require('@/assets/img/tags/web.svg'),
    //       require('@/assets/img/tags/love.svg'),
    //       require('@/assets/img/tags/brand.svg')
    // art & design
    var illustration = Bodies.rectangle(70, 500, 133, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: require('@/assets/img/tags/ok.svg'),
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var art = Bodies.rectangle(35, 460, 56, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: require('@/assets/img/tags/web.svg'),
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var threeD = Bodies.rectangle(90, 460, 52, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: require('@/assets/img/tags/love.svg'),
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var graphic = Bodies.rectangle(60, 420, 105, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: require('@/assets/img/tags/brand.svg'),
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var photo = Bodies.rectangle(50, 380, 86, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/tc3MsJP.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    // video
    var documentary = Bodies.rectangle(220, 540, 165, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/QYNTBNr.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var animation = Bodies.rectangle(200, 490, 128, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/rSnEY9Q.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var vintage = Bodies.rectangle(190, 440, 104, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/5BSBvSm.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var short = Bodies.rectangle(170, 390, 82, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/VEyrikN.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    // misc
    var website = Bodies.rectangle(360, 420, 108, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/hr9p4uV.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var article = Bodies.rectangle(300, 380, 92, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/n6TV7XG.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var music = Bodies.rectangle(400, 360, 86, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/dax8MwT.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var star = Bodies.rectangle(80, 260, 42, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/C2qPMbB.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    // about
    var about = Bodies.rectangle(230, 140, 87, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/4gPcZVN.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })
    var instagram = Bodies.rectangle(320, 180, 40, 40, {
      id: 'instagramBody',
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/RStSwfG.png',
          xScale: 0.5,
          yScale: 0.5
        }
      },
      url: 'https://www.instagram.com/fuse.blog/'
    })
    var random = Bodies.rectangle(230, 180, 112, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/YS51eIC.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })

    // Original Shape
    // var illustration = Bodies.rectangle(70, 500, 133, 40, {render: { fillStyle: arts}, chamfer: {radius: 20}})

    // add all of the bodies to the world
    World.add(engine.world, [
      ground,
      wallLeft,
      wallRight,
      roof,
      illustration,
      art,
      threeD,
      graphic,
      photo,
      documentary,
      animation,
      vintage,
      short,
      website,
      article,
      music,
      star,
      about,
      instagram,
      random
    ])

    // add mouse control
    var mouse = Mouse.create(render.canvas)
    var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    })

    World.add(world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // Allow page scrolling in matter.js window
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel)
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)

    // Detect clicks vs. drags
    let click = false

    document.addEventListener('mousedown', () => (click = true))
    document.addEventListener('mousemove', () => (click = false))
    document.addEventListener('mouseup', () =>
      console.log(click ? 'click' : 'drag')
    )

    // Create a On-Mouseup Event-Handler
    Events.on(mouseConstraint, 'mouseup', function (event) {
      var mouseConstraint = event.source
      var bodies = engine.world.bodies
      if (!mouseConstraint.bodyB) {
        for (let i = 0; i < bodies.length; i++) {
          var body = bodies[i]
          // Check if clicked or dragged
          if (click === true) {
            if (
              Matter.Bounds.contains(
                body.bounds,
                mouseConstraint.mouse.position
              )
            ) {
              var bodyUrl = body.url
              console.log('Body.Url >> ' + bodyUrl)
              // Hyperlinking feature
              if (bodyUrl !== undefined) {
                // window.location.href = bodyUrl;
                window.open(bodyUrl, '_blank')
                console.log('Hyperlink was opened')
              }
              break
            }
          }
        }
      }
    })

    // run the engine
    Engine.run(engine)

    // run the renderer
    Render.run(render)

    // var select = function (root, selector) {
    //   return Array.prototype.slice.call(root.querySelectorAll(selector))
    // }

    // var Example = {}

    // Example.svg = function () {
    //   var Engine = Matter.Engine
    //   var Render = Matter.Render
    //   var Runner = Matter.Runner
    //   var Common = Matter.Common
    //   var MouseConstraint = Matter.MouseConstraint
    //   var Mouse = Matter.Mouse
    //   var Composite = Matter.Composite
    //   var Vertices = Matter.Vertices
    //   var Svg = Matter.Svg
    //   var Bodies = Matter.Bodies

    //   // provide concave decomposition support library
    //   Common.setDecomp(require('poly-decomp'))

    //   // create engine
    //   var engine = Engine.create()
    //   var world = engine.world

    //   // create renderer
    //   var render = Render.create({
    //     element: document.querySelector('.wrapFlyTags'),
    //     engine: engine,
    //     options: {
    //       width: innerWidth,
    //       height: innerHeight,
    //       wireframes: false,
    //       background: '#C4C4C4'
    //     }
    //   })

    //   Render.run(render)

    //   // create runner
    //   var runner = Runner.create()
    //   Runner.run(runner, engine)

    //   // add bodies
    //   if (typeof fetch !== 'undefined') {
    //     var select = function (root, selector) {
    //       return Array.prototype.slice.call(root.querySelectorAll(selector))
    //     }

    //     var loadSvg = function (url) {
    //       return fetch(url)
    //         .then(function (response) { return response.text() })
    //         .then(function (raw) { return (new window.DOMParser()).parseFromString(raw, 'image/svg+xml') })
    //     };

    //     ([
    //       require('@/assets/img/tags/ok.svg'),
    //       require('@/assets/img/tags/web.svg'),
    //       require('@/assets/img/tags/love.svg'),
    //       require('@/assets/img/tags/brand.svg')
    //     ]).forEach(function (path, i) {
    //       loadSvg(path).then(function (root) {
    //         var color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1'])

    //         var vertexSets = select(root, 'path')
    //           .map(function (path) { return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4) })

    //         Composite.add(world, Bodies.fromVertices(100 + i * 150, 200 + i * 50, vertexSets, {
    //           render: {
    //             fillStyle: color,
    //             strokeStyle: color,
    //             lineWidth: 1
    //           }
    //         }, true))
    //       })
    //     })
    //   } else {
    //     Common.warn('Fetch is not available. Could not load SVG.')
    //   }

    //   Composite.add(world, [
    //     Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    //     Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    //     Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    //     Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    //   ])

    //   // add mouse control
    //   var mouse = Mouse.create(render.canvas)
    //   var mouseConstraint = MouseConstraint.create(engine, {
    //     mouse: mouse,
    //     constraint: {
    //       stiffness: 0.2,
    //       render: {
    //         visible: false
    //       }
    //     }
    //   })

    //   Composite.add(world, mouseConstraint)

    //   // keep the mouse in sync with rendering
    //   render.mouse = mouse

    //   // fit the render viewport to the scene
    //   Render.lookAt(render, {
    //     min: { x: 0, y: 0 },
    //     max: { x: 800, y: 600 }
    //   })

    //   // context for MatterTools.Demo
    //   return {
    //     engine: engine,
    //     runner: runner,
    //     render: render,
    //     canvas: render.canvas,
    //     stop: function () {
    //       Matter.Render.stop(render)
    //       Matter.Runner.stop(runner)
    //     }
    //   }
    // }
    // Example.svg()

    // if (typeof module !== 'undefined') {
    //   module.exports = Example.svg
    // }

    // var Engine = Matter.Engine
    // var Render = Matter.Render
    // var Runner = Matter.Runner
    // var Common = Matter.Common
    // var MouseConstraint = Matter.MouseConstraint
    // var Mouse = Matter.Mouse
    // var Composite = Matter.Composite
    // var Vertices = Matter.Vertices
    // var Svg = Matter.Svg
    // var Bodies = Matter.Bodies
    // Common.setDecomp(require('poly-decomp'))

    // // create an engine
    // var engine = Engine.create()
    // var world = engine.world
    // // create a renderer
    // var render = Render.create({
    //   element: document.querySelector('.wrapFlyTags'),
    //   engine: engine,
    //   options: {
    //     width: innerWidth,
    //     height: innerHeight,
    //     wireframes: false,
    //     background: '#C4C4C4'
    //   }
    // })
    // var mouse = Mouse.create(render.canvas)
    // var mouseConstraint = MouseConstraint.create(engine, {
    //   mouse: mouse,
    //   constraint: {
    //     stiffness: 0.2,
    //     render: {
    //       visible: false
    //     }
    //   }
    // })
    // Composite.add(world, [
    //   Bodies.rectangle(innerHeight, 0, innerWidth, 2, { isStatic: true }),
    //   Bodies.rectangle(innerHeight, innerHeight, innerWidth, 2, { isStatic: true }),
    //   Bodies.rectangle(innerWidth, innerHeight / 2, 2, innerHeight, { isStatic: true }),
    //   Bodies.rectangle(0, innerHeight / 2, 2, innerHeight, { isStatic: true })
    // ])
    // Composite.add(world, mouseConstraint)
    // // create two boxes and a ground
    // var boxA = Bodies.rectangle(400, 200, 80, 80)
    // var boxB = Bodies.rectangle(450, 50, 80, 80)
    // // var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })

    // // add all of the bodies to the world
    // Composite.add(engine.world, [boxA, boxB])

    // var loadSvg = function (url) {
    //   return fetch(url)
    //     .then(function (response) { return response.text() })
    //     .then(function (raw) { return (new window.DOMParser()).parseFromString(raw, 'image/svg+xml') })
    // };

    // ([
    //   require('@/assets/img/tags/ok.svg'),
    //   require('@/assets/img/tags/web.svg'),
    //   require('@/assets/img/tags/love.svg'),
    //   require('@/assets/img/tags/brand.svg')
    // ]).forEach(function (path, i) {
    //   loadSvg(path).then(function (root) {
    //     console.log(path, root)
    //     var color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1'])

    //     var vertexSets = select(root, 'path')
    //       .map(function (path) { return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4) })

    //     Composite.add(world, Bodies.fromVertices(100 + i * 150, 200 + i * 50, vertexSets, {
    //       render: {
    //         fillStyle: color,
    //         strokeStyle: color,
    //         lineWidth: 1
    //       }
    //     }, true))
    //   })
    // })

    // Render.run(render)

    // // create runner
    // var runner = Runner.create()

    // // run the engine
    // Runner.run(runner, engine)
  },
  unmounted () {
    // console.log('Пока1')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
