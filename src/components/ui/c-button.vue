<script setup>
defineProps({
  label: {}
})
</script>
<template>
  <button
    class="mt-6 bg-Primary-500 rounded-xl flex items-center justify-center h-12 w-64 text-white hover:bg-Primary-500/80 transition-all duration-500 transform hover:scale-110 px-6 py-2 m-4"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>
