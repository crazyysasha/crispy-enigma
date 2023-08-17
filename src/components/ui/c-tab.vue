<script setup>
defineProps({
  label: {},
})
</script>
<template>
    <div class="h-9 justify-start items-start gap-6 inline-flex">
      <div class="flex-col justify-center items-center gap-3 inline-flex">
        <div class="px-3 flex-col justify-center items-center flex">
          <div
            class="text-center text-sm font-medium active:text-black text-Secondary-300 leading-tight"
          >
            {{ label }}
          </div>
        </div>
        <div class="self-stretch h-0.5 bg-indigo-500"></div>
      </div>
    </div>
</template>
