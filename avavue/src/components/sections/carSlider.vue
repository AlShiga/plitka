<template>
    <div class="bg_r p-t-100 p-b-200">
      <secTitle :title='"[ Super puper cool team ];"' :addClass='"m-b-100"' />

      <div class="row">
        <div class="offset-1 col-23">
          <swiper
            :slidesPerView="'auto'"
            :space-between="30"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="galItem in gal"  :key="galItem.nameEN">
              <div class="polarImg">
                <img :src="galItem.img" alt="" class="w-100 m-b-10">
                <p v-if="$store.state.langEn" class="p1 ttu">{{galItem.nameEN}}</p>
                <p v-else class="p1 ttu">{{galItem.name}}</p>
                <p v-if="$store.state.langEn" class="p1 ttu gray">{{galItem.detEN}}</p>
                <p v-else class="p1 ttu gray">{{galItem.det}}</p>
              </div>
            </swiper-slide>

          </swiper>
        </div>
      </div>

    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import secTitle from '@/components/secTitle.vue'

// Import Swiper styles
import 'swiper/swiper.scss'
export default {
  data () {
    return {
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    secTitle
  },
  props: ['gal'],
  methods: {
    scrollAnimation () {}
  },
  mounted () {

  },
  unmounted () {
  }
}
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 35% !important;
}

.swiper-slide:nth-child(2n) {
  width: 25% !important;
}

.swiper-slide:nth-child(3n) {
  width: 20% !important;
}
@media (max-width: 1449.98px) {
.swiper-slide {
  width: 35% !important;
}

.swiper-slide:nth-child(2n) {
  width: 25% !important;
}

.swiper-slide:nth-child(3n) {
  width: 20% !important;
}
}
@media (max-width: 1024.98px) {
.swiper-slide {
  width: 55% !important;
}

.swiper-slide:nth-child(2n) {
  width: 45% !important;
}

.swiper-slide:nth-child(3n) {
  width: 40% !important;
}
}
@media (max-width: 767.98px) {
.swiper-slide {
  width: 80% !important;
}

}
.polarImg{
  width: 100%;
  color: #000;
  background-color: #f8f8f8;
  padding: 10px 10px 10px 10px;
  text-align: left;
}
</style>
