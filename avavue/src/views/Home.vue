<template>
   <div class="overflow-hidden">
    <myHeader/>
    <mFirst/>

    <div class="p-t-200 p-b-250">
      <myMarquee :addClass="'z-1 marquee_rotate marquee_gray'" />
      <myMarquee/>
      <!-- <myMarquee/> -->
      <!-- <div class="lent z-1 lent_gray lent_rotate">
        <div class="lent__img"></div>
      </div> -->
      <div class="lent z-2">
        <div class="lent__img"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-12 offset-xl-1 col-lg-13 offset-lg-1 col-md-14 offset-md-1 col-22 offset-1">
        <p class="h7 ttu">
          we’re a branding/digital design studio connecting brands to people through craft and culture.
          A collective of three like-minded creatives and one powerhouse project
        </p>
      </div>
    </div>
    <div class="bg_w p-t-250 p-b-200">
      <div class="row m-b-40">
        <div class="col-22 offset-1">
          <h2 class="h3 m-b-40">Hello world</h2>
          <div class="print">
            <img width="1222px" height="600px" src="~@/assets/img/print.png" alt="" class="w-100 m-b-15">
            <p class="p1 ttu">wow.  we feel like this</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-1 col-lg-12 col-md-15 col-22" >
          <p class="h8">
            <span class="p1 red">[ Our team ];</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AVA is a small team. There are five of us. Each of us is responsible for his/her part of the work. We are engaged in web design and site development of different difficulty.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-5 offset-1">
          <myButton :text='"[ хуй ]"'/>
        </div>
      </div>

    </div>
    <mTagsFly/>
    <div class="lent lent_red">
      <div class="lent__img"></div>
    </div>
    <div class="p-t-200 p-b-200">
      <div class="row">
        <div class="offset-1 col-lg-12 col-md-16 col-18">
          <h3 class="h7 ttu">forward and we see our agency as a either the meaning of the work is obvious or to hell with it</h3>
        </div>
      </div>

      <div class="workItem">

      </div>
    </div>

    <mAdv/>

    <myFooter big="true"/>
    <!-- <div class="lent lent_gray">
      <div class="lent__img"></div>
    </div>
    <div class="bg_w p-t-250 p-b-80">
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
    </div> -->

  </div>

  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
import mTagsFly from '@/components/sections/mTagsFly.vue'
import mAdv from '@/components/sections/mAdv.vue'
import mFirst from '@/components/sections/mFirst.vue'
import myHeader from '@/components/sections/header.vue'
import myFooter from '@/components/sections/footer.vue'
import myMarquee from '@/components/myMarquee.vue'
import myButton from '@/components/myButton.vue'

export default {
  name: 'Home',
  components: {
    mTagsFly,
    mFirst,
    mAdv,
    myHeader,
    myFooter,
    myMarquee,
    myButton
  }
}
</script>
