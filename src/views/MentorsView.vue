<script setup>
import ExploreTask from '../components/minicomponents/Taskscomponents/ExploreTask.vue';
import CarouselButton from '../components/minicomponents/Carousel-button.vue';
import CarouselUsers from '../components/minicomponents/Carousel-Users.vue';
import MentorsPart from '../components/minicomponents/Mentorscomponents/MentorsPart.vue';
import RecentMentors from '../components/minicomponents/Mentorscomponents/RecentMentors.vue';

</script>

<template>
    <header class=" bg-[#FAFAFA] flex-1 flex  flex-col font-PlusJakartaSans text-xl items-stretch overflow-y-scroll hover:overflow-scroll max-w-full scroll-smooth ">
        <div>
        <div class="bg-white">
            <ExploreTask text="Explore Mentors" category="Category" sort="Sort By : Popular">
                <img src="src/assets/images/Dashboardpictures/Notification.png" alt="" class="w-[24px]">
                <template #slot3>
                    <img src="src/assets/images/Dashboardpictures/Profil.png" alt="" class="w-[48px]">
                </template>
                <template #slot4>
                    <img src="src/assets/images/TaskPictures/search-normal.png" alt="" class="w-[20px]">
                </template>
                <template #slot5> 
                    <img src="src/assets/images/TaskPictures/element-1.png" alt="" class="w-[24px]"></template>
                <template #slot6>
                    <img src="src/assets/images/TaskPictures/sort.png" alt="" class="w-[24px]">
                </template>
            </ExploreTask>
        </div>
        <div class="p-8">
            <CarouselButton>
                <h1>Recent Mentors</h1>
            </CarouselButton>
        </div>
        <div class="flex flex-col">
           <RecentMentors/>
        </div>
        <h1 class="text-[26px] font-bold p-8">Mentors</h1>
        <div class="flex flex-col gap-10 items-stretch">                       
            <MentorsPart/>
        </div>
    </div>
    </header>
</template>