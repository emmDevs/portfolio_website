<template>
  <div class="icon-container">
    <p>Emma Hack 2021</p>
    <a href="mailto: ehack78@gmail.com">
      <i class="far fa-envelope fa-2x"></i>
    </a>
    <a href="http://www.myroadtocode.co.uk/">
      <i class="fab fa-blogger-b fa-2x"></i>
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
</template>

<script>
export default {
    name: 'footNote',

}
</script>

<style>
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

.icon-container > p{
  color: black;
  margin-right: 400px;
}


</style>