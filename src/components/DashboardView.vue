<script setup>
import DashboardContext from './minicomponents/DashboardContext.vue';
import CarouselButton from './minicomponents/Carousel-button.vue';
defineProps({
    UpcomingTaks:{
    type:String,
    required:true,
    default:'Upcoming Task'
},
})
</script>

<template>
    <div class="font-PlusJakartaSans flex flex-col justify-between gap-8 max-w-full text-lg  overflow-y-auto overflow-x-hidden bg-white">
        <div class="flex gap-32">
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl font-bold">Hi, Skylar Dias</h1>
                <p>Let's finish your task today!</p>
            </div>  
            <div class="flex gap-3 p-6">
                <div class="p-4">
                    <button>
                        <img src="src/assets/images/SecondLinePictures/Notification.png" alt="">
                    </button>    
                </div>
                <div>
                    <img src="src/assets/images/SecondLinePictures/Profil.png" alt="" class="w-16">
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="bg-[#141522] text-white rounded-lg flex flex-col items-center w-64 h-52 gap-3 justify-center">
                <div class="flex flex-col gap-3 mr-16"> 
                    <p>Running Task</p>
                    <p class="text-3xl font-bold">65</p>
                </div>
                <div class="flex gap-6 mr-8">
                    <p class="text-2xl font-bold">45%</p>
                    <div class='flex flex-col gap-3'>
                        <p class="text-3xl font-bold">100</p>
                        <p>Tasks</p>
                    </div>
                </div>
            </div>
            <img src="src/assets/images/Dashboardpictures/diagramma.svg" alt="">
        </div>
        <DashboardContext></DashboardContext>     
        <div class="float-right">
        </div>   
    </div>
</template>