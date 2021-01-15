<template>
  
  <div>
    <div class="photo-container">
    <img class="photo" src="@/assets/IMG_2876.jpeg">
    </div>
    <!-- <h1 class="my-name">Emma Hack</h1>
    <img class="photo" src="@/assets/IMG_2876.jpeg">
    <div class="aside-container" >
      <h2 class="software">Software</h2>
      <h2 class="developer" >Developer</h2>
      </div> -->
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

.photo-container{
  text-align: right;
}

.photo {
  height: 500px;
  width: 500px;
  border-radius: 250px;
  margin-top: 50px;
  margin-right: 175px;

}

.my-name{
  font-size: 90px;
  }

h2{
    font-size: 50px;
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