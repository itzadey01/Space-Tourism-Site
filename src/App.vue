<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>


<template>
  <NavBar />
  <RouterView />
</template>



<style>
/* Optionally, clear any global margin/padding */
body, html, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
