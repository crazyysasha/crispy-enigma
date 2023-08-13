<script setup>
import HeaderHome from '../components/ui/HeaderHome.vue'
import CTab from '../components/ui/c-tab.vue'
import CToggle from '../components/ui/c-toggle.vue'
import CButton from '../components/ui/c-button.vue'
</script>

<template>
  <div>
    <HeaderHome label="Настройки" class="sticky top-0 bg-white border-[#F5F5F7] border-y-2" />
    <div>
      <div class="flex py-8 pr-8">
        <div class="w-full h-full pl-8 pb-8 bg-Primary-0 rounded-xl">
          <div class="pt-[3.28rem] gap-6 flex">
            <router-link to="/settings">
              <CTab label="Основные" />
            </router-link>
            <router-link to="/notifications">
              <CTab label="Уведомления" />
            </router-link>
          </div>
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
          <CButton class="mt-16" label="Сохранить" />
        </div>
      </div>
    </div>
  </div>
</template>
