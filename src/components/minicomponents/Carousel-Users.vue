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
    <div class="flex flex-col gap-5">
        <div class="flex gap-5">
            <!-- this slot is for putting pictures -->
           <slot></slot>
            <div>   
                <h1 class="text-2xl font-bold">{{ name }}</h1>
                <p>{{ job }}</p>
            </div>
            <div class="p-4">
                <button class="text-green-500">{{ fallow }}</button>
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