<template>
    <div class="noise"></div>
    <div class="header header_bottom m-t-20 p-t-20">
      <div class="header__border">
        <div class=""></div>
      </div>
      <div class="row">
        <div class="col-1 offset-1">
          <router-link to="/">
            <svg style="opacity: 0;" class="header__logo" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 18.8015L24.1062 18.2431L29.5131 12.1825L27.8175 10.4801L21.7569 15.8938L21.1985 0H18.8015L18.2431 15.8938L12.1825 10.4801L10.4869 12.1825L15.8938 18.2431L0 18.8015V21.1985L15.8938 21.7569L10.4869 27.8175L12.1825 29.5132L18.2431 24.1062L18.8015 40H21.1985L21.7569 24.1062L27.8175 29.5132L29.5131 27.8175L24.1062 21.7569L40 21.1985V18.8015Z" fill="#ED2330"/>
            </svg>
          </router-link>

        </div>
      </div>
    </div>
    <div class="header header_top m-t-20 p-t-20">
      <div class="row">
        <div class="col-1 offset-1">
          <router-link to="/">
            <svg class="header__logo" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 18.8015L24.1062 18.2431L29.5131 12.1825L27.8175 10.4801L21.7569 15.8938L21.1985 0H18.8015L18.2431 15.8938L12.1825 10.4801L10.4869 12.1825L15.8938 18.2431L0 18.8015V21.1985L15.8938 21.7569L10.4869 27.8175L12.1825 29.5132L18.2431 24.1062L18.8015 40H21.1985L21.7569 24.1062L27.8175 29.5132L29.5131 27.8175L24.1062 21.7569L40 21.1985V18.8015Z" fill="#ED2330"/>
            </svg>
          </router-link>
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
  props: {
    // msg: String
  },
  // methods(){},
  mounted () {
    console.log('Прив')
  },
  unmounted () {
    console.log('Пока')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
