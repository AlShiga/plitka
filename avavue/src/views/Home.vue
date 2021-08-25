<template>
  <div class="overflow-hidden">
    <div class="changeBg">
      <mFirst />

      <div class="p-t-200 p-b-250">
        <myMarquee :addClass="'z-1 lent_rotate lent_gray'" />
        <myMarquee :addClass="'z-2'" />
      </div>
      <div class="row changeBgTrig">
        <div
          class="
            col-xl-12
            offset-xl-1
            col-lg-13
            offset-lg-1
            col-md-14
            offset-md-1
            col-22
            offset-1
          "
        >
          <p v-show="$store.state.langEn" class="h7 ttu">
            we’re a branding/digital design
            <span class="h7 underline"
              >studio
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
            </span>
            connecting brands to people through craft and culture. A collective
            of three like-minded creatives and one
            <span class="h7 cirk"
              >powerhouse
              <svg
                width="343"
                height="73"
                viewBox="0 0 343 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M341.495 31.7285C341.856 53.4176 267.335 71 175.046 71C82.7579 71 9.60777 55.3875 1.89483 37.2383C-4.41828 22.3831 79.6885 2 171.977 2C218.265 2 313.593 15.5789 294.55 36.2024"
                  stroke="#E10F1C"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            project
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
            сделать интернет
            <span class="h7 cirk"
              >красивым.<svg
                width="343"
                height="73"
                viewBox="0 0 343 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M341.495 31.7285C341.856 53.4176 267.335 71 175.046 71C82.7579 71 9.60777 55.3875 1.89483 37.2383C-4.41828 22.3831 79.6885 2 171.977 2C218.265 2 313.593 15.5789 294.55 36.2024"
                  stroke="#E10F1C"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
      <div class="p-t-100 p-b-200">
        <secTitle :title="'[ Super puper cool team ];'" :addClass="'m-b-250'" />
        <div class="row m-b-40">
          <div class="col-22 offset-1">
            <h2 class="h3 m-b-40">&lt;Hello world/&gt;</h2>
            <div class="print">
              <img
                width="1222"
                height="600"
                src="~@/assets/img/print.png"
                alt=""
                class="w-100 m-b-15"
              />
              <p class="p1 ttu">wow. we feel like this</p>
            </div>
          </div>
        </div>
        <div class="row m-b-150">
          <div class="offset-1 col-lg-12 col-md-15 col-22">
            <p class="h8">
              <span class="p1 red">[ Our team ];</span
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AVA is a small team.
              There are five of us. Each of us is responsible for his/her part
              of the work. We are engaged in web design and site development of
              different difficulty.
            </p>
          </div>
        </div>
        <div class="row position-relative">
          <div class="yes h2 red">YES</div>
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
                :text="$store.state.langEn ? '[ no ]' : '[ нет ]'"
              />
            </div>
          </div>
          <div
            class="
              col-lg-5
              offset-lg-6
              col-md-7
              offset-md-7 offset-1
              col-22
              offset-1
              m-b-40
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
              :text="$store.state.langEn ? '[ really? ]' : '[ серьезно ]'"
            />
          </div>
        </div>
      </div>
    </div>
    <mTagsFly />
    <myMarquee :addClass="'z-2 lent__red'" />
    <div class="position-relative p-t-100 p-b-200">
      <secTitle :title="'[ Super puper cool team ];'" :addClass="'m-b-100'" />
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
      console.log(this.$refs.hideButton)
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
          console.log(self.direction)
          if (self.isActive && self.direction > 0) {
            document.querySelector('.changeBg').classList.add('bg_w')
          } else if (self.direction < 0) {
            document.querySelector('.changeBg').classList.remove('bg_w')
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
        markers: true,
        animation: gsap.fromTo(
          '.underline svg',
          { strokeDashoffset: '200px' },
          { strokeDashoffset: '0px' }
        )
      })
      this.scrollTrig2 = ScrollTrigger.create({
        trigger: '.cirk',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        markers: true,
        animation: gsap.fromTo(
          '.cirk svg',
          { strokeDashoffset: '700px' },
          { strokeDashoffset: '0px' }
        )
      })
    },
    getPosts: function (e) {
      if (!this.$store.state.blogPost.lenght) {
        fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=2&per_page=12')
          .then((r) => r.json())
        // eslint-disable-next-line no-return-assign
          .then((res) => {
            this.blogs = res.map(x => x)
            this.$store.commit('addBlogPost', this.blogs)
          })
      }
      if (!this.$store.state.prMPost.lenght) {
        fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=3&per_page=5')
          .then((r) => r.json())
        // eslint-disable-next-line no-return-assign
          .then((res) => {
            this.projects = res.map(x => x)
            this.$store.commit('addPrMPost', this.projects)
          })
      }
      if (!this.$store.state.prPost.lenght) {
        fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=4')
          .then((r) => r.json())
        // eslint-disable-next-line no-return-assign
          .then((res) => {
            this.projects = res.map(x => x)
            this.$store.commit('addPrPost', this.projects)
          })
      }
    }
  },
  mounted () {
    this.scrollAnimation()
    this.$store.commit('hideMenu')
  },
  unmounted () {
    this.scrollTrig.kill()
    this.scrollTrig1.kill()
    this.scrollTrig2.kill()
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
    width: 300%;
    height: 400%;
    top: -150%;
    left: -100%;
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
.cirk {
  position: relative;
  svg {
    position: absolute;
    top: -0.1em;
    width: 100%;
    height: auto;
    left: -0%;
    stroke-dasharray: 700px;
  }
}
</style>
