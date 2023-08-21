<script setup>
defineProps({
    name:{
        type:String,
        required:true,
        default:''
    },
    job:{
        type:String,
        required:true,
        default:''
    },
    fallow:{
        type:String,
        required:true,
        default:''
    },
    task:{
        type:String,
        required:true,
        default:''
    },
    reviews:{
        type:String,
        required:true,
        default:''
    }
});
</script>

<template>
    <div class="bg-[#F5F5F7] flex flex-col gap-5 items-center w-[328px] text-[14px] rounded-lg p-2 ">
        <div class="flex gap-5">
            <!-- this slot is for putting pictures -->
           <slot></slot>
            <div>   
                <h1 class="font-bold text-[1rem]">{{ name }}</h1>
                <p class="text-[12px]">{{ job }}</p>
            </div>
            <div class="">
                <button class="text-green-500 text-[14px]">{{ fallow }}</button>
            </div>
        </div>
        <slot name="portfolio"></slot>  
        <div class="flex gap-4">    
            <div>
                <img src="src/assets/images/Dashboardpictures/note-2.png" alt="">
            </div>
            <p>{{ task }}</p>
            <img src="src/assets/images/Dashboardpictures/Star.svg" alt="">
            <p>{{ reviews }}</p>
        </div>       
    </div>
</template>