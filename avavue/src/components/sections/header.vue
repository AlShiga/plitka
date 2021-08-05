<template>
    <div class="noise"></div>
    <div class="header header_bottom m-t-20 p-t-20">
      <div class="header__border">
        <div class=""></div>
      </div>
      <div class="row">
        <div class="col-1 offset-1">
          <router-link to="/">
            <svg style="opacity: 0;" class="header__logo" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 18.8015L24.1062 18.2431L29.5131 12.1825L27.8175 10.4801L21.7569 15.8938L21.1985 0H18.8015L18.2431 15.8938L12.1825 10.4801L10.4869 12.1825L15.8938 18.2431L0 18.8015V21.1985L15.8938 21.7569L10.4869 27.8175L12.1825 29.5132L18.2431 24.1062L18.8015 40H21.1985L21.7569 24.1062L27.8175 29.5132L29.5131 27.8175L24.1062 21.7569L40 21.1985V18.8015Z" fill="#ED2330"/>
            </svg>
          </router-link>
        </div>
        <div class="col-4 offset-14"><p class=""><span v-if="$store.state.langEn" class="p1 ttu m-b-10">[ Start the project  ]</span><span v-else class="p1 ttu m-b-10">[ Начать проект ]</span></p></div>
        <div class="col-1">
          <a @click.stop="$store.commit('selectLang')" class="selectLang">
            <span class="p1 ttu" v-if="$store.state.langEn">[ EN ]</span>
            <span class="p1 ttu" v-else>[ RU ]</span>
          </a>
        </div>
        <div class="header__menu">
          <div class="row">
            <div class="col-24"><router-link to="/blog"><p class="p1 ttu m-b-10"><span v-if="$store.state.langEn" class="p1 ttu m-b-10">[&nbsp;Blog&nbsp;]</span><span v-else class="p1 ttu m-b-10">[&nbsp;Блог&nbsp;]</span></p></router-link></div>
            <div class="col-24"><router-link to="/contacts"><p class="p1 ttu m-b-10"><span v-if="$store.state.langEn" class="p1 ttu m-b-10">[&nbsp;Contacts&nbsp;]</span><span v-else class="p1 ttu m-b-10">[&nbsp;Контакты&nbsp;]</span></p></router-link></div>
            <div class="offset-12 col-12"><router-link to="/about"><p class="p1 ttu m-b-10"><span v-if="$store.state.langEn" class="p1 ttu m-b-10">[&nbsp;About&nbsp;]</span><span v-else class="p1 ttu m-b-10">[&nbsp;О нас&nbsp;]</span></p></router-link></div>
            <div class="offset-12 col-12"><router-link to="/career"><p class="p1 ttu m-b-10"><span v-if="$store.state.langEn" class="p1 ttu m-b-10">[&nbsp;Career&nbsp;]</span><span v-else class="p1 ttu m-b-10">[&nbsp;Карьера&nbsp;]</span></p></router-link></div>
            <div class="col-24"><router-link to="/projects"><p class="p1 ttu m-b-10"><span v-if="$store.state.langEn" class="p1 ttu m-b-10">[&nbsp;Projects&nbsp;]</span><span v-else class="p1 ttu m-b-10">[&nbsp;Работы&nbsp;]</span></p></router-link></div>
          </div>
        </div>
      </div>
    </div>
    <div class="header header_top m-t-20 p-t-20">
      <div class="row position-relative">
        <div class="col-1 offset-1">
          <router-link to="/">
            <svg class="header__logo" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 18.8015L24.1062 18.2431L29.5131 12.1825L27.8175 10.4801L21.7569 15.8938L21.1985 0H18.8015L18.2431 15.8938L12.1825 10.4801L10.4869 12.1825L15.8938 18.2431L0 18.8015V21.1985L15.8938 21.7569L10.4869 27.8175L12.1825 29.5132L18.2431 24.1062L18.8015 40H21.1985L21.7569 24.1062L27.8175 29.5132L29.5131 27.8175L24.1062 21.7569L40 21.1985V18.8015Z" fill="#ED2330"/>
            </svg>
          </router-link>
        </div>

      </div>
    </div>
</template>

<script>
import Headroom from 'headroom.js'
export default {
  data () {
    return {
    }
  },
  props: {
    // msg: String
  },
  // methods(){},
  mounted () {
    const header = document.querySelectorAll('.header')
    header.forEach(el => {
      new Headroom(el).init()
    })
  }
  // unmounted () {
  //   console.log('Пока')
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
  pointer-events: none;
  & *{
    pointer-events: none;
  }
  & a{
    pointer-events: all;
    & *{
      pointer-events: all;
    }
  }
}
.header__menu{
  position: absolute;
  top: 100%;
  right: 4.33vw;
  width: 12.2vw;
  opacity: 0;
  transform: translateY(-150%);
  transition: 0.4s;
  mix-blend-mode: difference;
  pointer-events: none;
  & *{
    pointer-events: none;
  }
  & a{
    pointer-events: all;
    & *{
      pointer-events: all;
    }
  }
}
.headroom {
  will-change: transform;
  transition: transform 0.4s ease-in-out;
}
.headroom--pinned {
  transform: translateY(0%);
}
.headroom--unpinned {
  transform: translateY(-200%);
}
.headroom--top{
  .header__menu{
    opacity: 1;
    transform: translateY(0);
  }
}
.headroom--bottom{
  transform: translateY(0%);
  .header__menu{
    opacity: 1;
    transform: translateY(0);
  }
}
.selectLang{
  cursor: pointer;
}
</style>
