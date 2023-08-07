<script setup>
defineProps({
  label: {}
})
</script>
<template>
  <button
    class="mt-6 bg-Primary-500 rounded-xl flex items-center justify-center h-12 px-6 w-64 text-white hover:bg-Primary-500/80 transition duration-150"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>
