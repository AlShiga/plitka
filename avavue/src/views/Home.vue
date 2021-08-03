<template>
  <div class="overflow-hidden">
    <mFirst />

    <div class="p-t-200 p-b-250">
      <myMarquee :addClass="'z-1 marquee_rotate marquee_gray'" />
      <myMarquee />
      <!-- <myMarquee/> -->
      <!-- <div class="lent z-1 lent_gray lent_rotate">
        <div class="lent__img"></div>
      </div> -->
      <div class="lent z-2">
        <div class="lent__img"></div>
      </div>
    </div>
    <div class="row">
      <div
        class="
          col-xl-12
          offset-xl-1
          col-lg-13
          offset-lg-1
          col-md-14
          offset-md-1
          col-22
          offset-1
        "
      >
        <p class="h7 ttu">
          we’re a branding/digital design studio connecting brands to people
          through craft and culture. A collective of three like-minded creatives
          and one powerhouse project
        </p>
      </div>
    </div>
    <div class="bg_w p-t-100 p-b-200">
      <secTitle :title="'[ Super puper cool team ];'" :addClass="'m-b-250'" />
      <div class="row m-b-40">
        <div class="col-22 offset-1">
          <h2 class="h3 m-b-40">&lt;Hello world/&gt;</h2>
          <div class="print">
            <img
              width="1222px"
              height="600px"
              src="~@/assets/img/print.png"
              alt=""
              class="w-100 m-b-15"
            />
            <p class="p1 ttu">wow. we feel like this</p>
          </div>
        </div>
      </div>
      <div class="row m-b-150">
        <div class="offset-1 col-lg-12 col-md-15 col-22">
          <p class="h8">
            <span class="p1 red">[ Our team ];</span
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AVA is a small team.
            There are five of us. Each of us is responsible for his/her part of
            the work. We are engaged in web design and site development of
            different difficulty.
          </p>
        </div>
      </div>
      <div class="row position-relative">
        <div class="yes h2 red">YES</div>
        <div class="col-lg-5 offset-lg-1 d-none d-lg-block">
          <myButton :text="'[ хуй ]'" />
        </div>
        <div
          class="
            col-lg-5
            offset-lg-6
            col-md-7
            offset-md-7 offset-1
            col-22
            offset-1
            m-b-40
          "
        >
          <myButton @click="$router.push('/about')" :text="'[ пизда ]'" />
        </div>
        <div
          class="
            col-lg-4
            offset-lg-1
            col-md-6
            offset-md-1 offset-1
            col-22
            offset-1
          "
        >
          <myButton @click="showYes" :text="'[ джигурда ]'" />
        </div>
      </div>
    </div>
    <mTagsFly />
    <div class="lent lent_red">
      <div class="lent__img"></div>
    </div>
    <div class="position-relative p-t-100 p-b-200">
      <secTitle :title="'[ Super puper cool team ];'" :addClass="'m-b-100'" />
      <mPrList />
    </div>
    <mAdv />
    <myFooter big="true" />
  </div>
</template>

<script>
import mTagsFly from '@/components/sections/mTagsFly.vue'
import mAdv from '@/components/sections/mAdv.vue'
import mFirst from '@/components/sections/mFirst.vue'
import myFooter from '@/components/sections/footer.vue'
import myMarquee from '@/components/myMarquee.vue'
import myButton from '@/components/myButton.vue'
import secTitle from '@/components/secTitle.vue'
import mPrList from '@/components/sections/mPrList.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    mTagsFly,
    mFirst,
    mAdv,
    myFooter,
    myMarquee,
    myButton,
    secTitle,
    mPrList
  },
  methods: {
    showYes: function () {
      document.querySelector('.yes').classList.add('show')
      setTimeout(() => {
        document.querySelector('.yes').classList.remove('show')
      }, 100)
    }
  },
  mounted () {
    console.log('Прив1')
  },
  unmounted () {
    console.log('Пока1')
  }
}

</script>

<style lang="scss" scoped>
.yes {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -200%);
  transition: 1.5s;
  opacity: 0;
  pointer-events: none;
  &.show {
    transition: 0.1s;
    opacity: 1;
  }
}
</style>
