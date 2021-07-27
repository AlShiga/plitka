<template>
    <div class="bg_r p-t-200 p-b-80">
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

export default {
  data () {
    return {
      name: 'aAdv',
      advList: [
        { name: '[ no manager ];', img: 'https://townsquare.media/site/341/files/2013/04/Cutest-Dogs1.gif?w=1200&h=0&zc=1&s=0&a=t&q=89' },
        { name: '[ perfect service ];', img: 'https://99px.ru/sstorage/86/2020/09/10309201303436361.gif' },
        { name: '[ we are honest ];', img: 'https://i.pinimg.com/originals/ee/fd/36/eefd366e66992e1457a5a4e1a5df1b71.gif' },
        { name: '[ love every project ];', img: 'https://99px.ru/sstorage/86/2020/09/10309201303436361.gif' }
      ]
    }
  },
  components: {
    mAdvItem
  },
  // methods(){},
  mounted () {
    console.log('Прив1')
  },
  unmounted () {
    console.log('Пока1')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
