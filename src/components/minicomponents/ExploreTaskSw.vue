<script setup>
import {ref} from 'vue'
import {Swiper,SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import CarouselItems from './Carousel-items.vue';
const onswiperTask=(swipertask)=>{
    console.log(swipertask)
}
const onswiperChangetask=()=>{
    console.log('Change Slide Tasks')
}

</script>

<template>
    <div class="">
        <swiper
        :slides-per-view="3"
        :space-between="1"
        @swipertask="onswiperTask"
        @slideChange="onswiperChangetask"   
        >
            <swiper-slide>
                <CarouselItems whatdoing="Creating Awesome Mobile Apps" whatjob="UI UX Design" lastseen="1 Hour">
                    <img src="src/assets/images/TaskPictures/Image(5).png" alt="" class="max-w-lg">
                    <template #slot2>
                        <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                    </template>
                </CarouselItems>
            </swiper-slide>
            <swiper-slide>
                <CarouselItems whatdoing="Creating Fresh Website" whatjob="Web Developer" lastseen="2 Hour">
                    <img src="src/assets/images/TaskPictures/Image(6).png" alt="" class="max-w-lg">
                    <template #slot2>
                        <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                    </template>
                </CarouselItems>
            </swiper-slide>
            <swiper-slide>    
                <CarouselItems whatdoing="Creating Color Palletes" whatjob="UI UX Design" lastseen="1 Hour">
                    <img src="src/assets/images/TaskPictures/Image(7).png" alt="" class="max-w-lg">
                    <template #slot2>
                        <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                    </template>
                </CarouselItems>
            </swiper-slide>
            <swiper-slide>    
                <CarouselItems whatdoing="Creating Color Palletes" whatjob="UI UX Design" lastseen="1 Hour">
                    <img src="src/assets/images/TaskPictures/Image(7).png" alt="" class="max-w-lg">
                    <template #slot2>
                        <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                    </template>
                </CarouselItems>
            </swiper-slide>      
            <swiper-slide>    
                <CarouselItems whatdoing="Creating Color Palletes" whatjob="UI UX Design" lastseen="1 Hour">
                    <img src="src/assets/images/TaskPictures/Image(7).png" alt="" class="max-w-lg">
                    <template #slot2>
                        <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                    </template>
                </CarouselItems>
            </swiper-slide>                               
    </swiper>
</div>

</template>