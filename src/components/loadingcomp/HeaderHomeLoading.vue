<script setup>
import CCircle from '/src/components/ui/c-circle.vue'
import SSearch from '../ui/loadingitems/s-search.vue';
import SCategory from '../ui/loadingitems/s-category.vue';
</script>

<!-- <template>
  <div class="flex">
    <SideBar />
  <div class="h-48 p-8 w-full bg-white animate-pulse">
    <div class="justify-between relative flex items-center">
      <div class="w-28 h-4 bg-indigo-500 bg-opacity-30 rounded-2xl"></div>
      <div class="gap-6 items-start flex">
        <CCircle img="/src/assets/icons/notification_loading.vue">
          </CCircle>
         <CCircle img="/src/assets/icons/user_avatar_loading.vue">
          </CCircle>
    </div>
    </div>
    <div class="justify-between items-center relative flex pt-6">
    <div
      class="w-60 h-4 left-0 top-[26px] bg-indigo-500 bg-opacity-10 rounded-2xl justify-start items-center inline-flex"
    >
    </div>
  </div>
</div>
</div>
</template> -->

<template>
  <div class="p-8 -mx-8 animate-pulse">
    <div class="mt-8 justify-between flex items-center">
      <div>
        <div class="w-28 h-4 bg-indigo-500 bg-opacity-30 rounded-2xl"></div>
        <div
          class="w-60 h-4 left-0 top-[26px] mt-2 bg-indigo-500 bg-opacity-10 rounded-2xl justify-start items-center inline-flex"
        ></div>
      </div>
      <div class="flex items-center mr-8">
        <CCircle class="mr-8"> </CCircle>
        <CCircle> </CCircle>
      </div>
    </div>
    <div class="justify-between items-center flex pr-8 pt-6">
      <slot name="searchload" >
      </slot>
      <div class="justify-between gap-6 flex">
        <slot name="categoryload">
        </slot>
      </div>
    </div>
  </div>
</template>
