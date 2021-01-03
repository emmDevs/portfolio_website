<template>
  <nav class='nav-bar-container'>
      <ul>
          <li>
              <router-link class="list" to="/">Home</router-link>
            </li>
              <li>
              <router-link class="list" to="/about">About Me</router-link>
              </li>
              <li>
              <router-link class="list" to="/projects">Projects</router-link>
              </li>
              <li>
              <router-link class="list" to="/contact">Contact Me</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'navBar',

}
</script>

<style>

.nav-bar-container{
  display: flex;
  background-color: darkgray;
}

.nav-bar-container > ul > li{
  list-style: none;
  display: inline;
}

.list{
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 24;
  font-weight: bold;
  text-decoration: none;
  margin-left: 36px;
}

</style>