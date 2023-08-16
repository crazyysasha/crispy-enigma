<script setup>
import ExploreTask from './minicomponents/ExploreTask.vue';
import CarouselButton from './minicomponents/Carousel-button.vue';
import CarouselUsers from './minicomponents/Carousel-Users.vue';
import MentorsPart from './minicomponents/MentorsPart.vue';
</script>

<template>
    <div class="flex flex-col items-stretch ">
        <div class="bg-white">
            <ExploreTask text="Explore Mentors" category="Category" sort="Sort By : Popular">
                <img src="src/assets/images/Dashboardpictures/Notification.png" alt="" class="w-8">
                <template #slot3><img src="src/assets/images/Dashboardpictures/Profil.png" alt="" class="w-16"></template>
                <template #slot4><img src="src/assets/images/TaskPictures/search-normal.png" alt="" class="w-8"></template>
                <template #slot5> <img src="src/assets/images/TaskPictures/element-1.png" alt=""></template>
                <template #slot6><img src="src/assets/images/TaskPictures/sort.png" alt="" class="w-16"></template>
            </ExploreTask>
        </div>
        <div class="p-8">
            <CarouselButton>
                <h1>Recent Mentors</h1>
            </CarouselButton>
        </div>
        <div class="flex flex-col">
            <div class=" flex p-8 justify-between">
                <div class="bg-white rounded-xl">
                    <CarouselUsers name="Jessica Jane" job="Web Developer" fallow="+ Follow" task="40 Task" reviews="4,7  (750 Reviews)">
                        <img src="src/assets/images/Mentorspictures/JessicaJane.png" alt="">
                    </CarouselUsers>
                </div>
                <div class="bg-white rounded-xl">
                    <CarouselUsers name="Abraham Lincoln" job="3D Design" task="32 Task" fallow="Followed" reviews="4,9  (510 Reviews)">
                        <img src="src/assets/images/Dashboardpictures/AbrahamLincoln.png" alt="AbrahamLincoln">
                    </CarouselUsers>
                </div>
                <div class="bg-white rounded-xl">
                    <CarouselUsers name="Curious George" job="UI UX Design" fallow="+ Follow " reviews="4,7  (750 Reviews)" task="40 Task">
                        <img src="src/assets/images/Dashboardpictures/CuriousGeorge.png" alt="CuriousGeorge.png">
                    </CarouselUsers>
                </div>
            </div>
        </div>
        <h1 class="text-3xl font-bold p-8">Mentors</h1>
        <div class="flex flex-col gap-10 items-stretch">                       
            <MentorsPart></MentorsPart>
        </div>
    </div>
</template>