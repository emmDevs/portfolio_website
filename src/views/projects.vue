<template>
  <div>
      <section class="parent-container">
        <div class="A">
          <h3 class="title">Shop Local</h3>
            <img class="A-Image" src="@/assets/Shop Local.png" alt="Homepage view of shop local website.">
        </div>
        <div class="Bproject">
          <h4>The Brief</h4>
            <p>Create an E-Commerce site for local businesses to display their services and offer an online booking and payment platform. <p>
              <h4>The Tech Stack</h4>  
                <ul>
                  <li>Javascript ES6</li>
                  <li>React</li>
                  <li>SQL database</li>
                  <li>Java</li>
                  <li>Spring Boot</li>
                  <li>Node Package Manager</li>
                  <li>CSS</li>
                </ul>
              <p>This was a group project that was planned in an Agile method and written collaboratively over a 7 day period.</p>
            <a class="github_link" href="https://github.com/emmDevs/Local_Services_Backend.git" style="color:black">GitHub Link to Backend Repo</a>
            <br>
            <br>
            <a class="github_link" href="https://github.com/emmDevs/final_project_frontend.git" style="color:black">GitHub Link to Frontend Repo</a>
        </div>
        <div class="C">
          <h3 class="title">PokeVue</h3>
            <video class="video" width="320" height="240" controls >
              <source src="@/assets/PokeVue .mp4">
            </video>
        </div>
        <div class="Dproject">
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
              <p>This was a group project that was planned in an Agile method and written collaboratively over a 6 day period.</p>
            <a class="github_link" href="https://github.com/emmDevs/pokeJson.git" style="color:black">GitHub Link to Repo</a>
        </div>
        <div class="E">
          <h3 class="title">On Top Of The World</h3>
            <video class="video" width="320" height="240" controls >
              <source src="@/assets/OnTopOfTheWorld.mp4">
            </video>
        </div>
        <div class="Fproject">
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
              <p>This was a solo project that was planned and written over a 6 day period.</p>
            <a class ="github_link" href="https://github.com/emmDevs/on_top_of_the_world.git" style="color: black">Github Link to Repo</a>
        </div>
      </section>
  </div>
</template>

<script>

export default {
    name: 'projects'
}
</script>

<style>

.parent-container{
  display: grid;
  text-align: center;
  margin-left: 15px;
}

.parent-container > div > h3{
  color: orange;
}

.A-Image{
  height: auto;
  width: 320px;
  padding-top: 40px;
}

.Bproject > ul > li{
  list-style: none;
  margin-right: 25px;
}

.Bproject > h4{
  color: orange;
}

.Dproject > ul > li{
  list-style: none;
  margin-right: 25px;
}

.Dproject > h4{
  color: orange;
}

.Fproject{
  margin-bottom: 50px;
}

.Fproject > ul > li{
  list-style: none;
  margin-right: 25px;
}

.Fproject > h4{
  color: orange;
}

.title{
  margin-bottom: 0;
  margin-top: 36px;
}

.github_link{
  text-decoration: none;
  padding: 5px;
    
}

.github_link:hover{
  background-color: orange;
}

@media (min-width: 1080px){

.parent-container{
  display: grid;
  max-width: 90%;
  margin: 1rem auto;
  grid-template-areas: "A A B B"
                      "C C D D"
                      "E E F F";
  grid-column-gap: 2rem;
  padding-top: 50px;
}
.A{
  grid-area: A;
}

.A-Image:hover{
    position: relative;
    top: -25px;
    left: -35px;
    width: 640px;
    height: auto;
    display: block;
    z-index: 999;
}

.Bproject{
  grid-area: B;
  padding-left: 150px;
  padding-bottom: 50px;
  margin-left: 50px;
}

.C{
  grid-area: C;
}

.video:hover{
    position: relative;
    top: -25px;
    left: -35px;
    width: 640px;
    height: auto;
    display: block;
    z-index: 999;
}
.Dproject{
  grid-area: D;
  padding-left: 150px;
  margin-left: 50px;
}

.E{
  grid-area: E;
  padding-top: 80px;
}

.Fproject{
  grid-area: F;
  padding-left: 150px;
  padding-top: 80px;
}

.title{
  text-align: center;
}
}

</style>