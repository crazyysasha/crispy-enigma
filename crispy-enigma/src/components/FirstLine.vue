<script setup>
import FirstLineBottom from './minicomponents/FirstLineBottom.vue';
</script>

<template>
    <div class=" container font-PlusJakartaSans flex flex-col gap-14 p-10 text-lg">
        <div class="flex gap-3 text-3xl font-bold">
            <img src="src/assets/images/FirstLinePictures/book-square.png" alt="">
            <a href="" class="fond-bold ">Nuegas</a>
        </div>
        <div class=" flex flex-col gap-6 p-7">
           <div class="font-bold flex gap-4">
                <img src="src/assets/images/FirstLinePictures/category-2.png" alt="">
                <a href="" class="">Overview</a>
           </div>
           <div class="flex gap-4">
                <img src="src/assets/images/FirstLinePictures/book.png" alt="">
                <a href="">Task</a>
           </div>
           <div class="flex gap-4">
                <img src="src/assets/images/FirstLinePictures/user-octagon.png" alt="">
                <a href="">Mentors</a>
           </div>
           <div class="flex gap-4">
                <img src="src/assets/images/FirstLinePictures/message.png" alt="">
                <a href="">Message</a>
           </div>
           <div class="flex gap-4">
               <img src="src/assets/images/FirstLinePictures/setting-2.png" alt="">
                <a href="">Settings</a>
           </div>
           
        </div>
        <FirstLineBottom></FirstLineBottom>
    </div>

</template>