<template>
<div class="capPizza bg_w">
  <!-- <p class="h7 ttu text-center">to send your resume - eat pizza</p>
  <p class="h7 ttu text-center">we will check</p> -->
  <div class="">
    <div v-if="!play" v-on:click="start()"  class="capPizza__first">
      <p class="h8 text-center p-b-40">
        To send your resume - eat pizza<br>
        we will check!
      </p>
      <img src="~@/assets/img/pizza/1.png" alt="" class="capPizza__firstImg">
    </div>

    <div v-else class="capPizza__main">
      <div class="capPizza__progress"></div>
      <div v-if="stage=='start'" class="capPizza__start">
          <p class="h8">{{ startText }}</p>
      </div>
      <div v-on:click="restart()" v-if="stage=='end'" class="capPizza__start capPizza__end">
          <p class="h8">{{ endText }}</p>
      </div>
      <div class="capPizza__mainPizza">
        <div class="">
          <div v-on:click="bite('bite1')" class="capPizza__mainPiece capPizza__mainPiece_1">
            <img v-show="count.bite1===0" src="~@/assets/img/pizza/1.png" alt="" class="">
            <img v-show="count.bite1===1" src="~@/assets/img/pizza/2.png" alt="" class="">
            <img v-show="count.bite1===2" src="~@/assets/img/pizza/3.png" alt="" class="">
            <img v-show="count.bite1===3" src="~@/assets/img/pizza/4.png" alt="" class="">
          </div>
          <div v-on:click="bite('bite2')" class="capPizza__mainPiece capPizza__mainPiece_2">
            <img v-show="count.bite2===0" src="~@/assets/img/pizza/1.png" alt="" class="">
            <img v-show="count.bite2===1" src="~@/assets/img/pizza/2.png" alt="" class="">
            <img v-show="count.bite2===2" src="~@/assets/img/pizza/3.png" alt="" class="">
            <img v-show="count.bite2===3" src="~@/assets/img/pizza/4.png" alt="" class="">
          </div>
          <div v-on:click="bite('bite3')" class="capPizza__mainPiece capPizza__mainPiece_3">
            <img v-show="count.bite3===0" src="~@/assets/img/pizza/1.png" alt="" class="">
            <img v-show="count.bite3===1" src="~@/assets/img/pizza/2.png" alt="" class="">
            <img v-show="count.bite3===2" src="~@/assets/img/pizza/3.png" alt="" class="">
            <img v-show="count.bite3===3" src="~@/assets/img/pizza/4.png" alt="" class="">
          </div>
          <div v-on:click="bite('bite4')" class="capPizza__mainPiece capPizza__mainPiece_4">
            <img v-show="count.bite4===0" src="~@/assets/img/pizza/1.png" alt="" class="">
            <img v-show="count.bite4===1" src="~@/assets/img/pizza/2.png" alt="" class="">
            <img v-show="count.bite4===2" src="~@/assets/img/pizza/3.png" alt="" class="">
            <img v-show="count.bite4===3" src="~@/assets/img/pizza/4.png" alt="" class="">
          </div>
          <div v-on:click="bite('bite5')" class="capPizza__mainPiece capPizza__mainPiece_5">
            <img v-show="count.bite5===0" src="~@/assets/img/pizza/1.png" alt="" class="">
            <img v-show="count.bite5===1" src="~@/assets/img/pizza/2.png" alt="" class="">
            <img v-show="count.bite5===2" src="~@/assets/img/pizza/3.png" alt="" class="">
            <img v-show="count.bite5===3" src="~@/assets/img/pizza/4.png" alt="" class="">
          </div>
          <div v-on:click="bite('bite6')" class="capPizza__mainPiece capPizza__mainPiece_6">
            <img v-show="count.bite6===0" src="~@/assets/img/pizza/1.png" alt="" class="">
            <img v-show="count.bite6===1" src="~@/assets/img/pizza/2.png" alt="" class="">
            <img v-show="count.bite6===2" src="~@/assets/img/pizza/3.png" alt="" class="">
            <img v-show="count.bite6===3" src="~@/assets/img/pizza/4.png" alt="" class="">
          </div>
          <div v-on:click="bite('bite7')" class="capPizza__mainPiece capPizza__mainPiece_7">
            <img v-show="count.bite7===0" src="~@/assets/img/pizza/1.png" alt="" class="">
            <img v-show="count.bite7===1" src="~@/assets/img/pizza/2.png" alt="" class="">
            <img v-show="count.bite7===2" src="~@/assets/img/pizza/3.png" alt="" class="">
            <img v-show="count.bite7===3" src="~@/assets/img/pizza/4.png" alt="" class="">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: [],
  data () {
    return {
      captcha: false,
      play: false,
      stage: 'start',
      count: {
        bite1: 0,
        bite2: 0,
        bite3: 0,
        bite4: 0,
        bite5: 0,
        bite6: 0,
        bite7: 0
      },
      startTextArr: ['3..', '2..', '1..', 'go!'],
      startText: '3..',
      endText: 'Good job! We will teach you how to eat pizza'
    }
  },
  methods: {
    bite: function (key) {
      if (this.count[key] < 3) {
        ++this.count[key]
      }
    },
    start: function () {
      this.play = true
      this.startText = this.startTextArr[0]
      setTimeout(() => {
        this.startText = this.startTextArr[1]
      }, 1000)
      setTimeout(() => {
        this.startText = this.startTextArr[2]
      }, 2000)
      setTimeout(() => {
        this.startText = this.startTextArr[3]
      }, 3000)
      setTimeout(() => {
        this.startText = this.startTextArr[4]
      }, 4000)
      setTimeout(() => {
        this.stage = 'play'
        document.querySelector('.capPizza__progress').classList.add('capPizza__progress_anim')
      }, 4100)
      setTimeout(() => {
        this.countPoints()
        if (this.count.bite1 + this.count.bite2 + this.count.bite3 + this.count.bite4 + this.count.bite5 + this.count.bite6 + this.count.bite7 < 10) {
          this.endText = 'Oh! We will teach you how to eat pizza'
        } else {
          this.endText = 'Good job! We will teach you how to eat pizza'
        }
        this.captcha = true
        this.stage = 'end'
      }, 9100)
      setTimeout(() => {
      }, 12000)
    },
    countPoints: function () {
      console.log(this.count.bite1 + this.count.bite2 + this.count.bite3 + this.count.bite4 + this.count.bite5 + this.count.bite6 + this.count.bite7)
    },
    restart: function () {
      this.count.bite1 = 0
      this.count.bite2 = 0
      this.count.bite3 = 0
      this.count.bite4 = 0
      this.count.bite5 = 0
      this.count.bite6 = 0
      this.count.bite7 = 0
      document.querySelector('.capPizza__progress').classList.remove('capPizza__progress_anim')

      this.start()
      this.stage = 'start'
    }

  },
  mounted () {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.capPizza{
  position: relative;
  overflow: hidden;
  &::before{
    content: "";
    display: block;
    padding-bottom: 40%;
  }
  &>div{
    position: absolute;
    top: 0;left: 0; bottom: 0;right: 0;
  }

  &__first{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__firstImg{
    transform: rotate(-215deg);
    width: 20%;
    min-width: 60px;
    height: auto;
  }
  &__main{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__mainPizza{
    position: relative;
    width: 30%;
  &::before{
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  &>div{
    position: absolute;
    top: 0;left: 0; bottom: 0;right: 0;
  }
  }
  &__mainPiece{
    position: absolute;
    bottom: 50%;
    left: 50%;
    width: 50%;
    height: auto;
    clip-path: polygon(90% 20%, 100% 100%, 0% 100%, 60% 0%);
    transform-origin: 0 100%;
    &:hover{
      opacity: 0.90;
    }
    & img{
      width: 100%;
      height: auto;
      pointer-events: none;
      user-select: none;
    }
    &_1{
      transform: rotate(360/7*1deg);
    }
    &_2{
      transform: rotate(360/7*2deg);
    }
    &_3{
      transform: rotate(360/7*3deg);
    }
    &_4{
      transform: rotate(360/7*4deg);
    }
    &_5{
      transform: rotate(360/7*5deg);
    }
    &_6{
      transform: rotate(360/7*6deg);
    }
  }
  &__start, &__end{
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    display: flex;
    align-items: center;justify-content: center;
    background-color: rgba($color: #ffffff, $alpha: 0.6);
    z-index: 1;
  }
  &__progress{
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 10px;
    background-color: red;
    transform: translateX(-101%);
    transition: 3s;
    &_anim{
      transform: translateX(0%);
      transition: 5s linear;
    }
  }
}
</style>
