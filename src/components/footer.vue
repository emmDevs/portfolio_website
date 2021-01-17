<template>
  <div>
    <div class="date-container">
    <p class="date">Emma Hack 2021</p>
    </div>
  <div class="icon-container">
    <a href="mailto: ehack78@gmail.com">
      <i class="far fa-envelope fa-2x" style="color: black"></i>
    </a>
    <a href="http://www.myroadtocode.co.uk/">
      <i class="fab fa-blogger-b fa-2x" style="color: orange"></i>
    </a>
      <a href="https://github.com/emmDevs">
        <i class="fab fa-github fa-2x" style="color: black"></i>
      </a>
    <a href="https://linkedin.com/in/emma-hack">
     <i class="fab fa-linkedin fa-2x" style="color: blue"></i>
    </a>
    <a href="https://twitter.com/emmDevs">
     <i class="fab fa-twitter fa-2x" style="color: blue"></i>
    </a>  
  </div>
  </div>
</template>

<script>
export default {
    name: 'footNote',

}
</script>

<style>

.icon-container{
  display: flex;
  /* text-align: center; */
  padding-top: 15px;
  padding-bottom: 15px;
  height: 50px;
  margin-left: 50px;
  }

.date{
  text-align:center;
  color: black;
}

.icon-container > a{
  margin-right: 25px;
}

.icon-container > p{
  color: black;
  margin-right: 400px;
}

@media (min-width: 768px){
  
.icon-container{
  display: flex;
  justify-content: flex-end;
}
}

@media (min-width: 1080px){

.icon-container{
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 50px;
  }

.icon-container > a{
  margin-right: 25px;
}

.date{
  color: black;
  /* margin-right: 400px; */
}

.date-container{
  text-align: center;
}

}

</style>