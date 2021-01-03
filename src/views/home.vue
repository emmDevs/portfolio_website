<template>
  
  <nav>
    <nav-bar></nav-bar>
      <p>Emma Hack</p>
      <p>Software</p>
      <p>Developer</p>
      <section class="img-container">
      <img class="photo" src="@/assets/IMG_2876.jpeg">
      </section>
    <foot-note></foot-note>
  </nav>
</template>

<script>
import navBar from '../components/header.vue'
import footNote from '../components/footer.vue'


export default {
  components: {
    'nav-bar': navBar,
    'foot-note': footNote
  }
    
}
</script>

<style>

.img-container{
  display: flex;
  justify-content: flex-end;
  
}

.photo {
  height: 500px;
  width: 500px;
  border-radius: 250px;
  margin-right: 175px;
}

p{
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>