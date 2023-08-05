<script setup>
defineProps({
    img: {}
})
</script>

<template>
        <div
        class="rounded-full border-2 border-[#F5F5F7] w-14 h-14 justify-center items-center flex"
      >
          <div>
            <img :src="img" alt="">
          </div>
        </div>
</template>