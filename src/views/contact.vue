<template>
  <div>
      <nav-bar></nav-bar>
      <div class="parent-container">
      <p>Contact Details Here</p>
      </div>
      <foot-note></foot-note>
  </div>
</template>

<script>

import navBar from '../components/header.vue'
import footNote from '../components/footer.vue'

export default {
    name: 'contact',
    components: {
        'nav-bar': navBar,
        'foot-note': footNote
    }

}
</script>

<style>

</style>