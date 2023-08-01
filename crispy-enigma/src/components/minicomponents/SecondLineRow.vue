<script setup>
import SecondLineRowLittle from '../littlecomponents/SecondLineRowLittle.vue'
</script>


<template>
    <div class="flex flex-col gap-10 " >
        <div class="flex text-3xl text-[#141522] justify-between">
            <h1 class="font-bold">Monthly Mentors</h1>
            <div class="flex gap-10">
                <button>&#10094;</button>
                <button> &#x276F;</button>
            </div>
        </div>
        <div class="flex gap-12">
        <div class="flex flex-col gap-5">
            <div class="flex  gap-5">           
                <img src="src/assets/images/SecondLinePictures/CuriousGeorge.png" alt="" class="w-16">
                <div class="flex-col">
                    <h1 class="text-2xl font-bold">Curious George</h1>
                    <p>UI UX Design</p>
                </div>
                <div class="p-4">
                    <!-- buttonni tog'irlash kk (fallowed;follow) -->
                    <button class="text-[#546FFF]">+Follow</button>
                </div>
            </div>
            <div class="flex gap-4">
                <div>
                <img src="src/assets/images/SecondLinePictures/note-2.png" alt="">
            </div>
            <p>40 Task</p>
            <img src="src/assets/images/SecondLinePictures/Star.svg" alt="">
            <p>4,7  (750 Reviews)</p>
            </div>
        </div>
        <SecondLineRowLittle></SecondLineRowLittle>
    </div>
    </div>      
    
</template>