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
import { gsap } from 'gsap/all'

export default {
  data () {
    return {
      name: 'aNamePar'

    }
  },
  // props: {
  //   // msg: String
  // },
  methods: {
    checkScrollSpeed: (function (settings) {
      settings = settings || {}
      var lastPos; var newPos; var timer; var delta
      var delay = settings.delay || 50 // in "ms" (higher means lower fidelity )

      function clear () {
        lastPos = null
        delta = 0
      }
      clear()
      return function () {
        newPos = window.scrollY
        if (lastPos != null) { // && newPos < maxScroll
          delta = newPos - lastPos
        }
        lastPos = newPos
        clearTimeout(timer)
        timer = setTimeout(clear, delay)
        return delta
      }
    })(),
    anim: function () {
      this.scr = ((this.scr * 5 + this.checkScrollSpeed()) / 6).toFixed(2)
      // if (scr < 9 && scr > -9) { scr = 0 }
      if (this.scr > this.maxScr) { this.maxScr = this.scr }
      if (-this.scr > this.maxScr) { this.maxScr = -this.scr }
      // x.textContent = scr + ' / ' + maxScr
      this.elem.forEach((el, key) => {
        const trNev = 100 * this.scr / this.maxScr * ((8 - (key + 1)) / 8)
        // tr.key = (tr.key * 16 + trNev) / 17
        // console.log(tr.key)
        el.style.transform = 'translateY(' + -trNev + '%)'
        el.style.transition = '0.2s'
        // gsap.to(el, { y: trNev + '%', ease: 'none' })
      })
    }
  },
  mounted () {
    // var checkScrollSpeed = (function (settings) {
    //   settings = settings || {}
    //   var lastPos; var newPos; var timer; var delta
    //   var delay = settings.delay || 50 // in "ms" (higher means lower fidelity )

    //   function clear () {
    //     lastPos = null
    //     delta = 0
    //   }
    //   clear()
    //   return function () {
    //     newPos = window.scrollY
    //     if (lastPos != null) { // && newPos < maxScroll
    //       delta = newPos - lastPos
    //     }
    //     lastPos = newPos
    //     clearTimeout(timer)
    //     timer = setTimeout(clear, delay)
    //     return delta
    //   }
    // })()
    this.elem = document.querySelectorAll('.par span')
    this.scr = 1
    this.maxScr = 1

    gsap.ticker.add(this.anim)
  },
  unmounted () {
    gsap.ticker.add(this.anim)
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
    white-space: nowrap;
    width: 100%;
    font-size:160px;
    font-family:Helvetica;
    position: absolute;
    top: 0;
    left: 0;
    color: #ECE8ED;
    transition:0.4s ease-in-out ;
    text-shadow: 2px 0 0 #E10F1C, -2px 0 0 #E10F1C, 0 2px 0 #E10F1C, 0 -2px 0 #E10F1C, 1px 1px #E10F1C, -1px -1px 0 #E10F1C, 1px -1px 0 #E10F1C, -1px 1px 0 #E10F1C;
  }
  span:last-of-type{
    text-shadow: 2px 0 0 #262626, -2px 0 0 #262626, 0 2px 0 #262626, 0 -2px 0 #262626, 1px 1px #262626, -1px -1px 0 #262626, 1px -1px 0 #262626, -1px 1px 0 #262626;
  }
}

</style>
