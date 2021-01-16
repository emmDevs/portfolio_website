<template>
  <div>
    <nav-bar class="nav-bar"></nav-bar>
  <router-view class="main-container">
  </router-view>
  <foot-note></foot-note>
  </div>
</template>

<script>

import navBar from './components/header.vue'
import home from './views/home.vue'
import footNote from './components/footer.vue'
import about from './views/about.vue'
import projects from './views/projects.vue'
// import contact from './views/contact.vue'

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
    // 'contact': contact
  }

}
</script>

<style>

body{
    background-color: hotpink;
  }

@media (min-width: 1080px){
body{
  margin: 0;
  background-color: #484848;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif
}

.main-container{
  height: auto;
}
}


  


</style>
