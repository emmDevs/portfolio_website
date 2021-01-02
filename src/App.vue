<template>
  <router-view></router-view>
</template>

<script>

import header from './components/header.vue'
import home from './views/home.vue'

export default {
  name: 'app',
  data (){},
  mounted (){},
  components: {
    'header': header,
    'home': home,
  }

}
</script>

<style>

</style>
