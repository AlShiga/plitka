<template>
 <div class="overflow-hidden">
    <carFirst/>
    <div class="lent lent_gray">
      <div class="lent__img"></div>
    </div>

    <div class="bg_w p-t-100 p-b-200">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />
      <div class="row m-b-40">
        <div class="col-22 offset-1">
          <div class="m-b-40">
            <div class="tagsW">
                <div class="tag">
                  <span class="h9 ttu">love</span>
                </div>
                <div class="tag">
                  <span class="h9 ttu">modest</span>
                </div>
                <div class="tag">
                  <span class="h9 ttu">the best</span>
                </div>
                <div class="tag">
                  <span class="h9 ttu">cats</span>
                </div>
            </div>
          </div>
          <div class="print">
            <img src="~@/assets/img/print.png" alt="" class="w-100 m-b-15">
            <p class="p1 ttu">wow.  we feel like this</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-1 col-xl-13 col-lg-14 col-md-17 col-22" >
          <p class="h7 ttu">
            we’re a branding/digital design studio connecting brands to people through craft and culture.
            A collective of three like-minded creatives and one powerhouse project
          </p>
        </div>
      </div>

    </div>
    <div v-if="show" class="bg_g p-t-100 p-b-200">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />

      <div class="row m-b-100">
        <div class="offset-1 col-xl-13 col-lg-14 col-md-17 col-22" >
          <p class="h6 ttu">
            Remember. Part of the crew - part of the ship
          </p>
        </div>
      </div>
      <div class="vacWrap">
          <div v-for="vac in this.vac"  :key="vac.posEN" class="cartItem m-b-100">
            <img :src="vac.img" alt="" class="w-100 m-b-10">
            <p v-if="$store.state.langEn" class="h7 ttu mp0">{{vac.posEN}}</p>
            <p v-else class="h7 ttu mp0">{{vac.pos}}</p>
          </div>
      </div>
    </div>
    <div class="lent lent_gray ">
      <div class="lent__img"></div>
    </div>
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

export default {
  name: 'Home',
  components: {
    formPizza,
    myFooter,
    carFirst,
    secTitle,
    carSlider
  },
  data () {
    return {
      vac: [],
      gal: [],
      show: false
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
        // console.log(this.vac)
        console.log(this.gal)
      })
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
    }
    &:nth-of-type(4n - 2){
      margin-left: 100/24*1%;
    }
    &:nth-of-type(4n - 1){
      margin-left: 100/24*10%;
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
</style>
