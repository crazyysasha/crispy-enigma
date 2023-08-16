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
    <div class="flex rounded-xl bg-[#FAFAFA] border-2 gap-3">
        <!--this is where users put a picture -->
        <slot></slot>
        <div class="flex flex-col gap-5">
            <div class="flex  justify-between">
                <h1 class="font-bold">{{ name }}</h1>
                <p class="text-[#8E92BC]">{{ lastseen }}</p>
            </div>
            <div class="flex gap-5 ">
                <p>{{comment}}</p>
                <p class="circle"></p>
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