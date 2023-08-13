<script setup>
import HeaderHome from '../components/ui/HeaderHome.vue'
import TaskCarouselItem from '../components/tasks/carousel-item.vue'
import CSearch from '/src/components/ui/c-search.vue'
import HeaderHomeLoading from '../components/loadingcomp/HeaderHomeLoading.vue';
import TaskCarouselItemLoading from '/src/components/loadingcomp/carousel-itemLoading.vue'
</script>
<template>
<div>
  <Suspense>
    <template #default>
      <HeaderHome label="Задачи" class="sticky top-0 bg-white border-[#F5F5F7] border-b-2">
        <template #search>
          <CSearch searchlabel="Искать Задачи" />
        </template>
        </HeaderHome>
    </template>
    <template #fallback>
      <HeaderHomeLoading class="bg-white border-[#F5F5F7] border-b-2 h-[228px]" />
    </template>
    </Suspense>
      <div>
      <div>
        <p class="font-semibold text-2xl mt-6">Time Limit</p>
        <div class="mt-5 items-start gap-8 flex-nowrap flex scrolling-touch overflow-x-auto">
          <Suspense>
            <template #default>
              <TaskCarouselItem />
            </template>
            <template #fallback>
              <TaskCarouselItemLoading />
            </template>
          </Suspense>
          <Suspense>
            <template #default>
              <TaskCarouselItem />
            </template>
            <template #fallback>
              <TaskCarouselItemLoading />
            </template>
          </Suspense>
          <Suspense>
            <template #default>
              <TaskCarouselItem />
            </template>
            <template #fallback>
              <TaskCarouselItemLoading />
            </template>
          </Suspense>
        </div>
        <div>
          <p class="font-semibold text-2xl mt-6">New Task</p>
          <div class="mt-5 items-start gap-8 flex-nowrap flex scrolling-touch overflow-x-auto">
            <Suspense>
            <template #default>
              <TaskCarouselItem />
            </template>
            <template #fallback>
              <TaskCarouselItemLoading />
            </template>
          </Suspense>
          <Suspense>
            <template #default>
              <TaskCarouselItem />
            </template>
            <template #fallback>
              <TaskCarouselItemLoading />
            </template>
          </Suspense>
          <Suspense>
            <template #default>
              <TaskCarouselItem />
            </template>
            <template #fallback>
              <TaskCarouselItemLoading />
            </template>
          </Suspense>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>