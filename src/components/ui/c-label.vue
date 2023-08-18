<script setup>
defineProps({
    label: {}
})
// const loadUserData = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, 3000)
//   })
// }
// await loadUserData()
</script>
<template>
    <div class="font-semibold text-2xl flex">
        <div>
            {{ label }}
        </div>
    </div>
</template>