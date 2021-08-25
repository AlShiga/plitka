<template>
  <div class="overflow-hidden bg_g">
    <div class="form">
      <transition name="fade" mode="out-in">
      <div v-if="page==1" class="form__step">
        <div class="col-20 offset-2">
          <h6 class="h6 p-t-150 p-b-100">
            what is the status of the project now?
          </h6>
          <div class="form__buttonWrap">
            <myButton @click.stop="addAnswer" :text="'[ New project ]'" />
            <myButton @click.stop="addAnswer" :text="'[ existing project ]'" />
          </div>
        </div>
      </div>
      <div v-else-if="page==2" class="form__step">
        <div class="col-20 offset-2">
          <h6 class="h6 p-t-150 p-b-100">choose the type of your project:</h6>
          <div class="form__buttonWrap">
            <myButton @click.stop="addAnswer" :text="'[ New project ]'" />
            <myButton @click.stop="addAnswer" :text="'[ PROMO SITE ]'" />
            <myButton @click.stop="addAnswer" :text="'[ ONLINE STORE ]'" />
            <myButton @click.stop="addAnswer" :text="'[ OTHER ]'" />
          </div>
        </div>
      </div>
      <div v-else-if="page==3" class="form__step">
        <div class="col-20 offset-2">
          <h6 class="h6 p-t-150 p-b-100">when are you ready to start?</h6>
          <div class="form__buttonWrap">
            <myButton @click.stop="addAnswer" :text="'[ immediately ]'" />
            <myButton @click.stop="addAnswer" :text="'[ in a week ]'" />
            <myButton @click.stop="addAnswer" :text="'[ within a month ]'" />
          </div>
        </div>
      </div>
      <div v-else-if="page==4" class="form__step">
        <div class="col-20 offset-2">
          <h6 class="h6 p-t-150 p-b-100">what is the project budget?</h6>
          <div class="form__buttonWrap">
            <myButton @click.stop="addAnswer" :text="'[ < 200.000 rub ]'" />
            <myButton
              @click.stop="addAnswer"
              :text="'[ 200.000 - 500.000 rub ]'"
            />
            <myButton @click.stop="addAnswer" :text="'[ > 500.000 rub  ]'" />
          </div>
        </div>
      </div>
      <div v-else-if="page==5" class="form__step">
        <div class="col-20 offset-2">
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
      </transition>
      <div class="form__count"></div>
    </div>
  </div>
</template>

<script>
import myButton from '@/components/myButton.vue'
import axios from 'axios'
export default {
  data () {
    return {
      answer: [],
      page: 1,
      pageAll: 5,
      sent: false,
      errors: [],
      name: null,
      email: null,
      number: null,
      message: null
    }
  },
  components: {
    myButton
  },
  methods: {
    init: function () {
      // this.pageAll = document.querySelectorAll('.form__step').length
    },
    addAnswer: function (e) {
      console.log(e.target.outerText)
      this.answer.push(e.target.outerText)
      this.nextQuestion()
      this.moveCount()
    },
    nextQuestion: function () {
      ++this.page
    },
    moveCount: function () {
      document.querySelector('.form__count').style.width = this.page / this.pageAll * 100 + '%'
    },
    sendMessage: function () {

    },
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
        bodyFormData.set('your-message', this.message + '||' + this.answer.toString())

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
    this.init()
    this.moveCount()
  }
}
</script>

<style lang="scss" scoped>
.form{
  &__step{
    display: flex;
    max-width: 1200px;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }
  &__buttonWrap {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.form__count{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 5px;
  background-color: red;
  transition: 0.3s;
}
</style>
