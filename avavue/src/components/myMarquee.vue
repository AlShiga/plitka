<template>
  <div class="marquee" :class="addClass" ></div>
</template>

<script>
import { Marquee, loop } from 'dynamic-marquee'

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
    // console.log(this.$el)

    const rate = 40 + Math.random() * 40
    const marquee = new Marquee(this.$el, { rate: rate })
    loop(
      marquee,
      [
        () => 'Хей! Бұл цифрлық ава',
        () => 'Hallo! Dies ist ava digital',
        () => '¡Hola! Esto es ava digital',
        () => 'Hej! To jest ava digital',
        () => 'Привет! Это ава-диджитал'
      ],
      () => {
        const separator = document.createElement('div')
        separator.innerHTML = `&nbsp;&nbsp;<svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 14.1011L19.285 13.6824L23.6105 9.13686L22.254 7.86004L17.4055 11.9204L16.9588 0H15.0412L14.5945 11.9204L9.746 7.86004L8.38953 9.13686L12.715 13.6824L0 14.1011V15.8989L12.715 16.3177L8.38953 20.8631L9.746 22.1349L14.5945 18.0797L15.0412 30H16.9588L17.4055 18.0797L22.254 22.1349L23.6105 20.8631L19.285 16.3177L32 15.8989V14.1011Z" fill="#F8F8F8"/></svg>&nbsp;&nbsp;`
        return separator
      }
    )
  },
  unmounted () {

  }
}
</script>

<style scoped lang="scss">
.marquee {
  display: block;
  width: 120%;
  position: relative;
  transform: translateX(-10%);
  overflow: hidden;
  margin: 0;
  padding: 7px 0;
  font-size: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #c80000;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
  color: #f8f8f8;
  font-family: Twentytwelve, sans-serif;
  &_gray{
    background-color: gray;
  }
  &_rotate{
    transform: translateX(-10%) rotate(-6deg);
    transform-origin: center;
  }
  & div{
    font-family: Twentytwelve, sans-serif !important;
    display: flex !important;
    align-items: center !important;
    font-style: normal;
    font-weight: normal;
    line-height: 90%;
  }
 }

</style>
