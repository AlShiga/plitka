<template>
<transition name="fade">
  <div v-if="show" class="prItem overflow-hidden">
    <div class="row">
      <img :src="project.acf.img" alt="" class="prItem__firstImg">
    </div>
    <div class="blogFirst bg_w p-t-250 p-b-80">
      <div class="row">
        <div class="col-lg-16 col-22 offset-lg-4 offset-1">
          <h1 class="h3">{{project.acf.title}}</h1>
        </div>
      </div>
    </div>
    <div class=" bg_w p-b-200">
      <div class="row">
        <div class="col-xl-1 offset-xl-8 col-lg-2 offset-lg-6 col-md-2 offset-md-4 col-22 offset-1">
          <p class="p1">{{new Date(project.date).toLocaleString('ru',{ day: 'numeric', month: 'numeric', year: 'numeric'})}}</p>
        </div>
        <div class="col-xl-7 offset-xl-1 col-lg-8 offset-lg-1 col-md-12 offset-md-1 col-22 offset-1">
          <div class="m-b-40">
          <span class="p1" v-html="($store.state.langEn)?project.acf.textEN: project.acf.text"></span>
          </div>
          <span class="d-block m-b-40">
          <span class="p1 ttu " v-for="tag in project.acf.tags"  :key="tag.name">[&nbsp;{{tag.name}}&nbsp;]&nbsp;&nbsp;</span>
          </span>
          <a class="p1 ttu d-block m-b-40 red" target="_blank" :href="project.acf.siteLink">{{project.acf.site}}</a>
          <a class="p1 ttu d-block m-b-40 red" target="_blank" :href="project.acf.behLink">{{project.acf.beh}}</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="w-100" v-html="project.acf.red"></div>
    </div>

    <myFooter />
  </div>
</transition>
</template>

<script>
import myFooter from '@/components/sections/footer.vue'

export default {
  data () {
    return {
      project: [],
      show: false
    }
  },
  components: {
    myFooter
  },
  mounted () {
    fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts/' + this.$route.params.id)
      .then((r) => r.json())
      // eslint-disable-next-line no-return-assign
      .then((res) => {
        this.project = res
        this.show = true
        console.log(this.project)
      })
  }

}
</script>
<style lang="scss" >
.prItem{
  &__firstImg{
    width:  100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }
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
