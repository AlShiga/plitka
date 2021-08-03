<template>
   <div class="overflow-hidden">
    <!-- <myHeader/> -->
    <aFirst />
    <div class="lent lent_gray">
      <div class="lent__img"></div>
    </div>
    <div class="bg_w p-t-100 p-b-200">
       <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-200"' />
      <div class="row m-b-40">
        <div class="col-22 offset-1">
          <h2 class="h3 m-b-40">Hello world</h2>
          <div class="print">
            <img width="1222" height="600" src="~@/assets/img/print.png" alt="" class="w-100 m-b-15">
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
    </div>
    <div class="lent">
      <div class="lent__img"></div>
    </div>
    <aNamePar />
    <aLines />

    <div class="p-t-100 p-b-200">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />
      <div class="row m-b-100">
        <div class="offset-1 col-xl-16 col-lg-12 col-md-15 col-22">
          <h4 class="h6">
            craft, service and efficiency drive us forward and we see our agency as a place where our shared values meet.
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col-22 offset-1">
          <div class="persWrap">
            <div class="persItem">
              <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
            <div class="persItem">
              <img src="~@/assets/img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
            <div class="">
              <p class="p1">
                AVA is a small team. There are five of us. Each of us is responsible for his/her part of the work. We are
                <br>
                <br>
                AVA is a small team. There are five of us. Each of us is responsible for his/her part of the work. We are engaged in web design and site development of different difficulty.
              </p>
            </div>
            <div class=""></div>
            <div class=""></div>
            <div class="persItem">
              <img src="img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
            <div class="persItem">
              <img src="img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
            <div class=""></div>
            <div class="persItem">
              <img src="img/al.jpg" alt="" class="w-100 m-b-10">
              <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
              <p class="p1 ttu mp0">designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg_r p-t-100 p-b-200">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />
      <div class="row m-b-100">
        <div class="offset-1 col-xl-12 col-lg-14 col-md-18 col-22">
          <h6 class="h7 ttu">forward and we see our agency as a either the meaning of the work is obvious or to hell with it</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-7 offset-1">
          <div class="persItem">
            <img src="img/al.jpg" alt="" class="w-100 m-b-10">
            <p class="p1 ttu mp0">Alevtina Ksenofontova</p>
            <p class="p1 ttu mp0">designer</p>
          </div>
        </div>
        <div class="col-9 offset-1">
          <div class="persItem">
            <img src="img/al.jpg" alt="" class="w-100 m-b-10">
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
// @ is an alias to /src
import aFirst from '@/components/sections/aFirst.vue'
import aNamePar from '@/components/sections/aNamePar.vue'
import aLines from '@/components/sections/aLines.vue'
import myFooter from '@/components/sections/footer.vue'
import secTitle from '@/components/secTitle.vue'

export default {
  name: 'About',
  components: {
    aFirst,
    aNamePar,
    aLines,
    myFooter,
    secTitle
  }
}
</script>
