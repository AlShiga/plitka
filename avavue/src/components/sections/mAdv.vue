<template>
    <div class="bg_r p-t-100 p-b-80">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-150"' />
     <div class="row">
       <div class="col-22 offset-1">
        <mAdvItem :key="adv" v-for="adv in advList" :name = adv.name :img = adv.img ></mAdvItem>
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
      name: 'aAdv',
      advList: [
        { name: '[ NO MANAGER ];', img: require('@/assets/img/gif/ninkita-call.gif') },
        { name: '[ PERFECT SERVICE ];', img: require('@/assets/img/gif/money.gif') },
        { name: '[ WE ARE HONEST ];', img: require('@/assets/img/gif/kivaem.gif') },
        { name: '[ LOVE EVERY PROJECT ];', img: require('@/assets/img/gif/love.gif') }
      ]
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
