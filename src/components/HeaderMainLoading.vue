<script setup>
import CCircle from '/src/components/ui/c-circle.vue'
import SideBar from '/src/components/SideBarLoading.vue'
import CarouselLoading from '/src/components/carousel-itemLoading.vue'
// import AvatarPath from '/src/assets/icons/element_1.svg'
</script>

<template>
  <div class="flex flex-1">
    <SideBar />
  <div class="h-48 p-8 w-full bg-white animate-pulse">
    <div class="justify-between relative flex items-center">
      <div class="w-28 h-4 bg-indigo-500 bg-opacity-30 rounded-2xl"></div>
      <div class="gap-6 items-start flex">
        <CCircle img="/src/assets/icons/notification_loading.svg">
          </CCircle>
         <CCircle img="/src/assets/icons/user_avatar_loading.svg">
          </CCircle>
    </div>
    </div>
    <div class="justify-between items-center relative flex pt-6">
    <div
      class="w-60 h-4 left-0 top-[26px] bg-indigo-500 bg-opacity-10 rounded-2xl justify-start items-center inline-flex"
    >
    </div>
  </div>
  <div class="mt-24">
  <CarouselLoading />
</div>
</div>
</div>
</template>
