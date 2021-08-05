<template>
<div class="ball d-none d-lg-block" />
</template>

<script>
import { gsap } from 'gsap/all'

export default {
  props: ['text'],
  data () {
    return {
      move: {
        x: 10
      }
    }
  },
  methods: {

  },
  mounted () {
    if (innerWidth < 1023) return
    gsap.set('.ball', { xPercent: -50, yPercent: -50 })

    const ball = document.querySelector('.ball')
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const mouse = { x: pos.x, y: pos.y }
    const speed = 0.08

    const xSet = gsap.quickSetter(ball, 'x', 'px')
    const ySet = gsap.quickSetter(ball, 'y', 'px')
    const xWidth = gsap.quickSetter(ball, 'width', 'px')
    const rotate = gsap.quickSetter(ball, 'rotate', 'rad')
    window.addEventListener('mousemove', e => {
      mouse.x = e.x
      mouse.y = e.y
    })
    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())
      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      xWidth(50 + Math.abs(Math.sqrt((mouse.x - pos.x) * (mouse.x - pos.x) + (mouse.y - pos.y) * (mouse.y - pos.y)) / 6))
      const x = mouse.x - pos.x
      const y = mouse.y - pos.y
      rotate(3.14 / 2 + Math.atan(-x / y))
      xSet(pos.x)
      ySet(pos.y)
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ball{
  position:fixed;
  border:red 1px solid;
  width:50px;
  height:50px;
  border-radius:100px;
  pointer-events:none;
  z-index: 100;
}
</style>
