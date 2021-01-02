<template>
  
  <nav>
    <nav-bar></nav-bar>
      <p>Emma Hack</p>
      <p>Software</p>
      <p>Developer</p>
      <img class="photo" src="@/assets/IMG_2876.jpeg">
    <foot-note></foot-note>
  </nav>
</template>

<script>
import navBar from '../components/header.vue'
import footNote from '../components/footer.vue'


export default {
  components: {
    'nav-bar': navBar,
    'foot-note': footNote
  }
    
}
</script>

<style>
.photo {
  height: 500px;
  width: 500px
}

</style>