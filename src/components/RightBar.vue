<script setup>
import CarouselCalendar from './minicomponents/Carousel-Calendar.vue';
import CarouselItems from './minicomponents/Carousel-items.vue';
</script>

<template>
    <aside class="flex flex-col gap-7 p-5 font-PlusJakartaSans max-w-[27.25rem]  items-stretch  bg-[#F5F5F7] overflow-auto">
        <div class="flex flex-col text-sm font-bold  bg-white rounded-md ">
            <div class="flex p-6 justify-between">   
                <button>&#10094;</button>
                <p>July 2022</p>
                <button>&#x276F;</button>
            </div>
            <div class="flex justify-between  h-[10rem] ">
                <CarouselCalendar days="10" Daysof-The-Week="S"></CarouselCalendar>
                <CarouselCalendar days="11" Daysof-The-Week="M"></CarouselCalendar>
                <CarouselCalendar days="12" Daysof-The-Week="T"></CarouselCalendar>
                <CarouselCalendar days="13" Daysof-The-Week="W" ></CarouselCalendar>
                <CarouselCalendar days="14" Daysof-The-Week="T"></CarouselCalendar>
                <CarouselCalendar days="15" Daysof-The-Week="F"></CarouselCalendar>
                <CarouselCalendar days="16" Daysof-The-Week="S"></CarouselCalendar>
            </div>
        </div>
        <div class="flex flex-col bg-white rounded-md p-8 ">
            <div class="flex text-sm font-bold  justify-between p-[1.5rem]">
                <p>Task</p>
                <button> 
                    <img src="src/assets/images/RightBarPictures/Dot.svg" alt="" class="w-[1.25rem] aspect-square">
                </button>
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col items-center">
                    <CarouselItems whatdoing="Creating Awesome Mobile Apps" whatjob="UI /UX Designer" lastseen="1 Hour" class="text-xl">
                        <img src="src/assets/images/RightBarPictures/Image(3).png" alt="" class="w-80 h-[10rem]">
                        <template #slot2>
                            <img src="src/assets/images/DashboardPictures/Userspictures2.svg" alt="" class="">
                        </template>
                    </CarouselItems>
                </div>
           <div class="flex flex-col text-center">
                <div class="flex justify-between text-[1rem]">
                    <h1 class="font-bold">Detail Task</h1>
                    <p class="text-[0.75rem]">UI / UX Designer</p>
                </div>
            </div>
            <div class="text-[12px] font-bold flex flex-col gap-6">
                <div class="flex gap-3">    
                    <p class=" h-full aspect-square rounded-full bg-[#F5F5F7] p-1">1</p>
                    <p>Understanding the tools in Figma</p>
                </div>
                <div class="flex gap-10">
                    <p>2</p>
                    <p>Understand the basics of making designs</p>
                </div>    
                <div class="flex gap-10">
                    <p>3</p>
                    <p>Design a mobile application with figma</p>
                </div>                
                <div class="flex flex-col items-center">
                    <button class="rounded-xl bg-[#546FFF]  w-[84px] h-[44px] font-bold " > Go To Detail</button>
                </div>
            </div>
            </div>               
        </div>
    </aside>
</template>

