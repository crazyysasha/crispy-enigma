<script setup>
import ConfigurationSettings from '../components/minicomponents/Configuration-Settings.vue'
</script>

<template>
    <header class="bg-white font-PlusJakartaSans font-[14px] overflow-auto scroll-smooth items-stretch flex-1 overflow-x-auto overflow-y-auto max-w-full "> 
        <div class="flex flex-col h-full border-2">
            <div class="flex justify-between  p-8">
                <div>
                    <h1 class="text-[24px] font-bold">Settings</h1>
                </div>
                <div class="flex gap-8">
                    <button> <img src="src/assets/images/Dashboardpictures/Notification.png" alt="" class="w-8"></button>
                    <img src="src/assets/images/Dashboardpictures/Profil.png" alt="" class="w-16">
                </div>
            </div>
            <div class="flex flex-col bg-[#FAFAFA] h-full">
                    <ConfigurationSettings>   </ConfigurationSettings>
            </div>
        </div>  
    </header>
</template>