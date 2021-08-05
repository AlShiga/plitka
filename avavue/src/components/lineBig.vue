<template>
  <div class="overflow-hide" >
      <div class="line m-t-40 m-b-40"></div>
      <div class="servItem" :class = name ></div>
  </div>
</template>

<script>
export default {
  props: ['name', 'img'],
  data () {
    return {
    }
  },
  mounted () {
    // console.log(this)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .servItem{
    width: 400vw;
  }
</style>
