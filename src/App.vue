<template>
  <router-view></router-view>
</template>

<script>

import header from './components/header.vue'
import home from './views/home.vue'
import footer from './components/footer.vue'
import about from './views/about.vue'
import projects from './views/projects.vue'

export default {
  name: 'app',
  data (){},
  mounted (){},
  components: {
    'nav-bar': header,
    'home': home,
    'foot-note': footer,
    'about': about,
    'projects': projects
  }

}
</script>

<style>

</style>
