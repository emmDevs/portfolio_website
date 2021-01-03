<template>
  <nav class="icon-container">
    <a href="https://github.com/emmDevs">
     <i class="fab fa-github fa-2x" style="color: black"></i>
    </a>
    <a href="https://linkedin.com/in/emma-hack">
     <i class="fab fa-linkedin fa-2x" style="color: blue"></i>
    </a>
    <a href="https://twitter.com/emmDevs">
     <i class="fab fa-twitter fa-2x" style="color: blue"></i>
    </a>  
  </nav>
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
  padding-bottom: 15px;
}

.icon-container > a{
  margin-right: 25px;

}

</style>