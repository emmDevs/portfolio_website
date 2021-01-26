<template>
  <div>
    <nav-bar class="nav-bar"></nav-bar>
    <router-view class="main-container"></router-view>
    <foot-note></foot-note>
  </div>
</template>

<script>

import navBar from './components/Header.vue'
import home from './views/Home.vue'
import footNote from './components/Footer.vue'
import about from './views/About.vue'
import projects from './views/Projects.vue'

export default {
  name: 'app',
  components: {
    'nav-bar': navBar,
    'home': home,
    'foot-note': footNote,
    'about': about,
    'projects': projects,
    
  }

}
</script>

<style>

body{
    background-color:#484848;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  @media (min-width: 768px){
  
  
  
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
