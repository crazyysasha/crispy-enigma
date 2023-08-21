<script setup>
import CarouselButton from './Carousel-button.vue';
import CarouselUsers from './Carousel-Users.vue';
import CarouselItemsVue from './Carousel-items.vue';

</script>


<template>
    <div class="flex flex-col p-8 gap-[20px]">
        <CarouselButton>
             <h1>Monthly Mentors</h1>
        </CarouselButton>   
            <div class="flex  gap-[2rem] justify-between"> 
               <CarouselUsers  name="Curious George" job="UI UX Design" task="40 Task" reviews="4,7  (750 Reviews)" fallow="+Falowed">
                <img src="src/assets/images/Dashboardpictures/CuriousGeorge.png" alt="" class="w-[48px] aspect-square">
               </CarouselUsers>
               <CarouselUsers name="Abraham Lincoln" job="3D Design" task="32 Task" reviews="4,9  (510 Reviews)" fallow="Fallow">
                    <img src="src/assets/images/Dashboardpictures/AbrahamLincoln.png" alt="" class="w-[48px]">
               </CarouselUsers>
            </div> 
            <div class="flex flex-col gap-[20px]">           
                     <CarouselButton>
                         <h2>Upcoming Task</h2>
                     </CarouselButton>
                     <div class="flex items-stretch justify-between">
                        <div class="flex-col">
                     <CarouselItemsVue whatdoing="Creating Mobile App Design" whatjob="UI UX Design" lastseen="3 Days Left">
                         <img src="src/assets/images/Dashboardpictures/Image(1).png" alt="" class="w-[280px] h-[110px]">
                         <template #slot2>
                            <img src="src/assets/images/Dashboardpictures/Userspictures2.svg" alt="" class="w-[72px] aspect-square">
                         </template>
                     </CarouselItemsVue>
                    </div>
                    <div>
                     <CarouselItemsVue whatdoing="Creating Perfect Website" whatjob="Web Developer" lastseen="4 Days Left">
                        <img src="src/assets/images/Dashboardpictures/Image(2).png" alt="" class="w-[280px] h-[110px]">
                        <template #slot2>
                            <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                        </template>
                     </CarouselItemsVue>
                    </div>
               </div>
            </div>
        </div>        
  
     
    
</template>