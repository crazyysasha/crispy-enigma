<script setup>
defineProps({
    whatdoing:{
        type:String,
        required:true,
        default:''
    },
    whatjob:{
        type:String,
        required:true,
        default:''
    },
    lastseen:{
        type:String,
        required:true,
        default:''
    }
});
</script>
<template>
    <div class=" bg-[#F5F5F7] flex flex-col text-[1rem] w-[328px] gap p-[24px] rounded-xl shadow-lg">
        <slot></slot>
        <div class="flex-col">
        <div class="flex flex-col">
            <h1 class="font-bold">{{ whatdoing }}</h1>
            <p class="text-[0.75rem]">{{ whatjob }}</p>
        </div>
        <div class="flex flex-col gap-[0.75rem]">
            <p class="font-bold">Progress</p>
            <input type="range" name="" id="">
        </div>
        <!--must Progress bars efects  -->
        <div class="flex gap-3 justify-between items-center">
            <img src="src/assets/images/Dashboardpictures/Clock.svg" alt="" class="w-6 aspect-square">
            <p>{{ lastseen }}</p>
            <slot name="slot2"></slot>
        </div>
        </div>    
    </div>
</template>