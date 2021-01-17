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
      </div>
      </div>
</template>

<script>

export default {
    
}
</script>

<style>


.home-container{
  text-align: center;
}

.Bphoto{
  height: 250px;
  width: 250px;
  border-radius: 250px;
  margin-top: 36px;
  margin-bottom: 50px;

}

.Amy-name{
  font-size: 90px;
  margin-top: 50px;
  margin-bottom: 0px;
  }

h2{
    font-size: 50px;
  }


.software{
  margin-bottom: 0;
}

.developer{
  margin-top: 0px;
}


@media (min-width: 1080px){

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
  margin-top: 100px;
  margin-bottom: 100px;

}

.Amy-name{
  grid-area: A;
  font-size: 90px;
  margin-top: 100px;
  }

h2{
    font-size: 50px;
  }

.Csoftware{
  grid-area: C;
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
}

</style>