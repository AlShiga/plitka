<template>
  <div class="overflow-hidden bg_g">
    <div class="form">
      <transition-group name="fade" mode="out-in">
      <div v-if="page==1&&!sent" class="form__step">
        <div class="col-20 offset-2">
          <h6 class="h6 p-t-150 p-b-100">
            {{($store.state.langEn)?'What is the status of the project now?':'Есть сайт или создаем с нуля?'}}
          </h6>
          <div class="form__buttonWrap">
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ New project ]':'[ Новый сайт ]'" />
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ existing project ]':'[ Редизайн ]'" />
          </div>
        </div>
      </div>
      <div v-else-if="page==2&&!sent" class="form__step">
        <div class="col-20 offset-2">
          <h6 class="h6 p-t-150 p-b-100">{{($store.state.langEn)?'Choose the type of your project:':'Какой тип сайта?'}}</h6>
          <div class="form__buttonWrap">
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ landing page ]':'[ Одностраничник ]'" />
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ PROMO SITE ]':'[ Промо сайт ]'" />
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ ONLINE STORE ]':'[ Магазин ]'" />
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ OTHER ]':'[ Другое ]'" />
          </div>
        </div>
      </div>
      <div v-else-if="page==3&&!sent" class="form__step">
        <div class="col-20 offset-2">
          <h6 class="h6 p-t-150 p-b-100">{{($store.state.langEn)?'When are you ready to start?':'Когда готовы начать?'}}</h6>
          <div class="form__buttonWrap">
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ immediately ]':'[ сейчас ]'" />
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ in a week ]':'[ на неделе ]'" />
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ within a month ]':'[ через месяц ]'" />
          </div>
        </div>
      </div>
      <div v-else-if="page==4&&!sent" class="form__step">
        <div class="col-20 offset-2">
          <h6 class="h6 p-t-150 p-b-100">{{($store.state.langEn)?'What is the project budget?':'Какой ваш бюджет на разработку?'}}</h6>
          <div class="form__buttonWrap">
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ < 3.000&nbsp;$ ]':'[ < 200.000&nbsp;&#8381; ]'" />
            <myButton
              @click.stop="addAnswer"
              :text="($store.state.langEn)?'[  3.000 - 8.000&nbsp;$ ]':'[ 200.000 - 500.000&nbsp;&#8381; ]'"
            />
            <myButton @click.stop="addAnswer" :text="($store.state.langEn)?'[ > 8.000&nbsp;$ ]':'[ > 500.000&nbsp;&#8381; ]'" />
          </div>
        </div>
      </div>
      <div v-else-if="page==5&&!sent" class="form__step p-t-200">
        <div class="col-20 offset-2">
            <div class="form-wrapper p-t-200">
              <p class="form-sent p1" v-if="sent">{{($store.state.langEn)?'Message sent':'Сообщение отправлено'}}</p>
              <form id="formapp" @submit="checkForm">
                <div>
                  <input id="your-name" :placeholder="($store.state.langEn) ? ('[ Name ]') : ('[ Имя ]')" v-model="name" type="text" name="your-name">
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

                <div class="m-t-100 m-b-100" >
                  <!-- <input type="submit" value="Submit"> -->
                  <!-- <button class="btn2" type="submit" value="Submit">Send</button> -->
                    <myButton
                      @click="checkForm" type="submit" value="Submit"
                      :text="
                        $store.state.langEn ? '[ send ]' : '[ отправить ]'
                      "
                      :style="'button_black'"
                    />
                </div>
                 <div class="p-t-40 p-b-40" v-if="errors.length">
                  <!-- <b>Please correct the following error(s):</b> -->
                  <ul>
                    <li class="p1" v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </ul>
                </div>
              </form>
            </div>
        </div>
      </div>
      <div v-if="sent" class="form__step p-t-200 p-b-40">
        <div class="col-20 offset-2">
          <h2 class="h6 p-b-40">{{($store.state.langEn) ? ('thanks!') : ('спасибо!')}}</h2>
          <p class="p1 d-block p-b-80">
            {{($store.state.langEn) ? ('We will consider your application and will contact you soon.') : ('Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время.')}}
          </p>
            <myButton
              @click="$router.push('/')"
              :text="
                $store.state.langEn ? '[ Finish ]' : '[ На главную ]'
              "
            />
        </div>
      </div>
      </transition-group>
      <div class="form__count z-1">

      </div>
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
      // console.log(e.target.outerText)
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
        bodyFormData.set('your-message', this.message + '||' + this.answer.toString())

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
    this.init()
    this.moveCount()
    this.$store.commit('hideMenu')
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
    padding-top: 100px;
    @media (max-width: 767px) {
      padding-top: 200px;
    }
  }
  &__buttonWrap {
    display: flex;
    flex-wrap: wrap;
    .button{
      margin-right: 40px;
      margin-bottom: 40px;
    }
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
