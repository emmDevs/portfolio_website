<template>
  <div>
      <nav-bar></nav-bar>
      <div class="parent-container">
      <p>projects will go here</p>
        <!-- <video width="320" height="240" controls >
            <source src="@/assets/PokeVue.mov"> -->
        <!-- </video> -->
        </div>
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