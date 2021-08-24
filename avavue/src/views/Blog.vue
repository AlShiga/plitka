<template>
  <div class="bg_w overflow-hidden">
  <transition name="fade">
    <div class="">
          <div class="blogFirst bg_w p-t-250 p-b-100">
      <div class="row">
        <div class="col-22 offset-1">
          <h1 class="h3">Share<br> our expirience</h1>
        </div>
      </div>
    </div>

    <div class="bg_w p-b-200">
      <div class="col-22 offset-1">
        <div class="blogBody">
          <div v-for="bl in blogs" @click="$router.push({ path: `/blog/${bl.id}` })" :key="bl.id" class="cartItem">
            <div class="cartItem__imgW m-b-20">
              <img :src="bl.acf.gal[0]" alt="" class="w-100 m-b-10">
            </div>
            <p class="p1 ttu m-b-10">{{bl.acf.title}}</p>
            <p class="p1 ttu gray m-b-40">{{new Date(bl.date).toLocaleString('ru',{ day: 'numeric', month: 'numeric', year: 'numeric'})}}</p>
          </div>
        </div>
      </div>
    </div>
    <myFooter big=""/>
    </div>
  </transition>
  </div>
</template>

<script>
import myFooter from '@/components/sections/footer.vue'

export default {
  name: 'Contacts',
  components: {
    myFooter
  },
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=2&per_page=12')
      .then((r) => r.json())
    // eslint-disable-next-line no-return-assign
      .then((res) => {
        this.blogs = res.map(x => x)
      })
  }
}

</script>
<style lang="scss" scoped>
.blogFirst{
  padding-top: 220px;
}
.cartItem{
  cursor: pointer;
  margin-left: 3%;
  width: 30%;
  margin-bottom: 40px;
  &__imgW{
    position: relative;
    &::before{
      display: block;
      content: '';
      padding-bottom: 100%;
    }
    img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
    }
  }
  &:nth-of-type(12n){

  }
  &:nth-of-type(12n+1){
     margin-left: 33%;
  }
  &:nth-of-type(12n+2){
    margin-left: 3%;
  }
  &:nth-of-type(12n+3){
    margin-left: 0%;
    margin-right: 0%;
  }
  &:nth-of-type(12n+4){
    margin-left: 3%;
    margin-right: 30%;
  }
  &:nth-of-type(12n+5){
    margin-left: 0%;
  }
  &:nth-of-type(12n+6){
    margin-left: 36%;
    margin-right: 0%;
  }
  &:nth-of-type(12n+7){

    margin-left: 33%;
  }
  &:nth-of-type(12n+8){
    margin-left: 3%;

  }
  &:nth-of-type(12n+9){
    margin-left: 0%;
  }
  &:nth-of-type(12n+10){
    margin-left: 3%;
    margin-right: 30%;
  }
  &:nth-of-type(12n+11){
    margin-left: 0%;
  }
  &:nth-of-type(12n+12){
    margin-left: 36%;
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
.blogBody{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
