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
import header from '../components/header.vue'
import footer from '../components/footer.vue'


export default {
  components: {
    'nav-bar': header,
    'foot-note': footer
  }
    
}
</script>

<style>
.photo {
  height: 500px;
  width: 500px
}

</style>