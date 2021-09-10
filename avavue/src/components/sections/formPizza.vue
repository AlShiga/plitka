<template>
  <div class="p-t-150 p-b-200">
    <div class="row">
      <div class=" offset-lg-9 col-lg-11 offset-md-5 col-md-18 col-22 offset-1">
        <div class="form-wrapper">
          <p class="form-sent p1" v-if="sent">{{($store.state.langEn)?'[ Message sent ]':'[ Сообщение отправлено ]'}}</p>
          <form id="formapp" @submit="checkForm">
            <div>
              <input id="your-name" :placeholder="($store.state.langEn) ? ('[ Name ]*') : ('[ Имя ]')" v-model="name" type="text" name="your-name">
            </div>
            <div>
              <input id="your-email" :placeholder="($store.state.langEn) ? ('[ Email ]*') : ('[ Email ]*')" v-model="email" type="text" name="your-email" min="0">
            </div>
            <div>
              <input id="your-message" :placeholder="($store.state.langEn) ? ('[ Message ]') : ('[ Вопрос ]')" v-model="message" type="text" name="your-message" min="0">
            </div>
            <div>
              <input id="your-number" :placeholder="($store.state.langEn) ? ('[ Phone ]*') : ('[ Телефон ]*')" v-model="number" onkeyup="this.value = this.value.replace(/[^0-9_-_+()/-]/g,'');" type="text" name="your-number">
            </div>

            <captchaPizza/>
            <div class="p-t-40" v-if="errors.length">
              <!-- <b>Please correct the following error(s):</b> -->
              <ul>
                <li class="p1" v-for="(error, index) in errors" :key="index">{{ error }}</li>
              </ul>
            </div>
            <div class="p-t-80">
              <myButton
                @click="checkForm" type="submit" value="Submit"
                :text="
                  $store.state.langEn ? '[ send ]' : '[ отправить ]'
                "
                :myStyle="'button_black'"
              />
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import captchaPizza from '@/components/captchaPizza.vue'
import myButton from '@/components/myButton.vue'
import axios from 'axios'
export default {
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
  components: {
    captchaPizza,
    myButton
  },
  props: {
    // msg: String
  },
  // methods(){},

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
        this.errors.push((this.$store.state.langEn) ? 'Name required' : 'Введите имя')
      }
      if (!this.email) {
        this.errors.push((this.$store.state.langEn) ? 'Email required' : 'Введите Email')
      } else if (!this.validEmail(this.email)) {
        this.errors.push((this.$store.state.langEn) ? 'Valid email required' : 'Email некоректный')
      }
      if (!this.number) {
        this.errors.push((this.$store.state.langEn) ? 'Number required' : 'Введите телефон')
      }
      if (!this.$store.state.captcha) {
        this.errors.push((this.$store.state.langEn) ? 'Eat pizza' : 'Съешь пиццу')
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
          // .catch(function (response) {
          //   // console.log(response)
          // })
      }
    },
    succesMess: function () {
      // console.log('succesMess')
      this.sent = true
    }
  },
  mounted () {
  },
  unmounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
