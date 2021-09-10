<template>
  <div class="overflow-hidden">
    <contFirst/>
    <myMarquee :addClass="'z-1  lent_gray'" />
    <div class="bg_g p-t-100 p-b-200">
      <secTitle :title="($store.state.langEn) ? ('[ contact us ];') : ('[ напиши нам ];')" :addClass='"m-b-150"' />
      <div class="row">
        <div class="col-lg-9 offset-lg-1 col-22 offset-1">
          <div class="d-flex flex-column">
            <a href="mailto:info@ava-digital.ru" class="h9 showText showText_b m-b-10 ttu"
              ><span class="h9 ttu ">[&nbsp;info@ava-digital.ru&nbsp;];<span class="h9">[&nbsp;info@ava-digital.ru&nbsp;];</span> </span></a
            >
            <a href="tel:+78129062232" class="h9 showText showText_b m-b-10 ttu"
              ><span class="h9 ttu ">[&nbsp;+7 812 906 - 22 - 32&nbsp;];<span class="h9">[&nbsp;+7 812 906 - 22 - 32&nbsp;];</span> </span></a
            >
            <p class="h9 m-b-80 ttu">{{($store.state.langEn) ? ('[ St. Petersburg ];') : ('[ Санкт-Петербург ];')}}</p>
            <p class="h9"></p>
            <a href="https://www.behance.net/avadigital" class="h9 showText showText_b m-b-10 ttu" target="_blank"> <span class="h9 ttu ">[&nbsp;Behance&nbsp;];<span class="h9">[&nbsp;Behance&nbsp;];</span> </span></a>
            <a href="https://www.facebook.com/we.are.ava.digital/" class="h9 showText showText_b m-b-10 ttu" target="_blank"><span class="h9 ttu ">[&nbsp;Facebook&nbsp;];<span class="h9">[&nbsp;Facebook&nbsp;];</span> </span></a>
            <a href="https://www.instagram.com/we_are_ava_digital/" class="h9 showText showText_b m-b-10 ttu" target="_blank"><span class="h9 ttu ">[&nbsp;Instagram&nbsp;];<span class="h9">[&nbsp;Instagram&nbsp;];</span> </span></a>
            <a href="https://vk.com/avrora_digital" class="h9 showText showText_b m-b-200 ttu" target="_blank"><span class="h9 ttu ">[&nbsp;VK&nbsp;];<span class="h9">[&nbsp;VK&nbsp;];</span> </span></a>
          </div>
        </div>
        <div class="col-lg-12 offset-lg-1 col-22 offset-1">
            <div class="form-wrapper">
              <p class="form-sent p1" v-if="sent">{{($store.state.langEn)?'[ Message sent ]':'[ Сообщение отправлено ]'}}</p>
              <form id="formapp" @submit="checkForm">
                <div>
                  <input id="your-number" :placeholder="($store.state.langEn) ? ('[ Phone ]*') : ('[ Телефон ]*')" v-model="number" onkeyup="this.value = this.value.replace(/[^0-9_-_+()/-]/g,'');" type="text" name="your-number">
                </div>
                  <input id="your-name" :placeholder="($store.state.langEn) ? ('[ Name ]') : ('[ Имя ]')" v-model="name" type="text" name="your-name">
                <div>
                </div>
                <div>
                  <input id="your-email" :placeholder="($store.state.langEn) ? ('[ Email ]*') : ('[ Email ]*')" v-model="email" type="text" name="your-email" min="0">
                </div>
                <div>
                  <input id="your-message" :placeholder="($store.state.langEn) ? ('[ Question ]') : ('[ Вопрос ]')" v-model="message" type="text" name="your-message" min="0">
                </div>

                <div class="m-t-100" >
                  <myButton
                    @click="checkForm" type="submit" value="Submit"
                    :text="
                      $store.state.langEn ? '[ send ]' : '[ отправить ]'
                    "
                    :myStyle="'button_blackGr'"
                  />
                </div>
                 <div class="p-t-40" v-if="errors.length">
                  <!-- <b>Please correct the following error(s):</b> -->
                  <ul>
                    <li class="p1" v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
    <myFooter big=""/>
  </div>
</template>

<script>
import axios from 'axios'
import myMarquee from '@/components/myMarquee.vue'
import contFirst from '@/components/sections/contFirst.vue'
import myFooter from '@/components/sections/footer.vue'
import secTitle from '@/components/secTitle.vue'
import myButton from '@/components/myButton.vue'
export default {
  name: 'Contacts',
  components: {
    contFirst,
    myFooter,
    secTitle,
    myButton,
    myMarquee
  },
  data () {
    return {
      sent: false,
      errors: [],
      name: null,
      email: null,
      number: null,
      message: null
    }
  },
  methods: {
    validEmail: function (email) {
      // eslint-disable-next-line no-useless-escape
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    checkForm: function (e) {
      e.preventDefault()
      this.errors = []

      if (!this.email) {
        this.errors.push((this.$store.state.langEn) ? 'Email required' : 'Введите Email')
      } else if (!this.validEmail(this.email)) {
        this.errors.push((this.$store.state.langEn) ? 'Valid email required' : 'Email некоректный')
      }
      if (!this.number) {
        this.errors.push((this.$store.state.langEn) ? 'Number required' : 'Введите телефон')
      }
      if (this.errors.length) { this.sent = false }
      if (!this.errors.length) {
        var bodyFormData = new FormData()
        bodyFormData.set('your-name', this.name)
        bodyFormData.set('your-email', this.email)
        bodyFormData.set('your-number', this.number)
        bodyFormData.set('your-message', this.message)

        axios({
          method: 'post',
          url:
            this.$store.state.linkAdmin + '/wp-json/contact-form-7/v1/contact-forms/1326/feedback',
          data: bodyFormData,
          config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
          .then(() => {
            // console.log(response)
            this.succesMess()
            return true
          })
          .catch(function (response) {
            // console.log(response)
          })
      }
    },
    succesMess: function () {
      // console.log('succesMess')
      this.sent = true
    }
  },
  mounted () {
    this.$store.commit('hideMenu')
  }

}
</script>
