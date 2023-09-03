<script setup>
import RightBar from '../components/RightBar.vue';
import DashboardContext from '../components/minicomponents/Dashboardcomponents/DashboardContext.vue';
import DashboardContextBtm from '../components/minicomponents/Dashboardcomponents/DashboardContextBtm.vue';
defineProps({
    UpcomingTaks:{
    type:String,
    required:true,
    default:'Upcoming Task'
},
})
</script>

<template>
    <main class="flex overflow-auto  bg-[#FAFAFA] text-[1rem]  max-w-[800px]">
        <div class="font-PlusJakartaSans flex flex-col justify-between  max-w-full text-lg  overflow-y-auto overflow-x-hidden bg-white">
            <div class="flex justify-between p-8">
                <div class="flex flex-col gap-4">
                    <h1 class="text-2xl font-bold">Hi, Skylar Dias</h1>
                    <p>Let's finish your task today!</p>
                </div>
                <div class="flex gap-6 items-center">
                    <button>
                        <img src="src/assets/images/Dashboardpictures/Notification.png" alt="">
                    </button>
                    <img src="src/assets/images/Dashboardpictures/Profil.png" alt="" class="w-12 h-12">
                </div>
            </div>
            <div class="flex p-8 justify-between">
                <div class="bg-[#141522] text-white text-[1rem] rounded-lg flex flex-col items-center w-[194px] h-[214px] gap-3 justify-center ">
                    <div class="flex flex-col gap-3 mr-16"> 
                        <p class="text-[16px]">Running Task</p>
                        <p class="text-[2rem] font-bold">65</p>
                    </div>
                    <div class="flex gap-6 mr-8">
                        <p class="text-2xl font-bold">45%</p>
                        <div class='flex flex-col gap-3'>
                            <p class="text-3xl font-bold">100</p>
                            <p>Tasks</p>
                        </div>
                    </div>
                </div>
                <div class="bg-[#F5F5F7] p-4 flex flex-col gap-4">
                    <div class="flex justify-between">
                        <h1 class="font-bold">Activity</h1>
                        <div class="flex text-[12px] gap-2">
                            <p>This week</p>
                            <button><img src="src/assets/images/Dashboardpictures/Arrow-Down.svg" alt=""></button>
                        </div>
                    </div>
                    <img src="src/assets/images/Dashboardpictures/diagramma.svg" alt="">
                </div>  
            </div>
            <DashboardContext></DashboardContext>  
            <DashboardContextBtm></DashboardContextBtm>   
        </div>       
    </main>
    <RightBar></RightBar> 
    
</template>
