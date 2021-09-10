<template>
  <div class="aboutFirst p-t-200 p-b-100">
    <div class="">
      <div class="row">
        <div class="m-b-20 col-20 offset-1">
          <h2 class="h3">Grid, type</h2>
        </div>
        <div class="m-b-80 col-16 offset-lg-7 offset-md-7 offset-4">
          <h2 class="h3 d-flex">
            <span class="h3 red">&</span>&nbsp;rock’n’roll
          </h2>
        </div>
        <div
          class="
            m-b-40
            col-xl-7
            offset-xl-13
            col-lg-8
            offset-lg-13
            col-md-14
            offset-md-7
            col-22
            offset-1
          "
        >
          <p v-if="$store.state.langEn" class="p1">
            Ava has been working since 2018. Say it a couple of years ago, it would look like a flaw. But 2020 and 21st * passed, and our copywriter writes this text for the updated site. To admit, it was not an easy years. Young and ambitious, we constantly rushed in search of the vector of development of the company. Now the course is taken, and we are still full of creative potentials.

            <br />
            <br />
            We're doing web design. We create sites for business from different areas and develop mobile applications, printing design and branding.<br>
            * If you read this text and do not understand what it is about, congratulations, you are young or forgetful! And congratulations to us, because we survived and continue to work.

          </p>
          <p v-else class="p1">
            Ава работает с 2019 года. Скажи мы это пару лет назад, выглядело бы как недостаток. Но прошли 2020 и 21-й*, а наш копирайтер пишет этот текст для обновленного сайта. Признаться, непростые были годы. Молодые и амбициозные, мы постоянно метались в поисках вектора развития компании. Теперь курс взят, а мы все еще полны творческих потенций.
            <br />
            <br />
           Мы занимаемся веб-дизайном. Создаем сайты для бизнеса из разных сфер. Разрабатываем мобильные приложения, полиграфический дизайн и брендинг. <br>
          *Если вы читаете этот текст и не понимаете, о чем речь, поздравляем, вы молоды или забывчивы! И поздравляем нас, ведь выстояли и работаем.
          </p>
        </div>
      </div>
    </div>
    <div class="cirkle" style="transform: scale(0)"></div>
  </div>
</template>

<script>
import { gsap, TweenLite } from 'gsap/all'
const invertEl = {
  wrapEl1: '.aboutFirst',
  el1: '.cirkle',
  wrapEl: '',
  el: ' ',
  mouse: { x: 0, y: 0 },
  elPos: { x: 0, y: 0 },
  screen: { w: 0, h: 0 },
  ratio: 0.25,
  active: true,
  scale: 0,
  updatePos: function () {
    if (!this.active) return
    this.elPos.x += (this.mouse.x - this.elPos.x) * this.ratio
    this.elPos.y += (this.mouse.y - this.elPos.y) * this.ratio
    this.mouse.x < 150 ||
    this.mouse.y < 150 ||
    this.mouse.x > this.screen.w - 150 ||
    this.mouse.y > this.screen.h - 150
      ? ((this.scale >= 0.01) ? (this.scale = this.scale - 0.1) : this.scale = this.scale - 0)
      : ((this.scale <= 1) ? (this.scale = this.scale + 0.1) : this.scale = this.scale - 0)
    // this.scale = this.scale - 0.02
    TweenLite.set(this.el, {
      x: this.elPos.x,
      y: this.elPos.y,
      scale: this.scale
    })
    // console.log(1)
  },
  mouseMove: function (e) {
    invertEl.mouse.x = e.pageX
    invertEl.mouse.y = e.pageY
    // console.log(123)
  },
  init: function () {
    if (innerWidth < 1025) return
    this.wrapEl = document.querySelector(this.wrapEl1)
    this.el = this.wrapEl.querySelector(this.el1)
    this.screen.w = this.wrapEl.offsetWidth
    this.screen.h = this.wrapEl.offsetHeight
    TweenLite.set(this.el, { xPercent: -50, yPercent: -50 })
    this.wrapEl.addEventListener('mousemove', this.mouseMove)
    gsap.ticker.add(tickFrame)
    // gsap.ticker.fps(30)
  },
  stop: function () {
    if (innerWidth < 1025) return
    gsap.ticker.remove(tickFrame)
    this.wrapEl.removeEventListener('mousemove', this.mouseMove)
  }
}
function tickFrame () { invertEl.updatePos() }

export default {
  data () {
    return {
      name: 'aFirst',
      props: {
        // msg: String
      }
    }
  },
  mounted () {
    invertEl.init()
  },
  unmounted () {
    invertEl.stop()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aboutFirst {
  padding-top: 300px;
  position: relative;
  min-height: 100vh;
  //   width: 100%;
  //   height: 1000px;
  // background: rgb(0,32,36);
  // background: linear-gradient(259deg, dark 0%, gray 29%, dark 100%);
  //   overflow:hidden;
  @media (max-width: 767.98px) {
    padding-top: 300px;
  }
}
.cirkle {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background: white;
  overflow: hidden;
  border-radius: 50%;
  mix-blend-mode: difference;
  filter: grayscale(0%);
  // transition: 0.15s;
  will-change: transform;
}
</style>
