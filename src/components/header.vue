<template>
  <nav>
      <ul>
          <li>
              <router-link to="/">Home</router-link>
            </li>
              <li>
              <router-link to="/about">About Me</router-link>
              </li>
              <li>
              <router-link to="/projects">Projects</router-link>
              </li>
              <li>
              <router-link to="/contact">Contact Me</router-link>
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

</style>