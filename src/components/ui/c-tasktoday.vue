<script setup>
import MoreItem from '/src/assets/icons/more.vue'
import TimeCircleItem from '/src/assets/icons/time-circle.vue'
import CButton from '/src/components/ui/c-button.vue'

import { ref, computed } from 'vue'

const progress = ref(Math.random() * 100)
setTimeout(() => {
  progress.value = Math.random() * 100
}, Math.random() * 10000)

const parent = ref()
const pixelProgress = computed(() => {
  console.dir(parent.value)
  if (parent.value) {
    console.dir(`${(progress.value * parent.value.clientWidth) / 100}px`)
    return `${(progress.value * parent.value.clientWidth) / 100}px`
  }
  return `0px`
})
</script>
<template>
  <div class="w-[23.25rem] min-h-fit bg-Primary-0 p-6 flex-none rounded-xl">
    <div class="font-semibold justify-between flex items-center text-xs">
      Task Today
      <MoreItem class="w-5 h-5" />
    </div>
    <div class="items-center justify-center flex-col mt-5">
      <img class="w-[20.25rem] h-[10rem] rounded-xl" src="/src/assets/temps/task-1.png" alt="" />
      <div class="mt-5"></div>
      <h3 class="font-semibold">Creating Awesome Mobile Apps</h3>
      <p class="text-xs mt-1 text-Secondary-400">UI UX Design</p>
    </div>
    <div class="progress pt-4">
      <div class="flex justify-between">
        <div>Progress</div>
        <div class="text-Primary-500 text-base">{{ Math.floor(progress) }}%</div>
      </div>
      <div class="relative py-3" ref="parent">
        <div class="h-2 w-full bg-[#BAC8FF] rounded-lg"></div>
        <div
          class="h-2 absolute top-1/2 -translate-y-1/2 bg-[#546FFF] rounded-lg transition-all duration-200 ease-in-out"
          :style="{ width: pixelProgress }"
        ></div>
        <div
          class="absolute top-1/2 -translate-y-1/2 h-4 aspect-square bg-[#546FFF] transition-all duration-200 ease-in-out border-2 border-white rounded-full -ml-2"
          :style="{ '--tw-translate-x': pixelProgress }"
        ></div>
        <!-- //TODO #13 не корректно отображается круг в safari -->
      </div>
    </div>
    <div class="flex mt-6 gap-2">
      <TimeCircleItem />
      1 Hour
    </div>
    <div class="flex items-center justify-center">
      <div class="mt-8 w-[20.25rem] h-1 rounded-xl bg-zinc-50"></div>
    </div>
    <div class="mt-8">
      <div class="flex justify-between items-center">
        <div class="font-semibold text-base">Детали Задачи</div>
        <div class="text-Secondary-400 text-xs">Фронт-ендэр</div>
      </div>
      <div class="mt-5">
        <div class="items-center gap-3 flex">
        <div class="w-9 h-9 bg-[#F5F5F7] rounded-xl flex items-center justify-center text-sm">1</div>
        <div class="text-sm">Понять что и как работает.</div>
      </div>
      <div class="mt-5">
        <div class="items-center gap-3 flex">
        <div class="w-9 h-9 bg-[#F5F5F7] rounded-xl flex items-center justify-center text-sm">2</div>
        <div class="text-sm">Сильнее стараться понять.</div>
      </div>
      <div class="mt-5">
        <div class="items-center gap-3 flex">
        <div class="w-9 h-9 bg-[#F5F5F7] rounded-xl flex items-center justify-center text-sm">3</div>
        <div class="text-sm">Еще сильнее стараться понять.</div>
      </div>
      </div>
      </div>
    </div>
    <div class="mt-14 items-center justify-center flex">
    <CButton label="Перейти к деталям" />
</div>
    </div>
  </div>
</template>
