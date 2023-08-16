<script setup>
import CarouselUsers from './Carousel-Users.vue';
</script>

<template>
    <div class="flex justify-between">  
        <div class="bg-white rounded-xl p-8 ">
            <CarouselUsers name="Jessica Jane" job="Web Developer" fallow="+ Follow" task="40 Task" reviews="4,7  (750 Reviews)">
                <img src="src/assets/images/Mentorspictures/JessicaJane.png" alt="">
                <template #portfolio>
                    <h1>Hi, I'm Jessica Jane. I am a doctoral student at <br> Harvard University majoring in Web . . . </h1>
                </template>
            </CarouselUsers>
        </div>
        <div class="bg-white rounded-xl p-8 ">
            <CarouselUsers name="Alex Stanton" job="UI / UX Designer" fallow="Followed " task="60 Task" reviews="4,9  (970 Reviews)">
                <img src="src/assets/images/Mentorspictures/AlexStanton.png" alt="">
                <template #portfolio>
                    <h1>Hi, I'm Alex Stanton. I am a doctoral student <br> at Oxford University majoring in UI / UX  . . . </h1>
                </template>
            </CarouselUsers>
        </div>
        <div class="bg-white rounded-xl p-8">
            <CarouselUsers name="Antoine Griezmann" job="Android Developer" fallow="+ Follow " reviews="4,8 (830 Reviews)" task="50 Task">
                <img src="src/assets/images/Mentorspictures/AntoineGriezmann.png" alt="">
                <template #portfolio>
                    <h1>Hi, I'm Antoine Griezmann. I'm an Android <br> Developer at Google company . . .</h1>
                </template>
            </CarouselUsers>
        </div>
    </div>
    <div class="flex justify-between">
        <div class="bg-white rounded-xl p-8">
            <CarouselUsers name="Anna White" job="3D Design" task="60 Task" fallow="Followed " reviews="4,8 (870 Reviews)">
                <img src="src/assets/images/Mentorspictures/AnnaWhite.png" alt="Anna White">
                <template #portfolio>
                    <h1>Hi, I'm Anna White. I'm a professional 3D <br> Designer at Blender company . . .</h1>
                </template>
            </CarouselUsers>
        </div>
        <div class="bg-white rounded-xl p-8">
            <CarouselUsers name="Richard Kyle" job="2D Design" fallow="+ Follow" reviews="4,7 (730 Reviews)" task="60 Task">
                <img src="src/assets/images/Mentorspictures/RichardKyle.png" alt="Richard Kyle">
                <template #portfolio>
                    <h1>Hi, I'm Richard Kyle. I'm a professional 2D <br> Designer at Photoshop company . . .</h1>
                </template>
            </CarouselUsers>
        </div>
        <div class="bg-white rounded-xl">
            <CarouselUsers name="Julia Philips" job="IOS Developer" fallow="+ Follow"  task="60 Task" reviews="4,9 (910 Reviews)">
                <img src="src/assets/images/Mentorspictures/JuliaPhilips.png" alt="Julia Philips">
                <template #portfolio>
                    <h1>Hi, I'm Julia Philips. I'm a senior manager at  <br> Apple company . . .</h1>
                </template>
            </CarouselUsers>
        </div>
    </div>
</template>