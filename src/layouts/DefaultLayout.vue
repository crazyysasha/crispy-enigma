<script setup>
import SideBar from '../components/SideBar.vue';

</script>
<template>
  <header></header>
  <div class="flex">
    <SideBar />
    <RouterView />
  </div>
</template>
