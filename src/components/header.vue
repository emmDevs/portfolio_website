<template>
  <nav class='nav-bar-container'>
      <ul>
          <li>
              <router-link class="list" to="/" exact>Home</router-link>
            </li>
              <li>
              <router-link class="list" to="/about" exact>About Me</router-link>
              </li>
              <li>
              <router-link class="list" to="/projects" exact>Projects</router-link>
              </li>
              <!-- <li>
              <router-link class="list" to="/contact" exact>Contact Me</router-link>
          </li> -->
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'navBar',

}
</script>

<style>

.nav-bar-container > ul{
  margin-top: 0;
  padding-top: 25px;
}

.nav-bar-container > ul > li{
  list-style: none;
  display: inline;
}

.list{
  color:white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 24;
  font-weight: bold;
  text-decoration: none;
  margin-left: 36px;
}

.list.router-link-active{
  color: black;
}


</style>