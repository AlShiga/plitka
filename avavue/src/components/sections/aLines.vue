<template>
    <div class="bg_w linesWrap">
      <lineBig :key="lineItem" v-for="lineItem in lineList" :name = lineItem.name ></lineBig>
      <div class="line m-t-40 m-b-40"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import lineBig from '@/components/lineBig.vue'

gsap.registerPlugin(ScrollTrigger)
export default {
  data () {
    return {
      scrollTrig: {},
      lineList: [
        { name: 'servItem_web', img: '' },
        { name: 'servItem_des', img: '' },
        { name: 'servItem_br', img: '' },
        { name: 'servItem_pr', img: '' },
        { name: 'servItem_cw', img: '' }

      ]
    }
  },
  components: {
    lineBig
  },
  props: {
    // msg: String
  },
  // methods(){},

  methods: {
    scrollAnimation () {
      const trans = innerWidth / 3
      this.lines.forEach((el, key) => {
        this.scrollTrig[key] = ScrollTrigger.create({
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
          // markers: true,
          // id: 'example' + key,
          animation: gsap.to(el, {
            // rotation: 27,
            x: -trans + trans / 3 * Math.random(),
            ease: 'cirk',
            duration: 0.5 + 0.3 * Math.random()
          })
          // onToggle: self => console.log('toggled, isActive:', self.isActive),
          // onUpdate: self => {
          //   // console.log('progress:', self.progress.toFixed(3), 'direction:', self.direction, 'velocity', self.getVelocity())
          // }
        })
      })
    }
  },
  mounted () {
    this.lines = document.querySelectorAll('.linesWrap .servItem')
    // this.trigger = new ScrollTrigger.default()

    this.scrollAnimation()
    // console.log(this.scrollTrig)
  },
  unmounted () {
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
