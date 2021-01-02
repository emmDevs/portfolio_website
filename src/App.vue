<template>
  <router-view></router-view>
</template>

<script>

import header from './components/header.vue'
import home from './views/home.vue'
import footer from './components/footer.vue'
import about from './views/about.vue'

export default {
  name: 'app',
  data (){},
  mounted (){},
  components: {
    'nav-bar': header,
    'home': home,
    'foot-note': footer,
    'about': about
  }

}
</script>

<style>

</style>
