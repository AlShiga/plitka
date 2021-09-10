<template>
  <div class="overflow-hidden">
    <div class="changeBg">
      <mFirst />

      <div class="p-t-200 p-b-250">
        <myMarquee :addClass="'z-1 lent_rotate lent_gray'" />
        <myMarquee :addClass="'z-2'" />
      </div>
      <div class=" p-t-200 p-b-100 row changeBgTrig">
        <div v-on:mouseover.stop="myMouseover" v-on:mouseout="myMouseout" v-on:mousemove="myMousemove"
          class="
            col-xl-12
            offset-xl-1
            col-lg-13
            offset-lg-1
            col-md-14
            offset-md-1
            col-22
            offset-1
            textAboutAs
          "
        >
          <p v-show="$store.state.langEn" class="h7 ttu">
            AVA is a digital full-cycle <span class="h7 underline"
              >agency.
              <svg
                width="193"
                height="18"
                viewBox="0 0 193 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.00006 15.0006C34.8746 7.1392 117.02 -4.873 190.606 9.96914"
                  stroke="#E10F1C"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </span> We make crushing sites that everyone likes. We are obsessed with design, technology and dream of making the Internet beautiful.
          </p>
          <p v-show="!$store.state.langEn" class="h7 ttu">
            AVA - digital <span class="h7 underline"
              > агентство <svg
                width="193"
                height="18"
                viewBox="0 0 193 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.00006 15.0006C34.8746 7.1392 117.02 -4.873 190.606 9.96914"
                  stroke="#E10F1C"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </span> полного цикла. Делаем сокрушительные сайты,
            которые всем нравятся. Мы помешаны на дизайне, технологиях и мечтаем
            сделать интернет красивым.

          </p>
          <!-- <img class="mAdvItem__img" :src="require('@/assets/img/gif/clench.gif')"> -->
          <video class="mAdvItem__img" autoplay muted loop :src="require('@/assets/img/gif/clench.mp4')"></video>
          <!-- <img class="mAdvItem__img" :src="require('@/assets/img/gif/clench.gif')"> -->
        </div>
      </div>
      <div class="p-t-100 p-b-250">
        <secTitle :title="($store.state.langEn)?('[ Super puper cool team ];'):('[ мы крутая команда ];')" :addClass="'m-b-150'" />
        <div class="row m-b-40">
          <div class="col-22 offset-1">
            <h2 class="h3 m-b-80">&lt;Hello world/&gt;</h2>
            <div class="print">
              <picture>
                  <source srcset="~@/assets/img/printMd.png" media="(max-width: 1024px)">
                  <source srcset="~@/assets/img/printSm.png" media="(max-width: 768px)">
                  <img class="w-100 m-b-15"  width="1222" height="600" srcset="~@/assets/img/print.png">
              </picture>
              <p class="p1 ttu">{{($store.state.langEn)?('Something about AVA'):('Что-то про AVA')}}</p>
            </div>
          </div>
        </div>
        <div class="row m-b-150">
          <div class="offset-1 col-lg-12 col-md-15 col-22">
            <p class="h8">
              <span class="p1 red">[ {{($store.state.langEn)?('Our team'):('О нас')}} ];</span
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {{($store.state.langEn)?
              ("We're doing web design. We create sites for business from different areas and develop mobile applications, printing design and branding. We are the coolest team."):
              ('Мы занимаемся веб-дизайном. Создаем сайты для бизнеса из разных сфер. Разрабатываем мобильные приложения, полиграфический дизайн и брендинг. Мы самая крутая команда.')}}
            </p>
          </div>
        </div>
        <div class="row position-relative">
          <div class="yes h2 red">{{($store.state.langEn)?('YEP'):('ДА')}}</div>
          <div class="col-lg-5 offset-lg-1 d-none d-lg-block">
            <div
              @mouseenter="hideButton"
              @mouseleave="showButton"
              ref="hideButtonWrap"
              class="hideButtonWrap"
            >
              <myButton
                class="hideButton"
                ref="hideButton"
                :text="$store.state.langEn ? '[ disagree ]' : '[ нет ]'"
              />
            </div>
          </div>
          <div
            class="
              col-xl-6
              col-lg-5
              offset-lg-6
              col-md-7
              offset-md-7 offset-1
              col-22
              offset-1
              m-b-40
              btnTellMore
            "
          >
            <myButton
              @click="$router.push('/about')"
              :text="
                $store.state.langEn ? '[ tell&nbsp;more ]' : '[ подробнее ]'
              "
            />
          </div>
          <div
            class="
              col-lg-4
              offset-lg-1
              col-md-6
              offset-md-1 offset-1
              col-22
              offset-1
            "
          >
            <myButton
              @click="showYes"
              :text="$store.state.langEn ? '[ really? ]' : '[ серьёзно? ]'"
            />
          </div>
        </div>
      </div>
    </div>
    <mTagsFly />
    <myMarquee :addClass="'z-2 lent__red'" />
    <div class="position-relative p-t-100 p-b-80">
      <secTitle :title="($store.state.langEn)?('[ Our projects ];'):('[  Наши проекты ];')" :addClass="'m-b-100'" />
      <mPrList />
    </div>
    <mAdv />
    <myFooter big="true" />
  </div>
</template>

<script>
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import mTagsFly from '@/components/sections/mTagsFly.vue'
import mAdv from '@/components/sections/mAdv.vue'
import mFirst from '@/components/sections/mFirst.vue'
import myFooter from '@/components/sections/footer.vue'
import myMarquee from '@/components/myMarquee.vue'
import myButton from '@/components/myButton.vue'
import secTitle from '@/components/secTitle.vue'
import mPrList from '@/components/sections/mPrList.vue'
gsap.registerPlugin(ScrollTrigger)

export default {
  data () {
    return {
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
  components: {
    mTagsFly,
    mFirst,
    mAdv,
    myFooter,
    myMarquee,
    myButton,
    secTitle,
    mPrList
  },
  methods: {
    showYes: function () {
      document.querySelector('.yes').classList.add('show')
      setTimeout(() => {
        document.querySelector('.yes').classList.remove('show')
      }, 100)
    },
    hideButton: function (e) {
      // console.log(this.$refs.hideButton)
      const btn = document.querySelector('.hideButton')
      btn.style.opacity = '0'
      btn.style.transition = '0.2s'
      btn.style.transform = 'translateX(-500px)'
    },
    showButton: function (e) {
      // console.log(e)
      const btn = document.querySelector('.hideButton')
      document.querySelector('.hideButton').style.opacity = '1'
      btn.style.transition = '1.3s ease-out'
      btn.style.transform = 'translateX(0)'
    },
    scrollAnimation () {
      this.scrollTrig = ScrollTrigger.create({
        trigger: '.changeBgTrig',
        start: 'center center',
        end: 'bottom top',

        // markers: true,
        onToggle: self => {
          // console.log(self.direction)
          if (self.isActive && self.direction > 0) {
            document.querySelector('.changeBg').classList.add('bg_ww')
          } else if (self.direction < 0) {
            document.querySelector('.changeBg').classList.remove('bg_ww')
          }
        },
        onUpdate: self => {
          // console.log('progress:', self.progress.toFixed(3), 'direction:', self.direction, 'velocity', self.getVelocity())
        }
      })
      this.scrollTrig1 = ScrollTrigger.create({
        trigger: '.underline',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        // markers: true,
        animation: gsap.fromTo(
          '.underline svg',
          { strokeDashoffset: '200px' },
          { strokeDashoffset: '0px' }
        )
      })
    },
    getPosts: function (e) {
      if (!this.$store.state.prMPost.lenght) {
        fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=3&per_page=5')
          .then((r) => r.json())
        // eslint-disable-next-line no-return-assign
          .then((res) => {
            this.projects = res.map(x => x)
            this.$store.commit('addPrMPost', this.projects)
          })
      }
      if (!this.$store.state.blogPost.lenght) {
        fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=2&per_page=20')
          .then((r) => r.json())
        // eslint-disable-next-line no-return-assign
          .then((res) => {
            this.blogs = res.map(x => x)
            this.$store.commit('addBlogPost', this.blogs)
          })
      }
      if (!this.$store.state.prPost.lenght) {
        fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=4&per_page=20')
          .then((r) => r.json())
        // eslint-disable-next-line no-return-assign
          .then((res) => {
            this.projects = res.map(x => x)
            this.$store.commit('addPrPost', this.projects)
          })
      }
    },
    myMouseover: function (e) {
      if (innerWidth < 1023) return
      this.transform.x = e.clientX - e.target.getBoundingClientRect().left
      this.transform.y = e.clientY - e.target.getBoundingClientRect().top
      this.imgTarget = e.target.querySelector('video')
      gsap.to(this.imgTarget, { x: this.transform.x, y: this.transform.y, scale: 1, duration: 0 })
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
  },
  mounted () {
    this.scrollAnimation()
    this.$store.commit('hideMenu')
    setTimeout(() => {
      this.getPosts()
    }, 1000)
  },
  unmounted () {
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}

</script>

<style lang="scss" scoped>
.yes {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -200%);
  transition: 1.5s;
  opacity: 0;
  pointer-events: none;
  &.show {
    transition: 0.1s;
    opacity: 1;
  }
}
.hideButtonWrap {
  display: inline-block;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 300%;
    top: -100%;
    left: -50%;
    // background-color: rgba($color: red, $alpha: 0.2);
  }
}
.changeBg {
  transition: 1s ease-in-out;
}
.underline {
  position: relative;
  svg {
    position: absolute;
    bottom: -0.1em;
    width: 100%;
    height: auto;
    left: 0;
    stroke-dasharray: 200px;
  }
}

.textAboutAs{
  position: relative;
  // pointer-events: none;
  & *{
    position: relative;
    pointer-events: none;
    z-index: 2;
  }
  img , video{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 300px;
    height: auto;
    opacity: 0;
  }
}
.btnTellMore{
  text-align: right;
  @media (max-width: 767.98px) {
    text-align: left;
  }
}
</style>
