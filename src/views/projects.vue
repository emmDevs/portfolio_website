<template>
  <div>
      <div class="parent-container">
      <div class="A">
      <video width="320" height="240" controls >
            <source src="@/assets/PokeVue .mp4">
        </video>
        </div>
        <div class="B">
          <h3>PokeVue</h3>
          <h4>The Brief</h4>
          <p>Build an app that allows the user to track Countries and Cities they want to visit
            and those they have already visited. <p>
          <h4>The Tech Stack</h4>  
          <ul>
            <li>Python</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Flask</li>
            <li>PostgreSQL</li>
          </ul>
          <p>This was a group project that was planned and written over a 6 day period.
</p>
        <a href="https://github.com/emmDevs/pokeJson.git">GitHub Link to Repo</a>
        </div>
        <div class="C">
        <video width="320" height="240" controls >
            <source src="@/assets/OnTopOfTheWorld.mp4">
        </video>
        </div>
        <div class="D">
          <h3>On Top Of The World</h3>
          <h4>The Brief</h4>
          <p>Build an app that allows the user to track Countries and Cities they want to visit
            and those they have already visited. <p>
          <h4>The Tech Stack</h4>  
          <ul>
            <li>Python</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Flask</li>
            <li>PostgreSQL</li>
          </ul>
          <p>This was a solo project that was planned and written over a 6 day period.
</p>
          <a href="https://github.com/emmDevs/on_top_of_the_world.git">Github Link to Repo</a>
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