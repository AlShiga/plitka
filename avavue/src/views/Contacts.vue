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
          <!-- <input type="text" placeholder="ИМЯ" />
          <input type="text" placeholder="ИМЯ" />
          <input type="text" placeholder="ИМЯ" /> -->

            <div class="form-wrapper">
              <p class="form-sent p1" v-if="sent">Сообщение отправлено</p>
              <form id="formapp" @submit="checkForm">
                <div>
                  <input id="your-name" placeholder="Name" v-model="name" type="text" name="your-name">
                </div>
                <div>
                  <input id="your-email" placeholder="Email" v-model="email" type="text" name="your-email" min="0">
                </div>
                <div>
                  <input id="your-message" placeholder="Message" v-model="message" type="text" name="your-message" min="0">
                </div>
                <div>
                  <input id="your-number" placeholder="Phone" v-model="number" type="number" name="your-number">
                </div>

                <div>
                  <!-- <input type="submit" value="Submit"> -->
                  <!-- <button class="btn2" type="submit" value="Submit">Send</button> -->
                    <myButton
                      @click="checkForm" type="submit" value="Submit"
                      :text="
                        $store.state.langEn ? '[ send ]' : '[ отправить ]'
                      "
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
    myButton
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

      if (!this.name) {
        this.errors.push('Name required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.number) {
        this.errors.push('Number required.')
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
            'https://ava.avadev.ru/wp-json/contact-form-7/v1/contact-forms/32/feedback',
          data: bodyFormData,
          config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
          .then(() => {
            // console.log(response)
            this.succesMess()
            return true
          })
          .catch(function (response) {
            console.log(response)
          })
      }
    },
    succesMess: function () {
      console.log('succesMess')
      this.sent = true
    }
  },
  mounted () {
    this.$store.commit('hideMenu')
  }

}
</script>
