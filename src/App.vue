<template>
  <div class="app">
    <Navigation />
    <router-view />
  </div>
 <h1>{{ title }}</h1>
</template>

<script>
import { createApp } from 'vue';
import Home from './Home.vue';
import Navigation from './components/Navigation.vue';
export default{
  name: "App",
  components: {
    Navigation,
    Home,
  }
}

</script>



<style>
.h1{
  size: 50%;
}
.template {
  background-color: white;
}
</style>
