<template>
 <div class="overflow-hidden">
    <carFirst/>
    <div class="lent lent_gray">
      <div class="lent__img"></div>
    </div>

    <div class="bg_w p-t-100 p-b-200">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />
      <div class="row m-b-40">
        <div class="col-22 offset-1">
          <div class="m-b-40">
            <div class="tagsW">
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
          <div class="print">
            <img src="~@/assets/img/print.png" alt="" class="w-100 m-b-15">
            <p class="p1 ttu">wow.  we feel like this</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-1 col-xl-13 col-lg-14 col-md-17 col-22" >
          <p class="h7 ttu">
            we’re a branding/digital design studio connecting brands to people through craft and culture.
            A collective of three like-minded creatives and one powerhouse project
          </p>
        </div>
      </div>

    </div>
    <div class="bg_g p-t-100 p-b-200">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />

      <div class="row m-b-100">
        <div class="offset-1 col-xl-13 col-lg-14 col-md-17 col-22" >
          <p class="h6 ttu">
            Remember. Part of the crew - part of the ship
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2 d-none d-lg-block"></div>
        <div class="col-lg-6 col-md-9 col-22 offset-1">
          <div class="cartItem cartItem_red m-b-100">
            <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
            <p class="h7 ttu mp0">developer full stack</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-9 col-22 offset-1">
          <div class="cartItem m-b-100">
            <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
            <p class="h7 ttu mp0">developer full stack</p>
          </div>
        </div>
        <div class="col-6 d-none d-lg-block"></div>
        <div class="col-lg-9 col-10 d-none d-md-block"></div>
        <div class="col-lg-6 col-md-9 col-22 offset-1">
          <div class="cartItem cartItem_gray m-b-100">
            <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
            <p class="h7 ttu mp0">developer full stack</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-9 col-22 offset-1">
          <div class="cartItem m-b-100">
            <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
            <p class="h7 ttu mp0">developer full stack</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lent lent_gray ">
      <div class="lent__img"></div>
    </div>
    <formPizza/>
    <carSlider/>
    <myFooter big="true"/>
  </div>
</template>

<script>
import formPizza from '@/components/sections/formPizza.vue'
import myFooter from '@/components/sections/footer.vue'
import carFirst from '@/components/sections/carFirst.vue'
import carSlider from '@/components/sections/carSlider.vue'
import secTitle from '@/components/secTitle.vue'

export default {
  name: 'Home',
  components: {
    formPizza,
    myFooter,
    carFirst,
    secTitle,
    carSlider
  }
}
</script>
