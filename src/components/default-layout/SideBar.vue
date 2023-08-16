<script setup>
import SideBarContext from '../minicomponents/SideBarContext.vue';
</script>

<template>
     <aside class="font-PlusJakartaSans flex flex-col justify-between gap-8 p-8 text-lg max-w-xs overflow-y-auto overflow-x-hidden bg-white">
          <div class="flex gap-3 text-3xl font-bold">
               <img src="src/assets/images/FirstLinePictures/book-square.png" alt="">
               <a href="" class="fond-bold ">Nuegas</a>
          </div>
          <div class=" flex flex-col gap-6">
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
         <SideBarContext></SideBarContext>
     </aside>
</template>