<script setup>
import CarouselButton from './Carousel-button.vue';
import CarouselUsers from './Carousel-Users.vue';
import {Swiper,SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import {ref} from 'vue'
const onSwiper=(swiper)=>{
    console.log(swiper);
}
const onSlideChange=()=>{
    console.log('Slide change')
}
const isActiveSW=ref(false)
</script>
<template>
    <div class="flex flex-col gap-[20px] p-8">
        <CarouselButton>
            <h1>Monthly Mentors</h1>
        </CarouselButton>
    </div>
    <div class="flex p-8">
        <swiper
        :slides-per-view="2"
        :space-between="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
            <swiper-slide>

                <CarouselUsers  name="Curious George" job="UI UX Design" task="40 Task" reviews="4,7  (750 Reviews)" fallow="+Falowed">
                    <img src="src/assets/images/Dashboardpictures/CuriousGeorge.png" alt="" class="w-[48px] aspect-square">
                </CarouselUsers>
            </swiper-slide>
        
            <swiper-slide>
                <CarouselUsers name="Abraham Lincoln" job="3D Design" task="32 Task" reviews="4,9  (510 Reviews)" fallow="Fallow">
                    <img src="src/assets/images/Dashboardpictures/AbrahamLincoln.png" alt="" class="w-[48px]">
                </CarouselUsers>
            </swiper-slide>
         
            <swiper-slide>
                <CarouselUsers name="Angel Kimberly" job="3D Design" task="50 Task" reviews="3,9  (410 Reviews)" fallow="Fallow">
                    <img src="src/assets/images/Messagepictures/AngelKimberly.png" alt="" class="w-[48px]">
                </CarouselUsers>
            </swiper-slide>  
            <swiper-slide>
                <CarouselUsers name="Angelie Crison" job="UI UX Design" task="45 Task" reviews="3,9  (410 Reviews)" fallow="Fallow">
                    <img src="src/assets/images/Messagepictures/AngelieCrison.png" alt="" class="w-[48px]">
                </CarouselUsers>
            </swiper-slide>   
        </swiper>
    </div>

    
</template>