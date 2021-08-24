<template>
<transition name="fade">
  <div v-if="show" class="overflow-hidden">
    <div class="blogFirst bg_w p-t-250 p-b-80">
      <div class="row">
        <div class="col-lg-16 col-22 offset-lg-4 offset-1">
          <h1 class="h3">{{($store.state.langEn)?blog.acf.titleEN: blog.acf.title}}</h1>
        </div>
      </div>
    </div>
    <div class=" bg_w p-b-200">
      <div class="row">
        <div class="col-xl-1 offset-xl-8 col-lg-2 offset-lg-6 col-md-2 offset-md-4 col-22 offset-1">
          <p class="p1">{{new Date(blog.date).toLocaleString('ru',{ day: 'numeric', month: 'numeric', year: 'numeric'})}}</p>
        </div>
        <div class="col-xl-7 offset-xl-1 col-lg-8 offset-lg-1 col-md-12 offset-md-1 col-22 offset-1">
          <div class="m-b-40">
          <span class="p1" v-html="($store.state.langEn)?blog.acf.textEN: blog.acf.text"></span>
          </div>
          <div v-if="blog.acf.gal.length===1" class="">
            <div class="cartItem">
              <img :src='blog.acf.gal' alt="" class="w-100 m-b-20">
            </div>
          </div>
          <div v-else class="blogSlider">
            <swiper
              :slidesPerView="1"
              :space-between="30"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >

              <swiper-slide v-for="galItem in blog.acf.gal"  :key="galItem">
                <div class="polarImg">
                  <div class="cartItem">
                    <img :src="galItem" alt="" class="w-100 m-b-10">
                  </div>
                  <!-- <p v-if="$store.state.langEn" class="p1 ttu">{{galItem.nameEN}}</p>
                  <p v-else class="p1 ttu">{{galItem.name}}</p>
                  <p v-if="$store.state.langEn" class="p1 ttu gray">{{galItem.detEN}}</p>
                  <p v-else class="p1 ttu gray">{{galItem.det}}</p> -->
                </div>
              </swiper-slide>

            </swiper>
          </div>
        </div>
      </div>
    </div>

    <div v-if='showMore' class="bg_g p-t-200 p-b-200">

      <div class="row">
        <div  class="col-xl-18 offset-xl-5 col-lg-14 offset-lg-9 col-md-16 offset-md-7 col-22 offset-1">
          <a v-for="bl in blogMore" :key="bl.id" @click="$router.push({ path: `/blog/${bl.id}` })" class="moreBlog p-b-20 m-b-40">
            <span class="h6">{{bl.acf.title}}</span>
            <span class="p1">[&nbsp;{{new Date(bl.date).toLocaleString('ru',{ day: 'numeric', month: 'numeric', year: 'numeric'})}}&nbsp;]</span>
          </a>
        </div>
      </div>

    </div>
    <myFooter big="true"/>
  </div>
  </transition>
</template>

<script>
import myFooter from '@/components/sections/footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
export default {
  name: 'Contacts',
  components: {
    myFooter,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      blog: [],
      show: false,
      showMore: false
    }
  },
  methods: {
    getPost: function () {
      fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts/' + this.$route.params.id)
        .then((r) => r.json())
        .then((res) => {
          this.blog = res
          this.show = true
          console.log(this.blog)
          fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=2&per_page=4&before=' + this.blog.date)
            .then((r) => r.json())
            .then((res) => {
              this.blogMore = res
              this.showMore = true
              console.log(this.blogMore)
            })
        })
    }
  },
  mounted () {
    this.getPost()
  },
  watch: {
    $route (to, from) {
      this.getPost()
    }
  }
}

</script>
<style lang="scss" scoped>
.blogFirst{
  padding-top: 220px;
}
.cartItem{
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.blogSlider{
  .swiper-container{
    overflow: visible;
  }
}
</style>
