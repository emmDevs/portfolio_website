<template>
  <div>
  <router-view></router-view>
  </div>
</template>

<script>

import navBar from './components/header.vue'
import home from './views/home.vue'
import footNote from './components/footer.vue'
import about from './views/about.vue'
import projects from './views/projects.vue'
import contact from './views/contact.vue'

export default {
  name: 'app',
  data (){},
  mounted (){},
  components: {
    'nav-bar': navBar,
    'home': home,
    'foot-note': footNote,
    'about': about,
    'projects': projects,
    'contact': contact
  }

}
</script>

<style>
body{
  margin: 0;
  background-color: #484848;
}

</style>
