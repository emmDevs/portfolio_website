<template>
  <div>
      <div class="parent-container">
      <div class="A">
      <video width="320" height="240" controls >
            <source src="@/assets/PokeVue .mp4">
        </video>
        </div>
        <div class="B">
          <p> All the blurb about PokeVue</p>
        </div>
        <div class="C">
        <video width="320" height="240" controls >
            <source src="@/assets/OnTopOfTheWorld.mp4">
        </video>
        </div>
        <div class="D">
          <p>All the blurb about On Top Of The World</p>
        </div>
        </div>
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

.parent-container{
  display: grid;
  max-width: 90%;
  margin: 1rem auto;
  grid-template-areas: "A A B B"
                      "C C D D";
  grid-column-gap: 2rem;
}

.A{
  grid-area: A;
}

.B{
  grid-area: B;
}

.C{
  grid-area: C;
}

.D{
  grid-area: D;
}

</style>