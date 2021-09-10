<template>
 <div class="overflow-hidden">
    <!-- <div class="prFirst"></div> -->
    <prFirst/>
    <div class="prMore">
      <div class="row p-t-100 p-b-200">
        <div class="col-xl-19 offset-xl-1 col-lg-19 offset-lg-1 col-md-22 offset-md-1 col-22 offset-1">
          <div class="prBtn m-b-80">
            <div v-for="tag in tags" :key="tag.id" @click="getPost($event, tag.id)" class="tag tag_W" data-v-6ad55cbc=""><span class="h9 ttu" data-v-6ad55cbc="">{{tag.name}}</span></div>
          </div>
          <transition-group name="list" tag="p">
            <div v-for="pr in projects" :key="pr.acf.title" class="">
              <div v-if='!pr.acf.toSite'  @click="$router.push({ path: `/projects/${pr.id}` })"  class="prMoreItem p-b-40 p-t-40 m-b-20" v-on:mouseover="myMouseover" v-on:mouseout="myMouseout" v-on:mousemove="myMousemove">
                <span class="h6 prMoreItem__title ">{{($store.state.langEn)?pr.acf.titleEN: pr.acf.title}}</span>
                <div class="prMoreItem__detail">
                  <p class="p1 text-right">{{($store.state.langEn)?pr.acf.fieldEN: pr.acf.field}}</p>
                  <div v-if="pr.tags" class="d-none d-lg-block text-right">
                    <span v-for="tag in pr.acf.tags" class="p1" :key="tag.name">&nbsp;&nbsp;[&nbsp;{{tag.name}}&nbsp;]</span>
                  </div>
                </div>
                <img :src="pr.acf.imgSm" alt="" class="prMoreItem__img">
              </div>
              <a v-else :href="pr.acf.toSiteLink" target="_blank" class="prMoreItem p-b-40 p-t-40 m-b-20" v-on:mouseover="myMouseover" v-on:mouseout="myMouseout" v-on:mousemove="myMousemove">
                <span class="h6 prMoreItem__title ">{{($store.state.langEn)?pr.acf.titleEN: pr.acf.title}}</span>
                <div class="prMoreItem__detail">
                  <p class="p1 text-right">{{($store.state.langEn)?pr.acf.fieldEN: pr.acf.field}}</p>
                  <div v-if="pr.tags" class="d-none d-lg-block text-right">
                    <span v-for="tag in pr.acf.tags" class="p1" :key="tag.name">&nbsp;&nbsp;[&nbsp;{{tag.name}}&nbsp;]</span>
                  </div>
                </div>
                <img :src="pr.acf.imgSm" alt="" class="prMoreItem__img">
              </a>

            </div>

          </transition-group>
        </div>
      </div>
    </div>
    <myFooter big="true"/>
  </div>
</template>

<script>
// import formPizza from '@/components/sections/formPizza.vue'
import { gsap } from 'gsap/all'
import myFooter from '@/components/sections/footer.vue'
import prFirst from '@/components/sections/prFirst.vue'

export default {
  data () {
    return {
      projects: [],
      tags: [],
      imgTarget: '',
      transform: {
        x: 0,
        y: 0,
        curX: 0,
        curY: 0,
        scale: 1,
        opacity: 1,
        bx: 0,
        by: 0
      }
    }
  },

  components: {
    myFooter,
    prFirst
  },
  methods: {
    myMouseover: function (e) {
      if (innerWidth < 1023) return
      this.transform.bx = e.target.getBoundingClientRect().left
      this.transform.by = e.target.getBoundingClientRect().top
      this.transform.x = e.clientX - this.transform.bx
      this.transform.y = e.clientY - this.transform.by
      this.imgTarget = e.target.querySelector('img')
      gsap.to(this.imgTarget, { x: this.transform.x, y: this.transform.y, scale: 1, duration: 0 })
      gsap.ticker.add(this.updatePos)
      // console.log(this)
      // console.log(e)
    },
    myMousemove: function (e) {
      if (innerWidth < 1023) return
      this.transform.curX = e.clientX - this.transform.bx
      this.transform.curY = e.clientY - this.transform.by
      // console.log(2)
    },
    myMouseout: function (e) {
      if (innerWidth < 1023) return
      gsap.to(this.imgTarget, { x: this.transform.x, y: this.transform.y, scale: 0, opacity: 0, duration: 0.5 })
      gsap.ticker.remove(this.updatePos)
      // console.log(3)
    },
    updatePos: function (e) {
      if (innerWidth < 1023) return
      this.transform.x = (this.transform.x * 9 + this.transform.curX) / 10
      this.transform.y = (this.transform.y * 9 + this.transform.curY) / 10
      gsap.to(this.imgTarget, { x: this.transform.x, y: this.transform.y, scale: 1, opacity: this.transform.opacity, duration: 0.3 })
    },
    getPost: function (e, cat) {
      document.querySelectorAll('.prBtn .tag').forEach((el) => {
        el.classList.remove('active')
      })
      // console.log(e)
      // console.log(e.target)
      e.target.classList.add('active')
      fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=4&per_page=20&tags=' + cat)
        .then((r) => r.json())
      // eslint-disable-next-line no-return-assign
        .then((res) => {
          this.projects = res.map(x => x)
        })
    }
  },
  mounted () {
    fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/tags')
      .then((r) => r.json())
      // eslint-disable-next-line no-return-assign
      .then((res) => {
        // this.tags = res.map(x => x)
        res.map(x => x).forEach((el) => {
          if (Number(el.name) > 0) return
          this.tags.push(el)
        })
      })
    if (!this.$store.state.prPost.lenght) {
      fetch(this.$store.state.linkAdmin + '/wp-json/wp/v2/posts?categories=4&per_page=40')
        .then((r) => r.json())
      // eslint-disable-next-line no-return-assign
        .then((res) => {
          this.projects = res.map(x => x)
          this.$store.commit('addPrPost', this.projects)
          this.$store.commit('hideMenu')
        })
    } else {
      this.projects = this.$store.state.prPost
      this.$store.commit('hideMenu')
    }
  }

}
</script>
<style lang="scss" scoped>
.prFirst{
  min-height: 100vh;
}
.prMoreItem{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid currentColor;
  cursor: pointer;
  position: relative;
  & img{
    position: absolute;
    width: 300px;
    height: auto;
    top: 0;
    left: 0;
  }
  & *{
    pointer-events: none;
  }
  @media (max-width: 1449.98px) {

  }

  @media (max-width: 1024.98px) {

  }

  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__title{
    margin-right: 3vw;
    cursor: pointer;
  }
  &__img{
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0);
    opacity: 0;
    pointer-events: none;
    width: 200px;
    height: 150px;
    object-fit: cover;
    transition: opacity 0.3s;
  }
    transition: 0.3s;
  &:hover{
    color: #ED2330;
    border-color: #f8f8f8;
  }
}
.mAdvItem{
  & *{
    // pointer-events:none;
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
