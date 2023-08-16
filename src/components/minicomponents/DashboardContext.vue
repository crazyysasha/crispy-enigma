<script setup>
import CarouselButton from './Carousel-button.vue';
import CarouselUsers from './Carousel-Users.vue';
import CarouselItemsVue from './Carousel-items.vue';

</script>


<template>
    <div class="flex flex-col gap-10 " >
        <CarouselButton>
             <h1>Monthly Mentors</h1>
        </CarouselButton>   
        <div class="flex gap-12">
        <div class="flex flex-col gap-5">
            <div class="flex  gap-5">           
               <CarouselUsers  name="Curious George" job="UI UX Design" task="40 Task" reviews="4,7  (750 Reviews)" fallow="+Falowed">
                <img src="src/assets/images/Dashboardpictures/CuriousGeorge.png" alt="">
               </CarouselUsers>
               <CarouselUsers name="Abraham Lincoln" job="3D Design" task="32 Task" reviews="4,9  (510 Reviews)" fallow="Fallow">
                    <img src="src/assets/images/Dashboardpictures/AbrahamLincoln.png" alt="">
               </CarouselUsers>
            </div> 
            <div class="flex flex-col gap-8 ">           
                     <CarouselButton>
                         <h2>Upcoming Task</h2>
                     </CarouselButton>
                     <div class="flex gap-10 items-stretch  ">
                     <CarouselItemsVue whatdoing="Creating Mobile App Design" whatjob="UI UX Design" lastseen="3 Days Left">
                         <img src="src/assets/images/Dashboardpictures/Image(1).png" alt="" class="max-w-lg">
                         <template #slot2>
                            <img src="src/assets/images/Dashboardpictures/Userspictures2.svg" alt="" class="w-36">
                         </template>
                     </CarouselItemsVue>
                     <CarouselItemsVue whatdoing="Creating Perfect Website" whatjob="Web Developer" lastseen="4 Days Left">
                        <img src="src/assets/images/Dashboardpictures/Image(2).png" alt="" class="max-w-lg">
                        <template #slot2>
                            <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-36">
                        </template>
                     </CarouselItemsVue>
               </div>
            </div>
        </div>        
    </div>
    </div>   
     
    
</template>