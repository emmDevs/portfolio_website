<template>
  <div>
      <div class="parent-container">
      <div class="A">
        <h3 class="title">PokeVue</h3>
      <video width="320" height="240" controls >
            <source src="@/assets/PokeVue .mp4">
        </video>
        </div>
        <div class="Bproject">
          <h4>The Brief</h4>
          <p>Create a browser game based on an existing card or dice game. Model and test the game logic and then display it in the browser for a user to interact with. <p>
          <h4>The Tech Stack</h4>  
          <ul>
            <li>Javascript ES6</li>
            <li>Vue.js</li>
            <li>Mongo database</li>
            <li>Express Server</li>
            <li>3rd party API</li>
            <li>Node Package Manager</li>
            <li>Google Charts Library</li>
          </ul>
          <p>This was a group project that was planned in an Agile method and written collaboratively over a 6 day period.
</p>
        <a href="https://github.com/emmDevs/pokeJson.git" style="color:black">GitHub Link to Repo</a>
        </div>
        <div class="C">
        <h3 class="title">On Top Of The World</h3>
        <video width="320" height="240" controls >
            <source src="@/assets/OnTopOfTheWorld.mp4">
        </video>
        </div>
        <div class="Dproject">
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
          <a href="https://github.com/emmDevs/on_top_of_the_world.git" style="color: black">Github Link to Repo</a>
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
  text-align: center;
  margin-left: 15px;
}

.Bproject > ul > li{
  list-style: none;
  margin-right: 25px;
}

.Dproject{
  margin-bottom: 50px;
}

.Dproject > ul > li{
  list-style: none;
  margin-right: 25px;
}

.title{
  margin-bottom: 0;
  margin-top: 36px;
}

@media (min-width: 1080px){

.main-container{
  display: grid;
  max-width: 90%;
  margin: 1rem auto;
  grid-template-areas: "A A B B"
                      "C C D D";
  grid-column-gap: 2rem;
  padding-top: 50px;
}

.A{
  grid-area: A;
}

.Bproject{
  grid-area: B;
  padding-left: 150px;
  margin-left: 50px;
}

.C{
  grid-area: C;
  padding-top: 80px;
}

.Dproject{
  grid-area: D;
  padding-left: 150px;
  padding-top: 80px;
}

.title{
  text-align: center;
}
}

</style>