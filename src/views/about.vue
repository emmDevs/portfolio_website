<template>
  <div>
      <nav-bar></nav-bar>
      <p>I am a creative person who is calm under pressure. Passionate about learning, puzzles and finding out how things work. I have a drive and thirst to further my own development. This has led to a career change into Software Development, where I am excited to use my new skills alongside ones I've been honing for years and become a valuable member of a friendly and forward looking team.</p>
      <p>In March 2020 I started to teach myself some programming, when I realised that I loved it I enrolled in Codeclans intensive 16 week Professional Software Development Course.</p>
      <p>I have spent the last 2 months blogging about my experiences on the course - read about my adventures here - www.myroadtocode.co.uk </p>
      <foot-note></foot-note>
  </div>
</template>

<script>

import navBar from '../components/header.vue'
import footNote from '../components/footer.vue'

export default {
    name: 'about',
    components: {
        'nav-bar': navBar,
        'foot-note': footNote
    }

}
</script>

<style>

</style>