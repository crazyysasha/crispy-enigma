<script setup>
import SideBar from '../components/default-layout/SideBar.vue';


</script>
<template>
    <div class="min-h-screen max-h-screen flex items-stretch overflow-hidden">
        <SideBar></SideBar>

        <main class="flex-1 overflow-auto p-8 bg-[#FAFAFA]">
            <RouterView></RouterView>
        </main>
    </div>
</template>