<template>
    <div class="carFirst p-t-250 p-b-250">
      <div class=" carFirst__content row ">
        <div class="col-xl-20 offset-xl-3 col-lg-20 offset-lg-3 col-md-20 offset-md-3 col-20 offset-3">
          <h1 class="h3 m-b-40">We make realy</h1>
        </div>
        <div class="col-xl-22 offset-xl-1 col-lg-22 offset-lg-1 col-md-22 offset-md-1 col-22 offset-1">
          <h1 class="h3 m-b-40">good things </h1>
        </div>
        <div class="col-xl-18 offset-xl-5 col-lg-18 offset-lg-5 col-md-18 offset-md-5 col-20 offset-3">
          <h1 class="h3 m-b-40">Join our team</h1>
        </div>
      </div>
      <div class="photoWrap">
        <img src="~@/assets/img/career/p1.jpg" alt="">
        <img src="~@/assets/img/career/p2.jpg" alt="">
        <img src="~@/assets/img/career/p3.jpg" alt="">
        <img src="~@/assets/img/career/p4.jpg" alt="">
                <img src="~@/assets/img/career/p1.jpg" alt="">
        <img src="~@/assets/img/career/p2.jpg" alt="">
        <img src="~@/assets/img/career/p3.jpg" alt="">
        <img src="~@/assets/img/career/p4.jpg" alt="">
      </div>
    </div>
</template>

<script>
import { gsap } from 'gsap/all'
import { Draggable } from 'gsap/Draggable'
// import { InertiaPlugin } from 'gsap/InertiaPlugin'
gsap.registerPlugin(Draggable)
// gsap.registerPlugin(InertiaPlugin)
export default {
  data () {
    return {
    }
  },
  components: {
  },
  props: {
    // []
  },
  methods: {
    scrollAnimation () {}
  },
  mounted () {
    // Draggable.create('.photoWrap img')
    document.querySelectorAll('.photoWrap img').forEach((el) => {
      gsap.set(el, { left: 0, x: innerWidth * Math.random() - innerWidth / 6, y: innerHeight / 3 * 2 + innerHeight / 3 * 2 * Math.random() - innerWidth / 6, rotation: Math.random() * 25 - 12 })
    })
    Draggable.create('.photoWrap img', {
      bounds: document.querySelector('.photoWrap'),
      x: 300,
      y: 300,
      rotation: 30
    }
    )
  },
  unmounted () {
  }
}
</script>

<style scoped lang="scss">
  .carFirst{
    padding-top: 220px;
    position: relative;
    min-height: 150vh;
    &__content{
      position: relative;
      z-index: 10005;
      pointer-events: none;
    }
  }
  .photoWrap {
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    img{
      width: 20vw;
      min-width: 200px;
      height: auto;
      background-color: #f8f8f8;
      padding: 1vmax 1vmax 2vmax 1vmax;
      position: absolute;
      z-index: 1;
      top: 0;left: 0;
    }
  }
</style>
