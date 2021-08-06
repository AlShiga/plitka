<template>
<transition name="fade">
  <div v-if="show" class="overflow-hidden">
    <div class="blogFirst bg_w p-t-250 p-b-80">
      <div class="row">
        <div class="col-lg-16 col-22 offset-lg-4 offset-1">
          <h1 class="h3">{{blog.acf.title}}</h1>
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
          <span class="p1" v-html="blog.acf.text"></span>
          </div>
          <div v-if="blog.acf.gal.length===1" class="">
            <div class="cartItem">
              <img :src='blog.acf.gal' alt="" class="w-100 m-b-20">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="bg_g p-t-200 p-b-200">

      <div class="row">
        <div class="col-xl-18 offset-xl-5 col-lg-14 offset-lg-9 col-md-16 offset-md-7 col-2 offset-1">
          <a href="#" class="moreBlog p-b-20 m-b-40">
            <span class="h6">why hamovniki</span>
            <span class="p1">[ 02.04.2021 ]</span>
          </a>
          <a href="#" class="moreBlog p-b-20 m-b-40">
            <span class="h6">why hamovniki</span>
            <span class="p1">[ 02.04.2021 ]</span>
          </a>
          <a href="#" class="moreBlog p-b-20 m-b-40">
            <span class="h6">why hamovniki</span>
            <span class="p1">[ 02.04.2021 ]</span>
          </a>
          <a href="#" class="moreBlog p-b-20 m-b-40">
            <span class="h6">why hamovniki</span>
            <span class="p1">[ 02.04.2021 ]</span>
          </a>
        </div>
      </div>

    </div> -->
    <myFooter big="true"/>
  </div>
  </transition>
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
      blog: [],
      show: false
    }
  },
  mounted () {
    fetch('http://ava.avadev.ru/wp-json/wp/v2/posts/' + this.$route.params.id)
      .then((r) => r.json())
    // eslint-disable-next-line no-return-assign
      .then((res) => {
        this.blog = res
        this.show = true
        console.log(this.blog)
      })
  }
}

</script>
<style lang="scss" scoped>
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
</style>
