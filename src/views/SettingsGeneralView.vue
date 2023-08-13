<script setup>
import HeaderHome from '../components/ui/HeaderHome.vue'
import CTab from '../components/ui/c-tab.vue'
import CInput2 from '../components/ui/c-input2.vue'
import CPickButton from '../components/ui/c-pickbutton.vue'
import CButton from '../components/ui/c-button.vue'
import HeaderHomeLoading from '../components/loadingcomp/HeaderHomeLoading.vue';
</script>

<template>
  <div>
    <Suspense>
    <template #default>
      <HeaderHome label="Настройки" class="sticky top-0 bg-white border-[#F5F5F7] border-b-2">
        </HeaderHome>
    </template>
    <template #fallback>
      <HeaderHomeLoading class="bg-white border-[#F5F5F7] border-b-2" />
    </template>
    </Suspense>
    <div>
      <div class="flex py-8 pr-8">
        <div class="w-full h-full pl-8 pb-8 bg-Primary-0 rounded-xl">
          <div class="pt-[3.28rem] gap-6 flex border-b">
            <CTab label="Основные" to="/settings"></CTab>
            
            <router-link :to="{name: 'notifications'}">
              <CTab label="Уведомления" />
            </router-link>
          </div>
          <div class="mt-8">
            <div class="font-semibold">Язык</div>
            <CInput2 label="Русский" class="mt-4" />
          </div>
          <div class="mt-8">
            <div class="font-semibold">Часовой пояс</div>
            <CInput2 label="Ташкент (UTC+2)" class="mt-4" />
          </div>
          <div class="mt-8">
            <div class="font-semibold">Часовой формат</div>
            <div class="flex gap-8">
              <CPickButton class="mt-4" label="24 часа" />
              <CPickButton class="mt-4" label="12 часа" />
            </div>
            <CButton class="mt-16" label="Сохранить" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
