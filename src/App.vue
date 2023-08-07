<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/nav">Nav</RouterLink>
  <RouterView />
</template>

