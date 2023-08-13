<script setup>
import ArrowLeftItem from '/src/assets/icons/arrow-left.vue'
import ArrowRightItem from '/src/assets/icons/arrow-right.vue'
</script>
<template>
  <div class="w-[23.25rem] h-[10rem] bg-Primary-0 rounded-xl p-6">
    <div class="justify-between items-center flex">
      <ArrowLeftItem class="w-5 h-5" />
      <div>Февраль 2023</div>
      <ArrowRightItem class="w-5 h-5" />
    </div>
    <div class="justify-start items-start gap-4 mt-9 mb-5 inline-flex">
      <div class="flex-col justify-center items-center gap-3 inline-flex">
        <div class="w-3 h-4 text-center text-gray-900 text-xs font-medium">П</div>
        <div class="w-8 h-8 bg-neutral-100 rounded-full justify-center items-center inline-flex">
          <div class="w-4 h-4 text-center text-gray-900 text-xs font-medium">10</div>
        </div>
      </div>
      <div class="flex-col justify-center items-center gap-3 inline-flex">
        <div class="w-3 h-4 text-center text-gray-900 text-xs font-medium">В</div>
        <div class="w-8 h-8 bg-neutral-100 rounded-full justify-center items-center inline-flex">
          <div class="w-4 h-4 text-center text-gray-900 text-xs font-medium">11</div>
        </div>
      </div>
      <div
        class="flex-col justify-center items-center gap-3 inline-flex rounded-full p-1 -m-1 bg-black"
      >
        <div class="w-3 h-4 text-center text-white text-xs p-0 font-medium">С</div>
        <div class="w-8 h-8 bg-Primary-500 justify-center rounded-full items-center inline-flex">
          <div class="w-4 h-4 text-center text-white text-xs font-medium">12</div>
        </div>
      </div>
      <div class="flex-col justify-center items-center gap-3 inline-flex">
        <div class="w-3 h-4 text-center text-gray-900 text-xs font-medium">Ч</div>
        <div class="w-8 h-8 bg-neutral-100 rounded-full justify-center items-center inline-flex">
          <div class="w-4 h-4 text-center text-gray-900 text-xs font-medium">13</div>
        </div>
      </div>
      <div class="flex-col justify-center items-center gap-3 inline-flex">
        <div class="w-3 h-4 text-center text-gray-900 text-xs font-medium">П</div>
        <div class="w-8 h-8 bg-neutral-100 rounded-full justify-center items-center inline-flex">
          <div class="w-4 h-4 text-center text-gray-900 text-xs font-medium">14</div>
        </div>
      </div>
      <div class="flex-col justify-center items-center gap-3 inline-flex">
        <div class="w-3 h-4 text-center text-gray-900 text-xs font-medium">С</div>
        <div class="w-8 h-8 bg-neutral-100 rounded-full justify-center items-center inline-flex">
          <div class="w-4 h-4 text-center text-gray-900 text-xs font-medium">15</div>
        </div>
      </div>
      <div class="flex-col justify-center items-center gap-3 inline-flex">
        <div class="w-3 h-4 text-center text-gray-900 text-xs font-medium">В</div>
        <div class="w-8 h-8 bg-neutral-100 rounded-full justify-center items-center inline-flex">
          <div class="w-4 h-4 text-center text-gray-900 text-xs font-medium">16</div>
        </div>
      </div>
    </div>
  </div>
</template>
