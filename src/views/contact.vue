<template>
  <div>
      <div class="parent-container">
      <p>Contact Details Here</p>
      </div>
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