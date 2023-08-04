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
    class="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-button_purple focus:ring-4 outline-3 outline outline-background"
    :id="id"
    :type="type"
    :placeholder="placeholder"
  />
</template>