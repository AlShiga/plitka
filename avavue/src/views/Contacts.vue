<template>
  <div class="overflow-hidden">
    <contFirst/>
    <div class="lent lent_gray">
      <div class="lent__img"></div>
    </div>
    <div class="bg_g p-t-100 p-b-200">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />
      <div class="row">
        <div class="col-lg-9 offset-lg-1 col-22 offset-1">
          <div class="d-flex flex-column">
            <a href="mailto:info@ava-digital.ru" class="h9 m-b-10 ttu"
              >info@ava-digital.ru</a
            >
            <a href="tel:+78129062232" class="h9 m-b-10 ttu"
              >+7 812 906 — 22 — 32</a
            >
            <p class="h9 m-b-10 ttu">St. Petersburg</p>
            <p class="h9"></p>
            <a href="#" class="h9 m-b-10 ttu">[ Behance ]</a>
            <a href="#" class="h9 m-b-10 ttu">[ Facebook ]</a>
            <a href="#" class="h9 m-b-10 ttu">[ Instagram ]</a>
            <a href="#" class="h9 m-b-10 ttu">[ VK ]</a>
          </div>
        </div>
        <div class="col-lg-12 offset-lg-1 col-22 offset-1">
          <input type="text" placeholder="ИМЯ" />
          <input type="text" placeholder="ИМЯ" />
          <input type="text" placeholder="ИМЯ" />
        </div>
      </div>
    </div>
    <myFooter big=""/>
  </div>
</template>

<script>
import contFirst from '@/components/sections/contFirst.vue'
import myFooter from '@/components/sections/footer.vue'
import secTitle from '@/components/secTitle.vue'

export default {
  name: 'Contacts',
  components: {
    contFirst,
    myFooter,
    secTitle

  }
}
</script>
