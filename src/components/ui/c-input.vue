<script setup>
defineProps({
    placeholder: {
        type: String,
        default: 'ERROR'
    },
  label: {
    type: String,
    default: 'ERROR',
    required: true
  },
  type: {
    type: String,
    default: 'text',
    validator(val) {
        return ['text', 'password'].includes(val);
    }
  }
})

const id = Math.floor(Math.random() * 100000000)
</script>
<template>
  <label class="block text-gray-700 text-sm font-bold mb-2" :for="id">{{ label }}</label>
  <input
    class="w-96 h-12 px-5 py-4 bg-white rounded-lg border border-neutral-100 justify-between items-center gap-2.5 inline-flex"
    :id="id"
    :type="type"
    :placeholder="placeholder"
  />
</template>