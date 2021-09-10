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
    height: 40px;
    background-size:contain;
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
    &_web{background-image: url(~@/assets/img/web.svg);}
    &_des{background-image: url(~@/assets/img/ux.svg);}
    &_br{background-image: url(~@/assets/img/br.svg);}
    &_pr{background-image: url(~@/assets/img/pr.svg);}
    &_cw{background-image: url(~@/assets/img/cw.svg);}
  }
</style>
