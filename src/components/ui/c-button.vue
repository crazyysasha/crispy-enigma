<script setup>
defineProps({
  label: {}
})
</script>
<template>
  <button
    class="mt-6 bg-button_purple rounded-xl flex items-center justify-center h-12 px-6 w-64 text-white hover:bg-button_purple/80 transition duration-150"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>
