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
          <input placeholder="[ phone ]" type="text" />
          <input placeholder="[ Name ]" type="text" />
          <input placeholder="[ email ]" type="text" />
          <input placeholder="[ site ]" type="text" />
          <div class="form__buttonWrap">
            <myButton @click="sendMessage" :text="'[ SEnd ]'" />
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

export default {
  data () {
    return {
      answer: [],
      page: 1,
      pageAll: 5
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
