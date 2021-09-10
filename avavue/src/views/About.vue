<template>
   <div class="overflow-hidden">
    <!-- <myHeader/> -->
    <aFirst />

    <myMarquee :addClass="'z-1 lent_gray'" />
    <div class="bg_ww p-t-100 p-b-200">
       <secTitle :title='($store.state.langEn)?"[ Super puper cool team ];":"[ мы крутая команда ];"' :addClass='"m-b-150"' />
      <div class="row m-b-40">
        <div class="col-22 offset-1">
          <h2 class="h3 m-b-80">&lt;Hello world/&gt;</h2>
          <div class="print">
            <picture>
             <source srcset="~@/assets/img/about/teamLG.jpg" media="(min-width: 1200px)">
             <source srcset="~@/assets/img/about/teamMD.jpg" media="(min-width: 700px)">
             <img width="1222" height="600" src="~@/assets/img/about/team.jpg" alt="" class="w-100 m-b-15">
            </picture>
            <!-- <img width="1222" height="600" src="~@/assets/img/print.png" alt="" class="w-100 m-b-15"> -->
            <p class="p1 ttu">{{($store.state.langEn)?"look how we can ":"посмотри, как мы умеем"}}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-1 col-lg-12 col-md-15 col-22 m-b-80" >
          <p v-if="$store.state.langEn" class="h8">
            <span class="p1 red">[ Our team ];</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are five of us. No spy will be able to join our ranks of responsible and hardworking employees to cool off while waiting for a salary. Your project is in good hands.
          </p>
          <p v-else class="h8">
            <span class="p1 red">[ Наша команда ];</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Нас пятеро. Ни один шпион не сможет затесаться в наши ряды ответственных и трудолюбивых сотрудников, чтобы прохлаждаться в ожидании зарплаты. Ваш проект в надежных руках.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-22 offset-1">
          <div class="pAbout__btnWrap position-relative">
            <div class="yes h2 red">{{($store.state.langEn)?('YEP'):('ДА')}}</div>
              <div class="m-b-40">
                <myButton
                  @click="showYes"
                  :text="$store.state.langEn ? '[ really? ]' : '[ серьезно? ]'"
                />
              </div>
              <div class="m-b-40">
                <myButton
                  @click="$router.push('/form')"
                  :text="
                    $store.state.langEn ? '[&nbsp;order&nbsp;a&nbsp;project&nbsp;]' : '[ обсудить&nbsp;проект ]'
                  "
                />
              </div>
            </div>
          </div>
        </div>
    </div>
    <myMarquee :addClass="'z-1'" />
    <div class="bg_w overflow-hidden">
      <aNamePar />
      <aLines />
    </div>

    <div v-if="show" class="p-t-100 p-b-200">
      <secTitle :title='($store.state.langEn)?"[ have fun with us ];":"[ с нами весело ];"' :addClass='"m-b-100"' />
      <div class="row m-b-100">
        <div class="offset-1 col-xl-16 col-lg-12 col-md-15 col-22">
          <h4  v-if="$store.state.langEn"  class="h6">
           Skill, achievement and development
           inspire us to do quality work.
          Ava is the place
          of like-minded people.

          </h4>
          <h4 v-else  class="h6">
           Мастерство, достижения и развитие вдохновляют нас на качественную работу. AVA - место единомышленников.
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col-24 offset-0 col-lg-23">
          <div class="persWrap">
            <div v-for="employeeItem in this.employee" :key="employeeItem.name" class="persItem">
              <img :src="employeeItem.img" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">{{($store.state.langEn)?employeeItem.nameEN:employeeItem.name}}</p>
              <p class="p1 ttu p-t-5 gray">{{($store.state.langEn)?employeeItem.positionEN:employeeItem.position}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <aSlider v-if="show" :gal="this.gal" />
    <myFooter big="true"/>
  </div>
</template>
<script>
// @ is an alias to /src
import aFirst from '@/components/sections/aFirst.vue'
import aNamePar from '@/components/sections/aNamePar.vue'
import aLines from '@/components/sections/aLines.vue'
import myFooter from '@/components/sections/footer.vue'
import aSlider from '@/components/sections/aSlider.vue'
import secTitle from '@/components/secTitle.vue'
import myMarquee from '@/components/myMarquee.vue'
import myButton from '@/components/myButton.vue'
export default {
  name: 'About',
  components: {
    aFirst,
    aNamePar,
    aLines,
    myFooter,
    secTitle,
    aSlider,
    myMarquee,
    myButton
  },
  data () {
    return {
      vac: [],
      gal: [],
      show: false
    }
  },
  methods: {
    showYes: function () {
      document.querySelector('.yes').classList.add('show')
      setTimeout(() => {
        document.querySelector('.yes').classList.remove('show')
      }, 100)
    }
  },
  mounted () {
    fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/pages/89')
      .then((r) => r.json())
      // eslint-disable-next-line no-return-assign
      .then((res) => {
        this.employee = res.acf.employee
        this.gal = res.acf.gal
        this.show = true
        // console.log(this.vac)
        // console.log(this.employee)
        this.$store.commit('hideMenu')
      })
  }
}
</script>
<style lang="scss">
.pAbout__btnWrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  &>*+*{
    margin-left: 40px;

  }
  @media (max-width: 767.98px) {
    flex-direction: column;
      & *+*{
    margin-left: 0px;

  }
  }
}
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
.persWrap{
  display: flex;
  flex-wrap: wrap;
}
.persItem{
  margin-left: 100/24*1%;
  width: 100/24*5%;
  margin-bottom: 40px;
  &:nth-of-type(14n){
    margin-right: 100/24*0%;
  }
  &:nth-of-type(14n+1){
    margin-right: 100/24*0%;
  }
  &:nth-of-type(14n+2){
    margin-right: 100/24*10%;
  }
  &:nth-of-type(14n+3){
    margin-left: 100/24*7%;
    margin-right: 100/24*0%;
  }
  &:nth-of-type(14n+4){
    margin-right: 100/24*4%;
  }
  &:nth-of-type(14n+5){
    margin-right: 100/24*0%;
  }
  &:nth-of-type(14n+6){
    margin-left: 100/24*7%;
    margin-right: 100/24*0%;
  }
  &:nth-of-type(14n+7){

    margin-right: 100/24*0%;
  }
  &:nth-of-type(14n+8){
    margin-left: 100/24*7%;

    margin-right: 100/24*0%;
  }
  &:nth-of-type(14n+9){
    margin-right: 100/24*6%;
  }
  &:nth-of-type(14n+10){
    margin-right: 100/24*0%;
  }
  &:nth-of-type(14n+11){
    margin-right: 100/24*10%;
  }
  &:nth-of-type(14n+12){
    margin-left: 100/24*7%;

    // margin-right: 100/24*10%;
  }
    &:nth-of-type(14n+13){
    margin-right: 100/24*2%;
  }
    &:nth-of-type(14n+14){
    margin-left: 100/24*7%;

    margin-right: 100/24*10%;
  }
  @media (max-width: 1024.98px) {
    margin-left: 100/24*1% !important;
    margin-right: 100/24*0% !important;
    width: 100/24*9%;
  }
  @media (max-width: 767.98px) {
    margin-left: 100/24*1% !important;
    width: 100/24*22%;
  }
}
</style>
