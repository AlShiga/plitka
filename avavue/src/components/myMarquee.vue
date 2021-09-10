<template>
  <div class="lent z-2" :class="addClass">
    <div class="lent__img"></div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  components: {

  },
  props: ['addClass'],
  // methods(){},

  methods: {
    scrollAnimation () {
    }
  },
  mounted () {
  },
  unmounted () {

  }
}
</script>

<style scoped lang="scss">
.lent{
    position: relative;
    width: 150%;
    padding: 30px 0;
    width: 200%;
    background-color:#E10F1C;
    border-top: 1px solid #F8F8F8;
    border-bottom: 1px solid #F8F8F8;
    transform: translateX(-20%);
    @media (max-width: 1449.98px) {
      padding: 25px 0;
    }
  &_gray{
    background-color:#424041;
  }
  &_rotate{
    transform-origin: center;
    transform: translateX(-15%) rotate(-10deg);
  }
  &__img{
    position: absolute;
    top: 20%;
    left: 0;
    width: 400%;
    height: 60%;
    animation: 160s linear  ;
    animation-name: lentAnim;
    animation-iteration-count: infinite;
    background-image: url(~@/assets/img/lent.png);
    background-size: contain;
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
    will-change:transform;
  }
}

@keyframes lentAnim {
  from {
    transform: translateX(0);
  }
 50%{
    transform: translateX(-70%);
 }
  to {
    transform: translateX(0);

  }
}

</style>
