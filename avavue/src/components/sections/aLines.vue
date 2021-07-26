<template>
    <div class="bg_w">
      <lineBig :key="line" v-for="line in lineList" :title = line ></lineBig>
      <div class="line m-t-40 m-b-40"></div>
      <div class="servItem servItem_web"></div>
      <div class="line m-t-40 m-b-40"></div>
      <div class="servItem servItem_des"></div>
      <div class="line m-t-40 m-b-40"></div>
      <div class="servItem servItem_web"></div>
      <div class="line m-t-40 m-b-40"></div>
      <div class="servItem servItem_des"></div>
      <div class="line m-t-40 m-b-40"></div>
      <div class="servItem servItem_web"></div>
      <div class="line m-t-40 m-b-40"></div>
      <div class="servItem servItem_des"></div>
      <div class="line m-t-40 m-b-40"></div>

    </div>
</template>

<script>
import lineBig from '@/components/lineBig.vue'

export default {
  data () {
    return {
      lineList: ['servItem_web', 'servItem_des', 'servItem_web', 'servItem_des', 'servItem_web', 'servItem_web'],
      components: {
        lineBig
      }
    }
  },
  props: {
    // msg: String
  },
  // methods(){},
  mounted () {
  },
  unmounted () {
    console.log('Пока1')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
