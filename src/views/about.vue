<template>
  <div>
      <nav-bar></nav-bar>
      <p>test- this will be all about me!</p>
      <foot-note></foot-note>
  </div>
</template>

<script>

import header from '../components/header.vue'
import footer from '../components/footer.vue'

export default {
    name: 'about',
    components: {
        'nav-bar': header,
        'foot-note': footer
    }

}
</script>

<style>

</style>