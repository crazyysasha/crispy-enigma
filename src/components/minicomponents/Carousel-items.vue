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
    <div class="flex gap-36">
            <div class="flex flex-col gap-5 text-[1rem]">
                <slot></slot>
                <div class="flex gap-5 flex-col">
                <div class="flex flex-col gap-[0.25rem]">
                    <h1 class="font-bold">{{ whatdoing }}</h1>
                    <p class="text-[0.75rem]">{{ whatjob }}</p>
                </div>
                <div class="flex flex-col gap-3">
                    <p class="font-bold">Progress</p>
                    <input type="range" name="" id="">
                </div>
                </div>
                <!--must Progress bars efects  -->
                <div class="flex gap-5 justify-between items-center">
                    <img src="src/assets/images/Dashboardpictures/Clock.svg" alt="" class="w-6 aspect-square">
                    <p>{{ lastseen }}</p>
                    <slot name="slot2"></slot>    
                </div>
            </div>
    </div>  
</template>