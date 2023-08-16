<script setup>
import MessageFallowers from './minicomponents/Message-Fallowers.vue';
</script>

<template>
    <header class="flex flex-col p-8 gap-10">
        <div class="flex justify-between border-2">
            <div>
                <h1 class="text-3xl font-bold">Message</h1>
            </div>
            <div class="flex gap-8">
                <button> <img src="src/assets/images/Dashboardpictures/Notification.png" alt="" class="w-8"></button>
                <img src="src/assets/images/Dashboardpictures/Profil.png" alt="" class="w-16">
            </div>
        </div>
        <div class="border-2">
            <div class="rounded-xl ">
                <input type="text" placeholder="Search name" class="text-3xl">
                <button> <img src="src/assets/images/TaskPictures/search-normal.png" alt="" class="w-8"></button>
            </div>
            <div class="flex">
                <div class="flex flex-col gap-10">
                    <MessageFallowers name="Angelie Crison" comment="Thank you very much. I’m glad ..." lastseen="1 m Ago">
                        <img src="src/assets/images/Messagepictures/AngelieCrison.png" alt=""  class="w-24 aspect-square">
                    </MessageFallowers>
                    <MessageFallowers name="Jakob Saris" comment="You : Sure! let me tell you about w…" lastseen="2 m Ago">
                        <img src="src/assets/images/Messagepictures/JakobSaris.png" alt=""  class="w-24 aspect-square">
                    </MessageFallowers>
                    <MessageFallowers name="Emery Korsgard" comment="Thank’s. You are very helpful..." lastseen="3 m Ago3 m Ago">
                        <img src="src/assets/images/Messagepictures/EmeryKorsgard.png" alt="" class="w-24 aspect-square">
                    </MessageFallowers>
                    <MessageFallowers name="Jeremy Zucker" comment="You : Sure! let me teach you about  ..." lastseen="4 m Ago">
                        <img src="src/assets/images/Messagepictures/JeremyZucker.png" alt="" class="w-24 aspect-square">
                    </MessageFallowers>
                    <MessageFallowers name="Nadia Lauren" comment="Is there anything I can help? Just ..." lastseen="5 m Ago">
                        <img src="src/assets/images/Messagepictures/NadiaLauren.png" alt="" class="w-24 aspect-square">
                    </MessageFallowers>
                    <MessageFallowers name="Jason Statham" comment="You : Sure! let me share about..." lastseen="6 m Ago">
                        <img src="src/assets/images/Messagepictures/JasonStatham.png" alt="" class="w-24 aspect-square">
                    </MessageFallowers>
                    <MessageFallowers name="Angel Kimberly" comment="Okay. I know very well about it..." lastseen="7 m Ago">
                        <img src="src/assets/images/Messagepictures/AngelKimberly.png" alt="" class="w-24 aspect-square">
                    </MessageFallowers>
                </div>
            </div>
        </div>
    </header>
</template>