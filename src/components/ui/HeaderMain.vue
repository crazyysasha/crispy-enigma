<script setup>
import CCategory from '/src/components/ui/c-category.vue'
import CCircle from '/src/components/ui/c-circle.vue'
// import AvatarPath from '/src/assets/icons/element_1.svg'
</script>

<template>
  <div class="h-48 p-8 w-full bg-white">
    <div class="justify-between relative flex">
      <div class="font-semibold text-2xl">Explore Tasks</div>
      <div class="items-start justify-between flex gap-6">
      <div
        class="rounded-full border-2 border-[#F5F5F7] w-14 h-14 justify-center items-center flex"
      >
          <div>
            <img src="/src/assets/icons/notification.svg" alt="" />
          </div>
        </div>
        <CCircle img="/src/assets/icons/user_avatar.svg">
          </CCircle>
    </div>
    </div>
    <div class="justify-between relative flex pt-6">
    <div
      class="w-[480px] h-14 border border-[#F5F5F7] border-1 rounded-xl justify-start items-center inline-flex gap-[300px]"
    >
      <div class="p-7 text-xs text-Secondary-400">Search Task</div>
      <div>
        <img src="/src/assets/icons/search_normal.svg" alt="" />
      </div>
    </div>
    <CCategory label="Category" img="/src/assets/icons/element_1.svg">
    </CCategory>
  </div>
</div>
</template>
