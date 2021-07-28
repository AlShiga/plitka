<template>
    <div v-if="big" class="lent lent_gray">
      <div class="lent__img"></div>
    </div>
    <div v-if="big" class="bg_w p-t-250 p-b-80">
      <div class="row m-b-200">
        <div class="col-22 offset-1">
          <a href="tel:+78129062232" class="h4 red">+7 812 906 —<br>22 — 32</a>
          <a href="mailto:info@ava-digital.ru"  class="d-flex">
            <span class="h4 red" >info@</span>
            <span class="h4 red" >ava-<br>
              digital.ru</span>
          </a>
        </div>
      </div>
      <div class="row m-b-40">
        <div class="col-22 offset-1">
          <div class="m-b-40">
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
      </div>
    </div>
    <div class="mBottom p-t-250 p-b-250">
      <div class="d-flex justify-content-center ">
        <h6 class="h3 text-center">Are you<br> still here?</h6>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: ['big']
  // methods(){},
  // mounted () {
  //   console.log('Прив')
  // },
  // unmounted () {
  //   console.log('Пока')
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
