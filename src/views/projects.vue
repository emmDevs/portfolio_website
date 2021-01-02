<template>
  <div>
      <nav-bar></nav-bar>
        <!-- <video width="320" height="240" controls src="@/assets/PokeVue.mov"></video> -->
      <foot-note></foot-note>
  </div>
</template>

<script>

import navBar from '../components/header.vue'
import footNote from '../components/footer.vue'

export default {
    name: 'projects',
    components: {
        'nav-bar': navBar,
        'foot-note': footNote
    }

}
</script>

<style>

</style>