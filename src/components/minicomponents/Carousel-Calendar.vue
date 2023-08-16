<script setup>
defineProps({
    days:{
        type:String,
        required:true,
        default:''
    },
    days_of_the_week:{
        type:String,
        required:true,
        default:''
    }
})
</script>

<template>
   
    <div class="flex text-3xl">
        <div>
            <ul>
                <li>{{ days_of_the_week }}</li>
                <li class="rounded-full bg-[#F5F5F7]">{{ days}}</li>
            </ul>
        </div>
    </div>
</template>