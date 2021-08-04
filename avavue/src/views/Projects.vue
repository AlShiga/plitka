<template>
 <div class="overflow-hidden">
    <div class="prFirst"></div>
    <div class="prMore">
      <div class="row p-b-200">
        <div class="col-xl-19 offset-xl-1 col-lg-19 offset-lg-1 col-md-22 offset-md-1 col-22 offset-1">

          <div v-for="pr in projects" :key="pr.title" class="prMoreItem p-b-40 p-t-40 m-b-20">
            <span class="h6 prMoreItem__title ttu">{{pr.title}}</span>
            <div class="prMoreItem__detail">
              <p class="p1">International company</p>
              <div class="d-none d-lg-block">
                <span class="p1">[ Branding ]</span>&nbsp;&nbsp;
                <span class="p1">[ Web ]</span>&nbsp;&nbsp;
                <span class="p1">[ Printing ]</span>&nbsp;&nbsp;
                <span class="p1">[ Logo ]</span>&nbsp;&nbsp;
                <span class="p1">[ 2021 ]</span>&nbsp;&nbsp;
              </div>
            </div>
          </div>

          <!-- <div class="prMoreItem p-b-40 p-t-40 m-b-20">
            <span class="h6 prMoreItem__title">knauf</span>
            <div class="prMoreItem__detail">
              <p class="p1">International company</p>
              <div class="d-none d-lg-block">
                <span class="p1">[ Branding ]</span>&nbsp;&nbsp;
                <span class="p1">[ Web ]</span>&nbsp;&nbsp;
                <span class="p1">[ Printing ]</span>&nbsp;&nbsp;
                <span class="p1">[ Logo ]</span>&nbsp;&nbsp;
                <span class="p1">[ 2021 ]</span>&nbsp;&nbsp;
              </div>
            </div>
          </div>

          <div class="prMoreItem p-b-40 p-t-40 m-b-20">
            <span class="h6 prMoreItem__title">knauf</span>
            <div class="prMoreItem__detail">
              <p class="p1">International company</p>
              <div class="d-none d-lg-block">
                <span class="p1">[ Branding ]</span>&nbsp;&nbsp;
                <span class="p1">[ Web ]</span>&nbsp;&nbsp;
                <span class="p1">[ Printing ]</span>&nbsp;&nbsp;
                <span class="p1">[ Logo ]</span>&nbsp;&nbsp;
                <span class="p1">[ 2021 ]</span>&nbsp;&nbsp;
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>
    <myFooter big="true"/>
  </div>
</template>

<script>
// import formPizza from '@/components/sections/formPizza.vue'
import myFooter from '@/components/sections/footer.vue'

export default {
  data () {
    return {
      projects: [{ name: 'knauf' }, { name: 'knauf1' }]
    }
  },
  components: {
    myFooter
  },
  mounted () {
    fetch('https://zapolie-v.ru/wp-json/wp/v2/posts')
      .then((r) => r.json())
      // eslint-disable-next-line no-return-assign
      .then((res) => {
        this.projects = res.map(x => x)
        // console.log(this.projects[0])
      })

    setTimeout(() => {
      console.log(this.projects[0])
    }, 1000)
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
    margin-right: 30vw;
  }
  border-bottom: 1px solid currentColor;
}
</style>
