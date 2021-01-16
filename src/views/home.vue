<template>
  
  <div>
    <div class="home-container">
    <div class="text">
       <h1 class="Amy-name">Emma Hack</h1>
       <div class="Csoftware">
       <h2 class="software">Software</h2>
       <h2 class="developer">Developer</h2>
         </div>
    </div>
    <div>
    <img class="Bphoto" src="@/assets/IMG_2876.jpeg">
    </div>
    <!-- <h1 class="my-name">Emma Hack</h1>
    <img class="photo" src="@/assets/IMG_2876.jpeg">
    <div class="aside-container" >
      <h2 class="software">Software</h2>
      <h2 class="developer" >Developer</h2>
      </div> -->
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

/* .photo-container{
  
  text-align: right;
} */

.home-container{
  display: grid;
  max-width: 90%;
  margin: 1rem auto;
  grid-template-areas: "A A B B"
                      "C C B B"
}

.Bphoto{
  grid-area: B;
  height: 500px;
  width: 500px;
  border-radius: 250px;
  margin-top: 150px;
  /* margin-right: 175px; */
  margin-bottom: 150px;

}

/* .photo {
  height: 100px;
  width: 100px;
  border-radius: 250px;
  margin-top: 50px;
  /* margin-right: 175px; */
   
/* } */

/* .text{
  width: 40%;
} */

.Amy-name{
  grid-area: A;
  font-size: 90px;
  margin-top: 150px;
  }

h2{
    font-size: 50px;
  }

.Csoftware{
  grid-area: C;
  /* margin-left: 200px;
  margin-bottom: 0; */
  padding-top: 80px;
  }

.software{
  margin-left: 200px;
  margin-bottom: 0;
}

.developer{
  margin-left: 225px;
  margin-top: 0px;
}

</style>