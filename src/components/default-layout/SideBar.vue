<script setup>
import SideBarContext from '../minicomponents/SideBarContext.vue';
import {useRoute} from 'vue-router';
import { onMounted } from 'vue';

const route=useRoute();
onMounted(()=>{
     console.log(route.fullPath)
})
</script>

<template>
     <aside class="font-PlusJakartaSans flex flex-col justify-between gap-8 p-8 text-[14px] overflow-y-auto overflow-x-hidden bg-white max-w-[252px]">
          <div class="flex gap-3 text-3xl font-bold">
               <img src="src/assets/images/FirstLinePictures/book-square.png" alt="">
               <a href="" class="fond-bold text-3xl ">Nuegas</a>
          </div>
          <div class=" flex flex-col gap-6">
               <router-link
               :to="{name:'home'}"
               :class="{'!bg-white !text-black ': route.fullPath=='/'}"
               class="cursor-pointer font-extrabold rounded-[10px] hover:animate-pulse active:animate-none hover:bg-[#F5F5F7] focus:outline-none focus:ring focus:ring-vilet-300 ring-offset-4 ring-gray-600 duration-300"
               >
                    <div class="font-bold flex gap-4">
                         <img src="src/assets/images/FirstLinePictures/category-2.png" alt="">
                         <a href="" class="">Overview</a>
                    </div>
               </router-link>
              <router-link
               :to="{name:'Task'}"
               :class="{'!bg-white !text-black ': route.fullPath=='/'}"
               class="cursor-pointer font-extrabold rounded-[10px] hover:animate-pulse hover:bg-[#F5F5F7] focus:outline-none focus:ring focus:ring-vilet-300 ring-offset-4 ring-gray-600 duration-300 "
               >
               <div class="flex gap-4">
                    <img src="src/assets/images/FirstLinePictures/book.png" alt="">
                    <a href="">Task</a>
               </div>
               </router-link>
               <router-link
               :to="{name:'Mentors'}"
               :class="{'!bg-white !text-black ': route.fullPath=='/'}"
               class="cursor-pointer font-extrabold rounded-[10px] hover:animate-pulse  hover:bg-[#F5F5F7] focus:outline-none focus:ring focus:ring-vilet-300 ring-offset-4 ring-gray-600 duration-300 "
               >
               <div class="flex gap-4">
                    <img src="src/assets/images/FirstLinePictures/user-octagon.png" alt="">
                    <a href="">Mentors</a>
               </div>
               </router-link>
               <router-link
               :to="{name:'Message'}"
               :class="{'!bg-white !text-black ': route.fullPath=='/'}"
               class="cursor-pointer font-extrabold rounded-[10px] hover:animate-pulse  hover:bg-[#F5F5F7] focus:outline-none focus:ring focus:ring-vilet-300 ring-offset-4 ring-gray-600 duration-300 "
               >
               <div class="flex gap-4">
                    <img src="src/assets/images/FirstLinePictures/message.png" alt="">
                    <a href="">Message</a>
               </div>
               </router-link>
               <router-link
               :to="{name:'Settings'}"
               :class="{'!bg-white !text-black ': route.fullPath=='/'}"
               class="cursor-pointer font-extrabold rounded-[10px] hover:animate-pulse  hover:bg-[#F5F5F7] focus:outline-none focus:ring focus:ring-vilet-300 ring-offset-4 ring-gray-600 duration-300 "
               >
               <div class="flex gap-4">
                    <img src="src/assets/images/FirstLinePictures/setting-2.png" alt="" class="font-bold">
                    <a href="">Settings</a>
               </div>
               </router-link>

          </div> 
         <SideBarContext></SideBarContext>
     </aside>
</template>
