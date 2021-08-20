<template>
   <div class="overflow-hidden">
    <!-- <myHeader/> -->
    <aFirst />
    <div class="lent lent_gray">
      <div class="lent__img"></div>
    </div>
    <div class="bg_w p-t-100 p-b-200">
       <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-200"' />
      <div class="row m-b-40">
        <div class="col-22 offset-1">
          <h2 class="h3 m-b-40">Hello world</h2>
          <div class="print">
            <picture>
             <source srcset="~@/assets/img/about/teamLG.jpg" media="(min-width: 1200px)">
             <source srcset="~@/assets/img/about/teamMD.jpg" media="(min-width: 700px)">
             <img width="1222" height="600" src="~@/assets/img/about/team.jpg" alt="" class="w-100 m-b-15">
            </picture>
            <!-- <img width="1222" height="600" src="~@/assets/img/print.png" alt="" class="w-100 m-b-15"> -->
            <p class="p1 ttu">wow.  we feel like this</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-1 col-lg-12 col-md-15 col-22" >
          <p class="h8">
            <span class="p1 red">[ Our team ];</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AVA is a small team. There are five of us. Each of us is responsible for his/her part of the work. We are engaged in web design and site development of different difficulty.
          </p>
        </div>
      </div>
    </div>
    <div class="lent">
      <div class="lent__img"></div>
    </div>
    <aNamePar />
    <aLines />

    <div v-if="show" class="p-t-100 p-b-200">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />
      <div class="row m-b-100">
        <div class="offset-1 col-xl-16 col-lg-12 col-md-15 col-22">
          <h4 class="h6">
            craft, service and efficiency drive us forward and we see our agency as a place where our shared values meet.
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col-22 offset-1">
          <div class="persWrap">
            <div v-for="employeeItem in this.employee" :key="employeeItem.name" class="persItem">
              <img :src="employeeItem.img" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">{{employeeItem.name}}</p>
              <p class="p1 ttu mp0">{{employeeItem.position}}</p>
            </div>
          </div>
          <!-- <div class="persWrap">
            <div class="persItem">
              <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
            <div class="persItem">
              <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
            <div class="">
              <p class="p1">
                AVA is a small team. There are five of us. Each of us is responsible for his/her part of the work. We are
                <br>
                <br>
                AVA is a small team. There are five of us. Each of us is responsible for his/her part of the work. We are engaged in web design and site development of different difficulty.
              </p>
            </div>
            <div class=""></div>
            <div class=""></div>
            <div class="persItem">
              <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
            <div class="persItem">
              <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
            <div class=""></div>
            <div class="persItem">
              <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
          </div> -->
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

export default {
  name: 'About',
  components: {
    aFirst,
    aNamePar,
    aLines,
    myFooter,
    secTitle,
    aSlider
  },
  data () {
    return {
      vac: [],
      gal: [],
      show: false
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
        console.log(this.employee)
      })
  }
}
</script>
<style lang="scss">
.persWrap{
  display: flex;
  flex-wrap: wrap;
}
.persItem{
  margin-left: 100/24*1%;
  width: 100/24*5%;
  margin-bottom: 40px;
  &:nth-of-type(12n){
    margin-right: 100/24*0%;
  }
  &:nth-of-type(12n+1){
    margin-right: 100/24*0%;
  }
  &:nth-of-type(12n+2){
    margin-right: 100/24*10%;
  }
  &:nth-of-type(12n+3){
    margin-left: 100/24*7%;
    margin-right: 100/24*0%;
  }
  &:nth-of-type(12n+4){
    margin-right: 100/24*4%;
  }
  &:nth-of-type(12n+5){
    margin-right: 100/24*0%;
  }
  &:nth-of-type(12n+6){
    margin-left: 100/24*7%;
    margin-right: 100/24*0%;
  }
  &:nth-of-type(12n+7){

    margin-right: 100/24*0%;
  }
  &:nth-of-type(12n+8){
    margin-left: 100/24*7%;

    margin-right: 100/24*0%;
  }
  &:nth-of-type(12n+9){
    margin-right: 100/24*6%;
  }
  &:nth-of-type(12n+10){
    margin-right: 100/24*0%;
  }
  &:nth-of-type(12n+11){
    margin-right: 100/24*10%;
  }
  &:nth-of-type(12n+12){
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
