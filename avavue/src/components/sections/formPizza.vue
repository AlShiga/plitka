<template>
  <div class="p-t-200 p-b-200">
    <div class="row">
      <div class=" offset-lg-9 col-lg-11 offset-md-5 col-md-18 col-22 offset-1">
        <input type="text" placeholder="Имя" >
        <input type="text" placeholder="Имя" >
        <input type="text" placeholder="Имя" >
        <input type="text" placeholder="Имя" >
        <captchaPizza/>
      </div>
    </div>
  </div>
</template>

<script>
import captchaPizza from '@/components/captchaPizza.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    captchaPizza
  },
  props: {
    // msg: String
  },
  // methods(){},

  methods: {

  },
  mounted () {
  },
  unmounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
