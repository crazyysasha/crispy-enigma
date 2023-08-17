<script setup>
import HeaderHome from '@/components/ui/HeaderHome.vue'
import CTab from '@/components/ui/c-tab.vue'
import CToggle from '@/components/ui/c-toggle.vue'
import CButton from '@/components/ui/c-button.vue'
</script>

<template>
  <div>
    <div class="flex flex-col gap-6 mt-8 font-semibold text-sm">
      <div class="flex items-center gap-5">
        <CToggle />
        <div>Сообщения</div>
      </div>
      <div class="flex items-center gap-5">
        <CToggle />
        <div>Обновление задач</div>
      </div>
      <div class="flex items-center gap-5">
        <CToggle />
        <div>Дедлайн задач</div>
      </div>
      <div class="flex items-center gap-5">
        <CToggle />
        <div>Помощь ментата</div>
      </div>
    </div>
    <div class="mt-16">
      <CButton label="Сохранить" />
    </div>
  </div>
</template>
