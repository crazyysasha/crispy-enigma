<script setup>
import SLine from '/src/components/ui/loadingitems/s-line.vue'
</script>
<template>
  <div class="w-[12.125rem] h-[13.375rem] min-w-min p-5 bg-Secondary-500 text-white rounded-xl">
    <div class="animate-pulse">
    <SLine />
    <SLine class="mt-4 w-16 h-[40px] flex" />
    <div class="flex items-center ">
      <div class="mt-6 items-center justify-center flex">
        <svg
          class="items-center justify-center"
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
        >
          <path
            opacity="0.1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36 70C54.7777 70 70 54.7777 70 36C70 17.2223 54.7777 2 36 2C17.2223 2 2 17.2223 2 36C2 54.7777 17.2223 70 36 70Z"
            stroke="#546FFF"
            stroke-width="3"
          />
        </svg>
      </div>
      <div class="flex-col ml-4 mt-4">
        <SLine class="w-16" />
        <SLine class="w-12 mt-2"/>
      </div>
      </div>
    </div>
  </div>
</template>
