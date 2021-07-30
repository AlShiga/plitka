<template>
  <div class="button">
    <div v-on:mouseover.stop="myMouseover" v-on:mouseout="myMouseout" v-on:mousemove="myMousemove" class="button__btn">
      <span class="h9 ttu">{{text}}</span>
    </div>
    <div class="button__bg"></div>
  </div>
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
    gsapTick: function (e) {
      gsap.to(e.target, { x: this.move.x })
    },
    myMouseover: function (e) {
      // gsap.ticker.add(this.gsapTick(e))
    },
    myMouseout: function (e) {
      // gsap.ticker.remove(this.gsapTick(e))
      gsap.to(e.target, { x: 0 })
    },
    myMousemove: function (e) {
      console.log(e)
      this.move.x = (e.clientX - e.offsetX) / 5
      gsap.to(e.target, { x: this.move.x })
    }

  },
  mounted () {
    // console.log(this)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .button{
    position: relative;
    display: inline-block;
    &__btn{
      display: inline-block;
      padding: 30px 70px;
      border: 1px solid #262626;
      border-radius: 100px;
      background-color: #f8f8f8;
      z-index: 1;
      position: relative;
      & *{
        pointer-events: none;
      }
    }
    &__bg{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
       border: 1px solid #262626;
      border-radius: 100px;
      background-color: #262626;
      pointer-events: none;
    }

  }
</style>
