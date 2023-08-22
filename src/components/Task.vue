<script setup>
import ExploreTask from './minicomponents/ExploreTask.vue';
import CarouselButton from './minicomponents/Carousel-button.vue';
import CarouselItems from './minicomponents/Carousel-items.vue';
</script>
<!-- Must do swiper -->
<template>
    <main class="flex flex-col items-stretch">
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
                <div class="flex-1 flex flex-col items-center">
                    <div class="flex gap-[32px]">
                        <CarouselItems whatdoing="Creating Awesome Mobile Apps" whatjob="UI UX Design" lastseen="1 Hour">
                            <img src="src/assets/images/TaskPictures/Image(5).png" alt="" class="max-w-lg">
                            <template #slot2>
                                <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                            </template>
                        </CarouselItems>
                        <CarouselItems whatdoing="Creating Fresh Website" whatjob="Web Developer" lastseen="2 Hour">
                            <img src="src/assets/images/TaskPictures/Image(6).png" alt="" class="max-w-lg">
                            <template #slot2>
                                <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                            </template>
                        </CarouselItems>
                        <CarouselItems whatdoing="Creating Color Palletes" whatjob="UI UX Design" lastseen="1 Hour">
                            <img src="src/assets/images/TaskPictures/Image(7).png" alt="" class="max-w-lg">
                            <template #slot2>
                                <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                            </template>
                        </CarouselItems>
                    </div>
                </div>
            </div>   
            <div class="flex flex-col gap-[24px]">
                <CarouselButton>
                    <h1>New Task</h1>
                </CarouselButton> 
                <div class="flex flex-col items-center">
                    <div class="flex gap-[32px]">
                        <CarouselItems whatdoing="Creating Mobile App Design" whatjob="UI UX Design" lastseen="3 Days Left">
                            <img src="src/assets/images/TaskPictures/Image(8).png" alt="" class="max-w-lg">
                            <template #slot2>
                                <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                            </template>
                        </CarouselItems>
                        <CarouselItems whatdoing="Creating Perfect Website" whatjob="Web Developer" lastseen="4 Days Left">
                            <img src="src/assets/images/TaskPictures/Image(9).png" alt="" class="max-w-lg">
                            <template #slot2>
                                <img src="src/assets/images/Dashboardpictures/Userspictures2.svg" alt="" class="w-[72px] aspect-square">
                            </template>
                        </CarouselItems>
                        <CarouselItems whatdoing="Mobile App Design" whatjob="UI UX Design" lastseen="3 Days Left">
                            <img src="src/assets/images/TaskPictures/Image(10).png" alt="" class="max-w-lg">
                            <template #slot2>
                                <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                            </template>
                        </CarouselItems>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
