<script setup>
import CLabel from '../components/ui/c-label.vue'
import CTaskToday from '../components/ui/c-tasktoday.vue'
</script>

<template>
    <div class="flex w-full">
        <div class=" bg-white rounded-xl my-8 mr-8 flex-1 flex flex-col">
            <img src="/src/assets/temps/Image.png" />
            <div class="p-6">
            <CLabel class="font-semibold text-3xl" label="Создавая крутые мобильные приложения" />
            <CLabel class="text-Secondary-400 text-sm font-medium leading-6 mt-4" label="UX/UI Дизайн" />
        </div>
        </div>
        <div class="bg-[#F5F5F7] sticky h-full min-h-screen top-0">
            <div class="p-8">
        <CTaskToday class="mt-8" />
      </div>
        </div>
    </div>
</template>