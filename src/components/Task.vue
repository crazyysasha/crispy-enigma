<script setup>
import ExploreTask from './minicomponents/ExploreTask.vue';
import CarouselButton from './minicomponents/Carousel-button.vue';
import ExploreTaskSw from './minicomponents/ExploreTaskSw.vue'
import ExploreTaskSwButton from './minicomponents/ExploreTaskSwButton.vue';



</script>
<!-- Must do swiper -->
<template>
    <div class="flex flex-col items-stretch">
       <ExploreTask text="Explore Task" category="Category" sort="Sort By : Deadline">
            <img src="src/assets/images/Dashboardpictures/Notification.png" alt="" class="w-[24px]">
            <template #slot3>
                <img src="src/assets/images/Dashboardpictures/Profil.png" alt="" class="w-[48px]">
            </template>
            <template #slot4>
                <img src="src/assets/images/TaskPictures/search-normal.png" alt="" class="w-[20px]">
            </template>
            <template #slot5>
                 <img src="src/assets/images/TaskPictures/element-1.png" alt="" class="w-[24px]">
            </template>
            <template #slot6>
                <img src="src/assets/images/TaskPictures/sort.png" alt="" class="w-[24px]">
            </template>
       </ExploreTask>
       <div class="bg-[#FAFAFA] rounded-xl p-8 flex flex-col gap-[24px]">
            <div class="flex flex-col gap-[24px]">
                <CarouselButton>
                    <h1>Time Limit</h1>
                </CarouselButton>
                <ExploreTaskSw></ExploreTaskSw>
            </div>   
            <div class="flex flex-col gap-[24px]">
                <CarouselButton>
                    <h1>New Task</h1>
                </CarouselButton> 
                <ExploreTaskSwButton></ExploreTaskSwButton>
            </div>
        </div>
    </div>
</template>
