<template>
  <div class="overflow-hidden">
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
            <img :src="bl.acf.gal[0]" alt="" class="w-100 m-b-10">
            <p class="p1 ttu m-b-10">{{bl.acf.title}}</p>
            <p class="p1 ttu gray m-b-40">{{new Date(bl.date).toLocaleString('ru',{ day: 'numeric', month: 'numeric', year: 'numeric'})}}</p>
          </div>
        </div>
      </div>
    </div>
    <myFooter big=""/>
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
    fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=2')
      .then((r) => r.json())
    // eslint-disable-next-line no-return-assign
      .then((res) => {
        this.blogs = res.map(x => x)
      })
  }
}

</script>
<style lang="scss" scoped>
.cartItem{
  cursor: pointer;
}
</style>
