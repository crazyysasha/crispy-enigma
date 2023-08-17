<script setup>
import HeaderHome from '@/components/ui/HeaderHome.vue'
import CTab from '@/components/ui/c-tab.vue'
import CInput2 from '@/components/ui/c-input2.vue'
import CPickButton from '@/components/ui/c-pickbutton.vue'
import CButton from '@/components/ui/c-button.vue'
import HeaderHomeLoading from '@/components/loadingcomp/HeaderHomeLoading.vue';
</script>

<template>
    <div class="flex flex-col">
          <div class="mt-8">
            <div class="font-semibold">Язык</div>
            <CInput2 label="Русский" class="mt-4" />
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
            <div class="mt-16">
            <CButton label="Сохранить" />
</div>
          </div>
          </div>
</template>

