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
    <div class="flex justify-between p-8 text-2xl">
            <h1 class="text-3xl font-bold">{{ text }}</h1>
            <div class="flex gap-10">
                <button><slot></slot></button>
                <slot name="slot3"></slot>
            </div>
    </div>
    <div class="flex justify-between p-8 items-center text-2xl">
        <div class="flex border-2">
            <input type="text" placeholder="Search Task" class="rounded-xl  border-1">  
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
</template>