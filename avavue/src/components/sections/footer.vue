<template>
  <myMarquee v-if="big && !small" :addClass="'z-2 lent_gray'"/>

  <div v-if="big && !small" class="bg_w p-t-250 p-b-80">
    <div class="row m-b-150">
      <div class="col-22 offset-1">
        <a href="tel:+78129062232" class="h4 red">+7&nbsp;812&nbsp;906&nbsp;—<br />22 — 32</a>
        <a href="mailto:info@ava-digital.ru" class="d-flex flex-wrap">
          <span class="h4 red mp0">info@</span>
          <span class="h4 red mp0"
            >ava-<br />
            digital.ru</span
          >
        </a>
      </div>
    </div>
    <secTitle :title="($store.state.langEn)?('[&nbsp;more about AVA&nbsp;];'):('[&nbsp;больше про AVA&nbsp;];')" :addClass='"m-b-100 m-t-100"' />
    <div class="row  m-b-40">
      <div class="col-22 offset-1">
        <div class="m-b-40">
          <div class="tagsW">
            <a href="https://www.behance.net/avadigital" target="_blank" class="tag">
              <span class="h9 ttu">Behance</span>
            </a>
            <a href="https://www.facebook.com/we.are.ava.digital/" target="_blank" class="tag">
              <span class="h9 ttu">Facebook</span>
            </a>
            <a href="https://www.instagram.com/we_are_ava_digital/" target="_blank" class="tag">
              <span class="h9 ttu">Instagram</span>
            </a>
            <a href="https://vk.com/avrora_digital" target="_blank" class="tag">
              <span class="h9 ttu">VK</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mBottomWrap">
    <div v-if="!small" class="mBottom p-t-250 p-b-100">
      <div class="d-flex justify-content-center">
        <router-link to="/form">
          <div class="mBottom__titleWrap">
            <h6 v-if="$store.state.langEn" class="mBottom__title h3 text-center">
              <span class="h3">Are you<br />
              still here?</span>
              <span class="h3">
                Let's <br />
                create!
              </span>
            </h6>
            <h6 v-else class="mBottom__title h3 text-center">
              <span class="h3">Ты всё <br />
              еще здесь?</span>
              <span class="h3">
                Давай<br />
                создавать!
              </span>
            </h6>
          </div>
        </router-link>
        <img class="mBottom__img" src="~@/assets/img/career/p1.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p2.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p3.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p4.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p5.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p6.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p7.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p8.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p9.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p1.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p2.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p3.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p4.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p5.jpg" alt="Some image" />
        <img class="mBottom__img" src="~@/assets/img/career/p6.jpg" alt="Some image" />
      </div>
    </div>
    <div class="row justify-content-center p-b-40">
      <div class="col-23 offset-0">
        <div class="footerLink">
          <div class="row align-items-center">
            <div class="col-xl-12 offset-xl-0 col-lg-9 offset-lg-0 d-none d-lg-block order-md-1 "><p class="p1 ttu mp0">[ we are ava-digital ];</p></div>
            <div class="col-xl-3 offset-xl-1  col-lg-5 offset-lg-1 col-md-7 offset-md-7 offset-0 col-20 order-md-2 order-1">
              <a href="tel:+78129062232" class="footerLink__tel showText  p1 ttu mp0"><span class="p1 ttu ">[&nbsp;+7 812 906 - 22 - 32&nbsp;];<span class="p1">[&nbsp;+7 812 906 - 22 - 32&nbsp;];</span> </span></a>

            </div>

            <div class="col-xl-3 offset-xl-1  col-lg-5 offset-lg-1 col-md-7 offset-md-1 offset-0 col-20 order-md-3 order-3">
              <a href="mailto:info@ava-digital.ru" class="p1 showText ttu mp0"><span class="p1 ttu ">[&nbsp;info@ava-digital.ru&nbsp;];<span class="p1">[&nbsp;info@ava-digital.ru&nbsp;];</span> </span></a>
              </div>
            <div class="col-xl-1 offset-xl-3  col-lg-1 offset-lg-2 col-md-1 offset-md-1 offset-1 col-3 order-md-4 order-2">
              <div @click.stop="$store.commit('toggleMenu')" class="footerLink__circleWrap">
                 <div class="footerLink__circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/content-->
</template>

<script>
import secTitle from '@/components/secTitle.vue'
import myMarquee from '@/components/myMarquee.vue'

import { gsap, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(TweenMax)
export default {
  data () {
    return {
      images: [],
      currentImage: 0,
      allImage: 0,
      zIndexVal: 1,
      scrollTrig1: false,
      int: '',
      mousePos: {
        old: {
          x: 0,
          y: 0
        },
        cash: {
          x: 0,
          y: 0
        },
        current: {
          x: 0,
          y: 0
        }
      }
    }
  },
  components: { secTitle, myMarquee },
  props: ['big', 'small'],
  methods: {
    init: function () {
      if (innerWidth < 1024) return
      this.wrap = document.querySelector('.mBottom')
      this.images = document.querySelectorAll('.mBottom__img')
      this.allImage = this.images.length
      // console.log(this.images)
      this.wrap.addEventListener('mousemove', this.getMousePos)
      this.int = setInterval(() => {
        this.mousePos.cash.x = this.mousePos.current.x
        this.mousePos.cash.y = this.mousePos.current.y
        // console.log(123)
      }, 200)
    },
    getMousePos: function (e) {
      this.mousePos.current.x = e.clientX - this.wrap.getBoundingClientRect().left
      this.mousePos.current.y = e.clientY - this.wrap.getBoundingClientRect().top
      if (this.mousePos.current.x - this.mousePos.old.x > 100 || this.mousePos.current.x - this.mousePos.old.x < -100 ||
      this.mousePos.current.y - this.mousePos.old.y > 100 || this.mousePos.current.y - this.mousePos.old.y < -100) {
        // console.log(e)
        this.mousePos.old.x = this.mousePos.current.x
        this.mousePos.old.y = this.mousePos.current.y
        this.showNextImage()
      }
    },
    showNextImage: function () {
      // console.log(this.mousePos.cash.x, this.mousePos.current.x)
      ++this.zIndexVal
      const z = this.zIndexVal % 10000
      const img = this.images[this.currentImage % (this.allImage - 1)]
      this.currentImage++
      gsap.killTweensOf(img)

      gsap.timeline()
      // show the image
        .set(img, {
          // startAt: { opacity: 0, scale: 1 },
          opacity: 0,
          scale: 0.5,
          zIndex: z,
          x: this.mousePos.cash.x - img.offsetWidth / 2,
          y: this.mousePos.cash.y - img.offsetHeight / 2
        }, 0)

      // animate position
        .to(img, 0.2, {
          ease: 'Expo.easeOut',
          opacity: 1,
          scale: 1,
          x: this.mousePos.cash.x - img.offsetWidth / 2,
          y: this.mousePos.cash.y - img.offsetHeight / 2
        }, 0)
        .to(img, 1, {
          ease: 'Expo.easeOut',
          x: this.mousePos.current.x - img.offsetWidth / 2,
          y: this.mousePos.current.y - img.offsetHeight / 2
        }, 0)
      // then make it disappear
        .to(img, 1, {
          ease: 'Power1.easeOut',
          opacity: 0
        }, 0.9)
      // scale down the image
        .to(img, 1, {
          ease: 'Quint.easeOut',
          scale: 0.5
        }, 0.4)
    }

  },
  mounted () {
    // console.log('init')
    this.scrollTrig1 = ScrollTrigger.create({
      trigger: '.mBottomWrap',
      start: 'top bottom',
      end: 'center bottom',
      scrub: 2,
      once: true,
      // markers: true,
      animation: gsap.fromTo(
        '.mBottom__titleWrap',
        { yPercent: -150 },
        { yPercent: 0 }
      )
    })
    setTimeout(() => {
      if (this.scrollTrig1) {
        this.scrollTrig1.refresh()
      }
    }, 2000)
    if (this.$props.small) return
    this.init()
  },
  unmounted () {
    // console.log('end')
    ScrollTrigger.getAll().forEach(t => t.kill())
    if (innerWidth < 1024 || this.$props.small) return

    this.wrap.removeEventListener('mousemove', this.getMousePos)
    clearInterval(this.int)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mBottom {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;
  @media (max-width: 767px) {
     height: calc(100vh - 100px)
  }
  &__title {
    position: relative;
    // color: transparent;
    z-index: 10000;
    // pointer-events: none;
    filter: grayscale(1);
    position: relative;
    // mix-blend-mode: difference;
    & span{
      display: block;
    }
    & span:last-of-type{
      position: absolute;
      top: 0;
      right: 50%;
      opacity: 0;
      transform: translateX(50%);
    }
    &:hover{
      & span{
        opacity: 0;
      }
      & span:last-of-type{
        opacity: 1;
      }
    }
  }
  &__img {
    width: 15vw;
    max-width: 500px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    will-change: transform;
    pointer-events: none;
  }
  &__img--full {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
.mBottom__title{
  @media (max-width: 767px) {
   transform: translateY(10%);
  }
}
.footerLink{
  padding: 20px 40px 10px 40px;
  @media (max-width: 767px) {
    padding: 20px 20px 10px 20px;
  }
  border-top: 1px solid currentColor;
  border-right: 1px solid currentColor;
  border-left: 1px solid currentColor;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  &__circle{
    margin-left: auto;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: currentColor;
    transition: 0.3s;
    &:hover{
      background-color: #E10F1C;
    }
  }
  &__tel{
    @media (max-width: 767px) {
      margin-bottom: 10px !important;
      display: inline-block;
    }
  }
  a{
    white-space: nowrap;
  }
}

</style>
