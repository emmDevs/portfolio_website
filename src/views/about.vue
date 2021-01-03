<template>
  <div>
      <nav-bar></nav-bar>
      <div class="parent-container flex-container">
          <div class="box one"></div>
          <div class="box two"></div>
          <div class="box three"></div>
          <div class="box four"></div>
          <div class="box five"></div>
          <div class="box six"></div>
      </div>
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

.flex-container{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row
}
    
.box{
    height: 200px;
    width: 200px;
    border: black solid 5px;
    

}



</style>