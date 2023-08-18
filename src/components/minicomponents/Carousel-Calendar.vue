<script setup>
defineProps({
    days:{
        type:String,
        required:true,
        default:''
    },
    DaysofTheWeek:{
        type:String,
        required:true,
        default:''
    }
})
</script>

<template>
    <div class="flex text-sm m-1">
        <div class="text-center ">
            <div>{{ DaysofTheWeek }}</div>
            <div class="rounded-full bg-[#F5F5F7] h-[2rem] aspect-square">{{ days}}</div>
        </div>
    </div>
</template>