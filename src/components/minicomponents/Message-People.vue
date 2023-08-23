<script setup>
import PhoneLogo from '../../assets/images/Messagepictures/PhoneLogo.vue';
import VideoLogo from '../../assets/images/Messagepictures/VideoLogo.vue'
import MessageChat from './MessageChat.vue';
defineProps({
    name:{
        type:String,
        required:true,
        default:''
    },
    online:{
        type:String,
        required:true,
        default:''
    }
})
</script>

<template>
    <div class="flex pr-[32px] pl-[48px]  gap-[416px] text-[14px]">
        <div class="flex gap-[12px]">
            <div>
                <img src="src/assets/images/Messagepictures/AngelieCrison.png" alt="Angelie Crison" class="w-[48px]">
            </div>
            <div class="flex flex-col">
                <p>{{ name }}</p>
                <div class="flex">
                    <img src="src/assets/images/Messagepictures/Dotonline.svg" alt="">
                    <p class="text-[12px]">{{ online }}</p>
                </div>
            </div>
        </div>
        <div class="flex  flex-col">
            <div class="flex gap-[24px]">
            <div class=" border-2 rounded-full aspect-square h-full p-1">
                <VideoLogo/>
            </div>
            <div class="border-2 rounded-full aspect-square h-full p-1">  
                <PhoneLogo/>
            </div>
        </div>
        </div>
    </div>
</template>