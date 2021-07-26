<template>
    <div class="bg_w parWrap p-t-200 p-b-200">
      <div class="row p-b-200">
        <div class="col-22 offset-1">
            <div class="par" >
              <span class="h3 text-center" >ava-digital</span>
              <span class="h3 text-center" >ava-digital</span>
              <span class="h3 text-center" >ava-digital</span>
              <span class="h3 text-center" >ava-digital</span>
              <span class="h3 text-center" >ava-digital</span>
              <span class="h3 text-center" >ava-digital</span>
              <span class="h3 text-center" >ava-digital</span>
              <span class="h3 text-center" >ava-digital</span>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
// import { gsap, TweenLite } from 'gsap/all'

export default {
  data () {
    return {
      name: 'aNamePar',
      props: {
        // msg: String
      }
    }
  },
  // methods(){},
  mounted () {
    // console.log('Прив1')
    var checkScrollSpeed = (function () {
      var lastPos; var newPos; var timer; var delta
      var delay = 32
      function clear () {
        lastPos = null
        delta = 0
      }
      clear()
      return function () {
        newPos = window.scrollY
        if (lastPos != null) {
          delta = newPos - lastPos
        }
        lastPos = newPos
        clearTimeout(timer)
        timer = setTimeout(clear, delay)
        return delta
      }
    })()

    function pamalax () {
      let el = document.querySelectorAll('.par span')
      el = Array.from(el).reverse()
      let show = false
      setInterval(() => {
        let transformY = checkScrollSpeed()
        if (show) {
          // console.log(transformY)
          if (transformY > 7) {
            transformY = 7
          } else if (transformY < -7) {
            transformY = -7
          }
          el.forEach((element, key) => {
            element.style.transform = 'translateY(' + -transformY * 20 * key / 8 + 'px)'
          })
        }
        (!transformY) ? show = true : show = false
      }, 32)
    }
    pamalax()
  },
  unmounted () {
    console.log('Пока1')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.parWrap{
  width: 100%;
}
.par{
  position: relative;
  width: 100%;
    span{
    width: 100%;
    font-size:160px;
    font-family:Helvetica;
    position: absolute;
    top: 0;
    left: 0;
    color: #ECE8ED;
    transition:0.5s ease-out ;
    text-shadow: 2px 0 0 #E10F1C, -2px 0 0 #E10F1C, 0 2px 0 #E10F1C, 0 -2px 0 #E10F1C, 1px 1px #E10F1C, -1px -1px 0 #E10F1C, 1px -1px 0 #E10F1C, -1px 1px 0 #E10F1C;
  }
  span:last-of-type{
    text-shadow: 2px 0 0 #262626, -2px 0 0 #262626, 0 2px 0 #262626, 0 -2px 0 #262626, 1px 1px #262626, -1px -1px 0 #262626, 1px -1px 0 #262626, -1px 1px 0 #262626;
  }
}

</style>
