<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </div>
  <!-- <transition name="fade">
    <router-view/>
  </transition> -->
  <router-view v-slot="{ Component }">
    <!-- <transition name="fade" mode="out-in"> -->
      <component :is="Component" />
    <!-- </transition> -->
  </router-view>
</template>

<style lang="scss">

// .slide-enter-active {
//   transition: all .3s ease;
// }
// .slide-leave-active {
//   transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .slide-enter, .slide-leave-active {
//   // padding-left: 10px;
//   opacity: 0;
// }

// .fade-enter-active,
// .fade-leave-active {
//   transition: 0.5s ease;
// }

// .fade-enter{opacity: 0;}
// .fade-enter-to{  opacity: 1;}
// .fade-leave{opacity: 1;}
// .fade-leave-to{  opacity: 0;}

@import 'src/assets/css/style.scss';

</style>
