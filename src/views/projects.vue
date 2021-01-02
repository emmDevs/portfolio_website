<template>
  <div>
      <nav-bar></nav-bar>
      <p>This will have all my projects</p>
      <foot-note></foot-note>
  </div>
</template>

<script>

import header from '../components/header.vue'
import footer from '../components/footer.vue'

export default {
    name: 'projects',
    components: {
        'nav-bar': header,
        'foot-note': footer
    }

}
</script>

<style>

</style>