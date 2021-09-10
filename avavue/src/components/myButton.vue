<template>
  <div class="button" :class='myStyle'>
    <div v-on:mouseover.stop="myMouseover" v-on:mouseout="myMouseout" v-on:mousemove="myMousemove" class="button__btn">
      <span class="h9 ttu">{{text}}</span>
    </div>
    <div class="button__bg"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap/all'
// import func from 'vue-editor-bridge'

export default {
  props: ['text', 'myStyle'],
  data () {
    return {
      move: {
        x: 10
      }
    }
  },
  methods: {
    animButton: function (e) {
      gsap.to(this.el, { x: this.move.x, y: this.move.y, scale: 0.96, ease: 'power1' })
    },
    myMouseover: function (e) {
      gsap.ticker.add(this.animButton)
      this.el = e.target
    },
    myMouseout: function (e) {
      gsap.ticker.remove(this.animButton)
      gsap.to(e.target, { x: 0, y: 0, scale: 1, ease: 'Back.easeOut' })
    },
    myMousemove: function (e) {
      this.move.x = -(e.target.getBoundingClientRect().left + e.target.getBoundingClientRect().width / 2 - e.clientX) / 4
      this.move.y = -(e.target.getBoundingClientRect().top + e.target.getBoundingClientRect().height / 2 - e.clientY) / 2
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .button{
    position: relative;
    display: inline-block;
    background-color: transparent;
    border:none;
    border-color: transparent;
    color: transparent;
    &__btn{
      color: #262626;
      display: inline-block;
      padding: 30px 70px;
      border: 1px solid #262626;
      border-radius: 100px;
      background-color: #f8f8f8;
      z-index: 1;
      position: relative;
      cursor: pointer;
      user-select: none;
      white-space: nowrap;
      @media (max-width: 1459.98px) {
        padding: 20px 50px;
      }
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
      transform: translate(10px, 10px);
    }
  }
  .button_black{
    .button__btn{
      color: #f8f8f8;
      border: 1px solid #f8f8f8;
      background-color: #262626;
    }
    .button__bg{
      position: absolute;
      border: 1px solid #262626;
      background-color: #f8f8f8;
    }
  }
  .button_blackGr{
    .button__btn{
      color: #f8f8f8;
      border: 1px solid #C4C4C4;
      background-color: #262626;
    }
    .button__bg{
      position: absolute;
      border: 1px solid #262626;
      background-color: #C4C4C4;
    }
  }
</style>
