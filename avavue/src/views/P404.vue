<template>
 <div class="overflow-hidden">
  <div class="p404">
    <div class="p404__content">
      <div class="p404__button"><span class="h7">404</span></div>
      <div class="p404__button"><span class="h7">what are you doing here?</span>
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0V4.52631C1 10.0492 5.47715 14.5263 11 14.5263H28M28 14.5263L19.1406 6.65789M28 14.5263L19.1406 23" stroke="#F8F8F8" stroke-width="2"/>
        </svg>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import formPizza from '@/components/sections/formPizza.vue'

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style lang="scss" scoped>
.p404{
  width:  100%;
  height: 100vh;
  background-image: url(~@/assets/img/p404.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  &__content{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;

  }
  &__button{
    display: flex;align-items: center;
    border: 1px solid #f8f8f8;
    border-radius: 100px;
    padding: 20px 40px;
    margin-right: 40px;
    margin-bottom: 20px;
    svg{
      margin-left: 10px;
    }
  }
}
  @media (max-width: 1449.98px) {

  }

  @media (max-width: 1024.98px) {

  }

  @media (max-width: 767.98px) {

  }

</style>
