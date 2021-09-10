<template>
    <div class="bg_r p-t-100 p-b-150">
      <secTitle :title="($store.state.langEn)?('[  we are cool ];'):('[ мы крутые! ];')" :addClass='"m-b-200"' />
     <div class="row">
       <div class="col-22 offset-1">
        <mAdvItem :name ="($store.state.langEn) ? ('[&nbsp;NO MANAGER&nbsp;];') : ('[&nbsp;нет менеджера&nbsp;];')" :img ="require('@/assets/img/gif/ninkita-call.mp4')" ></mAdvItem>
        <mAdvItem :name ="($store.state.langEn) ? ('[&nbsp;PERFECT SERVICE&nbsp;];') : ('[&nbsp;идеальный сервис&nbsp;];')" :img ="require('@/assets/img/gif/money.mp4')"></mAdvItem>
        <mAdvItem :name ="($store.state.langEn) ? ('[&nbsp;WE ARE HONEST&nbsp;];') : ('[&nbsp;работаем честно&nbsp;];')" :img ="require('@/assets/img/gif/kivaem.mp4')"></mAdvItem>
        <mAdvItem :name ="($store.state.langEn) ? ('[&nbsp;LOVE EVERY PROJECT&nbsp;];') : ('[&nbsp;любим каждый проект&nbsp;];')" :img ="require('@/assets/img/gif/love.mp4')"></mAdvItem>
       </div>
     </div>
    </div>
</template>

<script>
// import { gsap, TweenLite } from 'gsap/all'
import mAdvItem from '@/components/mAdvItem.vue'
import secTitle from '@/components/secTitle.vue'

export default {
  data () {
    return {
      name: 'aAdv'
    }
  },
  components: {
    mAdvItem, secTitle
  },
  methods () {},
  mounted () {
    // console.log('Прив1')
  },
  unmounted () {
    // console.log('Пока1')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
