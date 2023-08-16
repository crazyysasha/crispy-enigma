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
            <div class="flex flex-col gap-5">
                <slot></slot>
                <h1>{{ whatdoing }}</h1>
                <p>{{ whatjob }}</p>
                <p class="text-xl font-bold">Progress</p>
                <input type="range" name="" id="">
                <!--must Progress bars efects  -->
                <div class="flex gap-5 justify-between">
                    <img src="src/assets/images/Dashboardpictures/Clock.svg" alt="" class="w-8">
                    <p class="text-2xl">{{ lastseen }}</p>
                    <slot name="slot2"></slot>    
                </div>
            </div>
    </div>  
</template>