<template>
 <div class="overflow-hidden">
    <carFirst/>
    <myMarquee :addClass="'z-1 lent_gray'" />

    <div class="overflow-hidden position-relative bg_w p-t-100 p-b-250">
      <secTitle :title="($store.state.langEn) ? ('[ wanted dead or alive ];') : ('[ ищем соратников ];')" :addClass='"m-b-150"' />
      <div class="row m-b-40">
        <div class="col-22 offset-1">
          <div class="m-b-40">
            <div class="tagsW">
                <div class="tag event-none">
                  <span class="h9 ttu">love</span>
                </div>
                <div class="tag event-none">
                  <span class="h9 ttu">modest</span>
                </div>
                <div class="tag event-none">
                  <span class="h9 ttu">the best</span>
                </div>
                <div class="tag event-none">
                  <span class="h9 ttu">cats</span>
                </div>
            </div>
          </div>
          <div class="print">
            <img src="~@/assets/img/career/mcp.jpg" alt="" class="w-100 m-b-15">
            <p v-if="$store.state.langEn" class="p1 ttu">what about work?</p>
            <p v-else class="p1 ttu">Пс, че там по работе?</p>
          </div>
        </div>
      </div>
      <div class="row m-b-0">
        <div class="offset-1 col-xl-13 col-lg-14 col-md-17 col-22" >
          <p v-if="$store.state.langEn" class="h7 ttu">
            If you want to become part of our friendly team of lovers of self-neglected labor and visiting corporate parties, rather write. Associates with an appropriate set of skills are welcome, others are not considered.
          </p>
          <p v-else class="h7 ttu">
            Если ты хочешь стать частью нашей дружной команды любителей самозабвенного труда и выездных корпоративов, скорее пиши. Соратники с соответствующим набором скилов приветствуются, иные не рассматриваются.
          </p>
        </div>
      </div>
    </div>
    <div   class="pCareer__avaTr bg_g p-t-100 p-b-150 position-relative">
      <svg  class="pCareer__ava2" width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M352.117 0V700M700 349.293H0M503.831 501.313L199.698 196.566M503.831 196.566L199.698 501.313" stroke="#333" stroke-width="2"/>
      </svg>

      <secTitle :title='($store.state.langEn)?"[&nbsp;Grand Master of the Order of Jedi I. Won this job in the lottery, don&rsquo;t you think?&nbsp;];":"[&nbsp;Великий Магистр Ордена Джедаев я. Выиграл эту работу в лотерее, так вы думаете?&nbsp;];"' :addClass='"m-b-100"' />

      <div class="row m-b-100">
        <div class="offset-1 col-xl-13 col-lg-14 col-md-17 col-22" >
          <p v-if="$store.state.langEn" class="h6 ">
            Remember, part of the crew - part of the ship.
          </p>
          <p v-else class="h6 ">
            Часть команды — часть корабля.
          </p>
        </div>
      </div>
      <div v-if="show" class="vacWrap">
        <div v-for="vac in this.vac"  :key="vac.posEN" class="cartItem m-b-100">
          <img :src="vac.img" alt="" class="w-100 m-b-10">
          <p v-if="$store.state.langEn" class="h7 ttu d-block m-b-40 text-break">{{vac.posEN}}</p>
          <p v-else class="h7 ttu d-block m-b-40 text-break">{{vac.pos}}</p>
        </div>
      </div>
    </div>
    <myMarquee :addClass="'z-1 lent_gray'" />
    <formPizza/>
    <carSlider v-if="show" :gal="this.gal" />
    <myFooter big="true"/>
  </div>
</template>

<script>
import formPizza from '@/components/sections/formPizza.vue'
import myFooter from '@/components/sections/footer.vue'
import carFirst from '@/components/sections/carFirst.vue'
import carSlider from '@/components/sections/carSlider.vue'
import secTitle from '@/components/secTitle.vue'
import myMarquee from '@/components/myMarquee.vue'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'Home',
  components: {
    formPizza,
    myFooter,
    carFirst,
    secTitle,
    carSlider,
    myMarquee
  },
  data () {
    return {
      vac: [],
      gal: [],
      show: false
    }
  },
  methods: {
    scrollAnimation () {
      this.scrollTrig1 = ScrollTrigger.create({
        trigger: '.pCareer__avaTr',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        // markers: true,
        animation: gsap.fromTo(
          '.pCareer__ava2',
          { yPercent: -80 },
          { yPercent: -20 }
        )
      })
    }
  },
  mounted () {
    fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/pages/91')
      .then((r) => r.json())
      // eslint-disable-next-line no-return-assign
      .then((res) => {
        this.vac = res.acf.find
        this.gal = res.acf.gal
        this.show = true
        this.$store.commit('hideMenu')
        this.scrollAnimation()
      })
  },
  unmounted () {
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}
</script>
<style lang="scss">
.vacWrap{
  display: flex;
  flex-wrap: wrap;

  & > * {
    width: 100/24*6%;
    flex: none;
    img{
      width: 100%;
      height: auto;
    }
    &:nth-of-type(4n - 3){
      margin-left: 100/24*3%;
      background-color: #E10F1C;
      color: #F8F8F8;
    }
    &:nth-of-type(4n - 2){
      margin-left: 100/24*1%;
    }
    &:nth-of-type(4n - 1){
      margin-left: 100/24*10%;
      background-color: gray;
      color: #F8F8F8;
    }
    &:nth-of-type(4n){
      margin-left: 100/24*1%;
    }
    @media (max-width: 1024.98px) {
      margin-left: 100/24*1% !important;
      width: 100/24*9%;
    }

    @media (max-width: 767.98px) {
      margin-left: 100/24*1% !important;
      width: 100/24*22%;
    }
  }
}
.pCareer__ava2{
  position: absolute;
  top: 0;
  right: 100/24*1vw;
  // mix-blend-mode: difference;
  mix-blend-mode: color-burn;
  width: 100/24*9vw;
  height: auto;
  @media (max-width: 1024.98px) {
    width: 100/24*12vw;
    right: -100/24*1vw;

  }

  @media (max-width: 767.98px) {
    width: 100/24*13vw;
    right: -100/24*3vw;

  }
}

</style>
