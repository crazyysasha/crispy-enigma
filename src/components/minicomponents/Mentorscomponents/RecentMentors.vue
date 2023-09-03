<script setup>
import { Swiper,SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import CarouselUsers from '../Carousel-Users.vue';
</script>

<template>
    <div class=" flex p-8 justify-between">
        <swiper
            :slides-per-view="3"
            :space-between="2"
        >
            <swiper-slide>
                <div class="bg-white rounded-xl">
                    <CarouselUsers name="Jessica Jane" job="Web Developer" fallow="+ Follow" task="40 Task" reviews="4,7  (750 Reviews)">
                        <img src="src/assets/images/Mentorspictures/JessicaJane.png" alt="" class="w-[48px]">
                    </CarouselUsers>
                </div>
            </swiper-slide>
            <swiper-slide>    
                <div class="bg-white rounded-xl">
                    <CarouselUsers name="Abraham Lincoln" job="3D Design" task="32 Task" fallow="Followed" reviews="4,9  (510 Reviews)">
                        <img src="src/assets/images/Dashboardpictures/AbrahamLincoln.png" alt="AbrahamLincoln" class="w-[48px]">
                    </CarouselUsers>
                </div>
            </swiper-slide>
            <swiper-slide>    
                <div class="bg-white rounded-xl">
                    <CarouselUsers name="Curious George" job="UI UX Design" fallow="+ Follow " reviews="4,7  (750 Reviews)" task="40 Task">
                        <img src="src/assets/images/Dashboardpictures/CuriousGeorge.png" alt="CuriousGeorge.png" class="w-[48px]">
                    </CarouselUsers>
                </div>
            </swiper-slide>
            <swiper-slide>    
                <div class="bg-white rounded-xl">
                    <CarouselUsers name="Abraham Lincoln" job="3D Design" task="32 Task" fallow="Followed" reviews="4,9  (510 Reviews)">
                        <img src="src/assets/images/Dashboardpictures/AbrahamLincoln.png" alt="AbrahamLincoln" class="w-[48px]">
                    </CarouselUsers>
                </div>
            </swiper-slide>
            <swiper-slide>    
                <div class="bg-white rounded-xl">
                    <CarouselUsers name="Curious George" job="UI UX Design" fallow="+ Follow " reviews="4,7  (750 Reviews)" task="40 Task">
                        <img src="src/assets/images/Dashboardpictures/CuriousGeorge.png" alt="CuriousGeorge.png" class="w-[48px]">
                    </CarouselUsers>
                </div>
            </swiper-slide>    
    </swiper>
    </div>
</template>