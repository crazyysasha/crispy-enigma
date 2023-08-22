<script setup>
defineProps({
    text:{
        type:String,
        required:true,
        default:''
    },
    category:{
        type:String,
        required:true,
        default:''
    },
    sort:{
        type:String,
        required:true,
        default:''
    }
})

</script>

<template>
    <div class="flex flex-col gap-4 p-8 bg-white">
        <div class="flex justify-between text-[1rem]">
           <h1 class="text-[24px] font-bold">{{ text }}</h1>
           <div class="flex gap-[24px]">
                <button><slot></slot></button>
                <slot name="slot3"></slot>
            </div>
        </div>
        <div class="flex justify-between items-center text-[1rem]">
            <div class="flex border-2">
                <input type="text" placeholder="Search Task" class="rounded-xl border-1 ">  
                <button>
                <slot name="slot4"></slot>
                </button>
        </div>
        <div class="flex border-2">
            <slot name="slot5"></slot>
            <button>{{category}}</button>
        </div>
        <div class="flex border-2">
            <slot name="slot6"></slot>
            <button>{{ sort }}</button>
        </div>
    </div>   
    </div>   
</template>