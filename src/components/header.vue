<template>
  <nav>
      <ul>
          <li>
              <router-link to="/">Home</router-link>
              <router-link to="/about">About Me</router-link>
              <router-link to="/projects">Projects</router-link>
              <router-link to="/contact">Contact Me</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'header',

}
</script>

<style>

</style>