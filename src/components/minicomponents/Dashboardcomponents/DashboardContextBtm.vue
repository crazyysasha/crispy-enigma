<script setup>
import CarouselButton from '../Carousel-button.vue';
import CarouselItemsVue from '../Carousel-items.vue';
import {Swiper,SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import {ref} from 'vue';
const  Onswiper2=(swiper2)=>{
    console.log(swiper2);
}
const onSwiperChange2=()=>{
    console.log('Slide change')
}
const isActivitySlide=ref(false)
</script>

<template>
    <div class="flex flex-col gap-[20px] p-8">           
        <CarouselButton>
            <h2>Upcoming Task</h2>
        </CarouselButton>
    </div>
        <div class="flex p-8">
            <swiper
            :slides-per-view="2"
            :space-between="1"
            @swiper="Onswiper2"
            @slideChange="onSwiperChange2"
            >
                <swiper-slide>
                    <CarouselItemsVue whatdoing="Creating Mobile App Design" whatjob="UI UX Design" lastseen="3 Days Left">
                        <img src="src/assets/images/Dashboardpictures/Image(1).png" alt="" class="w-[280px] h-[110px]">
                        <template #slot2>
                            <img src="src/assets/images/Dashboardpictures/Userspictures2.svg" alt="" class="w-[72px] aspect-square">
                        </template>
                    </CarouselItemsVue>
                </swiper-slide> 
                <swiper-slide>
                    <CarouselItemsVue whatdoing="Creating Perfect Website" whatjob="Web Developer" lastseen="4 Days Left">
                        <img src="src/assets/images/Dashboardpictures/Image(2).png" alt="" class="w-[280px] h-[110px]">
                        <template #slot2>
                            <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                        </template>
                    </CarouselItemsVue>
                </swiper-slide>
                <swiper-slide>
                    <CarouselItemsVue whatdoing="Creating Color Palletes" whatjob="UI UX Design" lastseen="1 Hour">
                        <img src="src/assets/images/TaskPictures/Image(7).png" alt="" class="max-w-lg">
                        <template #slot2>
                            <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                        </template>
                    </CarouselItemsVue>
                </swiper-slide>
                <swiper-slide>
                    <CarouselItemsVue whatdoing="Creating Awesome Mobile Apps" whatjob="UI UX Design" lastseen="1 Hour">
                        <img src="src/assets/images/TaskPictures/Image(5).png" alt="" class="max-w-lg">
                        <template #slot2>
                            <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                        </template>
                    </CarouselItemsVue>
                </swiper-slide>
                <swiper-slide>
                    <CarouselItemsVue whatdoing="Creating Fresh Website" whatjob="Web Developer" lastseen="2 Hour">
                        <img src="src/assets/images/TaskPictures/Image(6).png" alt="" class="max-w-lg">
                        <template #slot2>
                            <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                        </template>
                    </CarouselItemsVue>
                </swiper-slide>
            </swiper>    
        </div>
</template>