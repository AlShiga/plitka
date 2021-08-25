<template>
<myCursor/>
<myHeader/>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName" mode="out-in" :duration="700">
        <component :is="Component" />
    </transition>
  </router-view>
</template>
<style lang="scss">
.fade1-enter-active {
  transition: all 0.3s ease-out;
}

.fade1-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade1-enter-from,
.fade1-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// .child-view {
//   position: absolute;
//   transition: all .75s cubic-bezier(.55,0,.1,1);
// }
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
@import 'src/assets/css/style.scss';

</style>
<script>
import myCursor from '@/components/myCursor.vue'
import myHeader from '@/components/sections/header.vue'

export default ({
  setup () {
  },
  components: {
    myCursor,
    myHeader
  },
  data () {
    return {
      transitionName: 'fade'
    }
  },
  beforeRouteUpdate (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  },
  watch: {
    $route (to, from) {
      console.log('routr')
      const toDepth = to.path
      const fromDepth = from.path
      // console.log({ toDepth, fromDepth })

      if (toDepth.includes('blog')) { this.transitionName = 'fade' } else if (toDepth.includes('projects') || fromDepth.includes('projects')) { this.transitionName = 'fade1' } else { this.transitionName = 'fade' }
      // this.transitionName = toDepth < fromDepth ? 'fade' : 'slide-left'
    }
  }
})
</script>
