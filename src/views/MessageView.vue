<script setup>
import MessageFallowers from '../components/minicomponents/Message-Fallowers.vue';
import MessagePeople from '../components/minicomponents/Message-People.vue';
import MessageChat from '../components/minicomponents/MessageChat.vue';
</script>

<template>
    <header class=" bg-white flex-1 flex  flex-col font-PlusJakartaSans text-xl items-stretch overflow-y-scroll hover:overflow-scroll max-w-full scroll-smooth">
        <div class="flex flex-col">
            <div class="flex justify-between border-2 p-8">
                <div>
                    <h1 class="text-[24px] font-bold">Message</h1>
                </div>
                <div class="flex gap-8">
                    <button> <img src="src/assets/images/Dashboardpictures/Notification.png" alt="" class="w-8"></button>
                    <img src="src/assets/images/Dashboardpictures/Profil.png" alt="" class="w-16">
                </div>
            </div>
            <div class="border-2 p-[24px]  flex flex-col gap-6 ">
                <div class="flex flex-row">
                    <div class="flex flex-col gap-[30px]">
                        <div class="rounded-xl border-2 flex justify-between">
                            <input type="text" placeholder="Search name" class="text-[14px]">
                            <button> <img src="src/assets/images/TaskPictures/search-normal.png" alt="" class="w-8"></button>
                        </div>
                        <MessageFallowers name="Angelie Crison" comment="Thank you very much. I’m glad ..." lastseen="1 m Ago">
                            <img src="src/assets/images/Messagepictures/AngelieCrison.png" alt=""  class="w-[48px]">
                        </MessageFallowers>
                        <MessageFallowers name="Jakob Saris" comment="You : Sure! let me tell you about w…" lastseen="2 m Ago">
                            <img src="src/assets/images/Messagepictures/JakobSaris.png" alt=""  class="w-[48px] aspect-square">
                        </MessageFallowers>
                        <MessageFallowers name="Emery Korsgard" comment="Thank’s. You are very helpful..." lastseen="3 m Ago3 m Ago">
                            <img src="src/assets/images/Messagepictures/EmeryKorsgard.png" alt="" class="w-[48px] aspect-square">
                        </MessageFallowers>
                        <MessageFallowers name="Jeremy Zucker" comment="You : Sure! let me teach you about  ..." lastseen="4 m Ago">
                            <img src="src/assets/images/Messagepictures/JeremyZucker.png" alt="" class="w-[48px] aspect-square">
                        </MessageFallowers>
                        <MessageFallowers name="Nadia Lauren" comment="Is there anything I can help? Just ..." lastseen="5 m Ago">
                            <img src="src/assets/images/Messagepictures/NadiaLauren.png" alt="" class="w-[48px] aspect-square">
                        </MessageFallowers>
                        <MessageFallowers name="Jason Statham" comment="You : Sure! let me share about..." lastseen="6 m Ago">
                            <img src="src/assets/images/Messagepictures/JasonStatham.png" alt="" class="w-[48px] aspect-square">
                        </MessageFallowers>
                        <MessageFallowers name="Angel Kimberly" comment="Okay. I know very well about it..." lastseen="7 m Ago">
                            <img src="src/assets/images/Messagepictures/AngelKimberly.png" alt="" class="w-[48px] aspect-square">
                        </MessageFallowers>
                    </div>
                    <div class="bg-[#F5F5F7] border-2">
                        <MessagePeople name="Angelie Crison" online="Online"></MessagePeople>
                        <MessageChat></MessageChat>
                    </div>                    
                </div>
            </div>
        </div>
    </header>
</template>  
 


