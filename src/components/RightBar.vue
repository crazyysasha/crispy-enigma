<script setup>
import CarouselCalendar from './minicomponents/Carousel-Calendar.vue';
import CarouselItems from './minicomponents/Carousel-items.vue';
</script>

<template>
    <aside class="flex flex-col gap-12 p-5 font-PlusJakartaSans max-w-2xl items-stretch">
    <div class="flex text-3xl font-bold justify-between">
            <button>&#10094;</button>
            <p>July 2022</p>
            <button>&#x276F;</button>
    </div>
    <div class="flex justify-between">
        <CarouselCalendar days="10" days_of_the_week="S"></CarouselCalendar>
        <CarouselCalendar days="11" days_of_the_week="M"></CarouselCalendar>
        <CarouselCalendar days="12" days_of_the_week="T"></CarouselCalendar>
        <CarouselCalendar days="13" days_of_the_week="W" class="rounded-2xl bg-slate-500"></CarouselCalendar>
        <CarouselCalendar days="14" days_of_the_week="T"></CarouselCalendar>
        <CarouselCalendar days="15" days_of_the_week="F"></CarouselCalendar>
        <CarouselCalendar days="16" days_of_the_week="S"></CarouselCalendar>
    </div>
    <div class="flex text-2xl font-bold  justify-between">
        <p>Task</p>
        <button class="text-3xl">...</button>
    </div>
    <CarouselItems whatdoing="Creating Awesome Mobile Apps" whatjob="UI /UX Designer" lastseen="1 Hour" class="text-xl">
        <img src="src/assets/images/RightBarPictures/Image(3).png" alt="">
        <template #slot2>
            <img src="src/assets/images/DashboardPictures/Userspictures2.svg" alt="" class="w-36">
        </template>
    </CarouselItems>
    <div class="flex justify-between text-xl">
        <h1 class="text-2xl font-bold">Detail Task</h1>
        <p>UI / UX Designer</p>
    </div>
        <div class="text-2xl font-bold flex flex-col gap-10">
        <div class="flex gap-10">    
            <p>1</p>
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
        </div>
        <div class="flex flex-col items-center">
            <button class="rounded-xl bg-[#546FFF] w-96 h-12 font-bold text-2xl" > Go To Detail</button>
        </div>
    </aside>
</template>

