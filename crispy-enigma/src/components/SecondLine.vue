<script setup>
import SecondLineRow from './minicomponents/SecondLineRow.vue';
import SecondLineBottom from './minicomponents/SecondLineBottom.vue';
</script>

<template>
    <div class="container flex flex-col p-10 text-xl gap-10">
        <div class="flex gap-32">
            <div class="font-PlusJakartaSans  flex flex-col gap-4">
                <h1 class="text-3xl font-bold">Hi, Skylar Dias</h1>
                <p>Let's finish your task today!</p>
            </div>  
            <div class="flex gap-3 p-6">
                <div class="p-4">
                    <button>
                        <img src="src/assets/images/SecondLinePictures/Notification.png" alt="">
                    </button>    
                </div>
                <div>
                    <img src="src/assets/images/SecondLinePictures/Profil.png" alt="" class="w-16">
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="bg-[#141522] text-white rounded-lg flex flex-col items-center w-64 h-52 gap-3 justify-center">
                <div class="flex flex-col gap-3 mr-16"> 
                    <p>Running Task</p>
                    <p class="text-3xl font-bold">65</p>
                </div>
                <div class="flex gap-6 mr-8">
                    <p class="text-2xl font-bold">45%</p>
                    <div class='flex flex-col gap-3'>
                        <p class="text-3xl font-bold">100</p>
                        <p>Tasks</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-6">
                <p>Activity</p>
                <div class=" flex outline-offset-8 outline outline-white">
                    
                    <div>
                        <ul>
                            <li>3</li>
                            <li>2</li>
                            <li>1</li>
                            
                        </ul>
                    </div>
                        <img src="src/assets/images/SecondLinePictures/diagramma.svg" alt="">
                    </div>
                    <div class="bg-[#141522] rounded-lg text-white w-16 h-12 ">
                        <p>2Tasks</p>
                    </div>
            </div>          
        </div>
        <SecondLineRow></SecondLineRow>
        <SecondLineBottom></SecondLineBottom>
    </div>
</template>