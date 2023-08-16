<script setup>
import SideBar from '../components/default-layout/SideBar.vue';


</script>
<template>
    <div class="min-h-screen max-h-screen flex items-stretch overflow-hidden">
        <SideBar></SideBar>


        <RouterView>
        </RouterView>
    </div>
</template>