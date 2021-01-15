<template>
  <div>
      <div class="parent-container flex-container">
          <div class="A"> <p>photo</p></div>
          <div class="B"><p>blurb</p></div>
          <div class="C"><p>blurb</p></div>
          <div class="D"><p>photo</p></div>
          <!-- <div class="E"><p>photo</p></div>
          <div class="F"><p>blurb</p></div> -->
      </div>
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

.parent-container{
    display: grid;
    max-width: 90%;
    margin: 1rem auto;
    grid-template-areas: "A A B B"
                        "C C D D"
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

.E{
    grid-area: E;
}

.F{
    grid-area: F;
}

/* .flex-container{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row
}
    
.box{
    height: 200px;
    width: 200px;
    border: black solid 5px;
    

} */



</style>