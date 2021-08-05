<template>
  <div class="row" :class="addClass">
    <div class="col-22 offset-1">
      <div class="secTitle">
        <p class="p1 ttu mp0">{{ title }}</p>
        <div class="secTitle__circle"></div>
      </div>
    </div>
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
  props: ['addClass', 'title'],

  methods: {

  },
  mounted () {

  },
  unmounted () {

  }
}
</script>

<style scoped lang="scss">
  .secTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 10px 20px;
    border-top: 1px solid currentColor;
    border-right: 1px solid currentColor;
    border-left: 1px solid currentColor;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    &__circle{
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: currentColor;
      transition: 0.3s;
      &:hover{
        background-color: #E10F1C;
      }
    }
  }
</style>
