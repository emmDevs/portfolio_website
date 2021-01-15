<template>
  
  <div>
    <div class="parent-container home">
    <aside class="aside-container" >
      <h1 class="my-name">Emma Hack</h1>
      <h2 class="software">Software</h2>
      <h2 class="developer" >Developer</h2>
      </aside>
      <section class="img-container">
      <img class="photo" src="@/assets/IMG_2876.jpeg">
      </section>
      </div>
  </div>
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

/* .home{
  position: relative;
} */

.img-container{
  display: flex;
  justify-content: flex-end;
  /* height: 700px; */
  margin-top: 100px;
}

.aside-container{
  position: absolute;
  margin-left: 95px;
}

.photo {
  height: 500px;
  width: 500px;
  border-radius: 250px;
  margin-right: 175px;
}

.my-name{
  font-size: 90px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

h2{
    font-size: 50px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }

.software{
  margin-left: 200px;
  margin-bottom: 0;
  padding-top: 80px;
  }

.developer{
  margin-left: 300px;
  margin-top: 0px;
}

</style>