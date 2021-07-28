<template>
 <div class="overflow-hidden">
   <myHeader/>

    <div class="carFirst p-t-250 p-b-250">
      <div class="row">
        <div class="col-xl-20 offset-xl-3 col-lg-20 offset-lg-3 col-md-20 offset-md-3 col-20 offset-3">
          <h1 class="h3 m-b-40">We make realy</h1>
        </div>
        <div class="col-xl-22 offset-xl-1 col-lg-22 offset-lg-1 col-md-22 offset-md-1 col-22 offset-1">
          <h1 class="h3 m-b-40">good things </h1>
        </div>
        <div class="col-xl-18 offset-xl-5 col-lg-18 offset-lg-5 col-md-18 offset-md-5 col-20 offset-3">
          <h1 class="h3 m-b-40">Join our team</h1>
        </div>
      </div>
    </div>
    <div class="lent lent_gray">
      <div class="lent__img"></div>
    </div>

    <div class="bg_w p-t-250 p-b-200">
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
    <div class="bg_g p-t-250 p-b-200">
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
    <div class="bg_r p-t-200 p-b-200">
      <div class="row m-b-100">
        <div class="offset-1 col-xl-12 col-lg-14 col-md-18 col-22">
          <h6 class="h7 ttu">forward and we see our agency as a either the meaning of the work is obvious or to hell with it</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-7 offset-1">
          <div class="persItem">
            <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
            <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
            <p class="p1 ttu mp0">designer</p>
          </div>
        </div>
        <div class="col-9 offset-1">
          <div class="persItem">
            <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
            <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
            <p class="p1 ttu mp0">designer</p>
          </div>
        </div>
      </div>
    </div>
    <myFooter big="true"/>

  </div>
</template>

<script>
import formPizza from '@/components/sections/formPizza.vue'
import myFooter from '@/components/sections/footer.vue'
import myHeader from '@/components/sections/header.vue'

export default {
  name: 'Home',
  components: {
    formPizza,
    myFooter,
    myHeader

  }
}
</script>
