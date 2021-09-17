<template>
  <div class="mAdvItem" v-on:mouseover.stop="myMouseover" v-on:mouseout="myMouseout" v-on:mousemove="myMousemove">
    <span class="h7 ttu">{{ name }}</span>
    <!-- <img class="mAdvItem__img" v-if = img :src = img alt=""> -->
    <video class="mAdvItem__img" autoplay muted loop :src = img></video>
  </div>
</template>

<script>
import { gsap } from 'gsap/all'

export default {
  props: ['name', 'img'],
  data () {
    return {
      // name: 'HelloWorld',
      imgTarget: '',
      transform: {
        x: 0,
        y: 0,
        curX: 0,
        curY: 0,
        scale: 1,
        opacity: 1
      }
    }
  },
  methods: {
    myMouseover: function (e) {
      if (innerWidth < 1023) return
      this.transform.x = e.clientX - e.target.getBoundingClientRect().left
      this.transform.y = e.clientY - e.target.getBoundingClientRect().top
      this.imgTarget = e.target.querySelector('video')
      gsap.to(this.imgTarget, { x: this.transform.x, y: this.transform.y, scale: 1, opacity: 1, duration: 0 })
      gsap.ticker.add(this.updatePos)
    },
    myMousemove: function (e) {
      if (innerWidth < 1023) return
      this.transform.curX = e.clientX - e.target.getBoundingClientRect().left
      this.transform.curY = e.clientY - e.target.getBoundingClientRect().top
      // console.log([this.transform.x, this.transform.y])
    },
    myMouseout: function (e) {
      if (innerWidth < 1023) return
      gsap.to(this.imgTarget, { x: this.transform.x, y: this.transform.y, scale: 0, opacity: 0, duration: 0.5 })
      gsap.ticker.remove(this.updatePos)
    },
    updatePos: function (e) {
      if (innerWidth < 1023) return
      this.transform.x = (this.transform.x * 9 + this.transform.curX) / 10
      this.transform.y = (this.transform.y * 9 + this.transform.curY) / 10
      gsap.to(this.imgTarget, { x: this.transform.x, y: this.transform.y, scale: 1, opacity: this.transform.opacity, duration: 0.3 })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mAdvItem{
  position: relative;
  & *{
    pointer-events:none;
  }
  &__img{
   position: absolute;
   top: 0;
   left: 0;
   transform: scale(0);
   opacity: 0;
   pointer-events: none;
   width: 200px;
   height: 150px;
   object-fit: cover;
   transition: opacity 0.3s;
  }
}
</style>
