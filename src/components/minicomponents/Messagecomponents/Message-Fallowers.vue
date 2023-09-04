<script setup>
import { triggerRef } from 'vue';

defineProps({
    name:{
        type:String,
        required:true,
        default:''
    },
    lastseen:{        
        type:String,
        required:true,
        default:''
    },
    comment:{
        type:String,
        required:true,
        default:''
    }
})
</script>

<template>
    <div class="grid">
        <div class="flex rounded-xl bg-[#FAFAFA] border-2 gap-3 text-[14px] p-1  items-center">
        <!--this is where users put a picture -->
        <div>
        <slot></slot>
        </div>
        <div class="flex flex-col gap-[12px]">
            <div class="flex  justify-between">
                <h1 class="font-bold">{{ name }}</h1>
                <p class="text-[#8E92BC]">{{ lastseen }}</p>
            </div>
            <div class="flex items-center">
                <p class="leading-normal">{{ comment }}</p>
                <div>
                <p class="circle"></p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.circle {
  height: 18px;
  width: 18px;
  background-color:#DB5962;
  border-radius: 50%;}
</style>