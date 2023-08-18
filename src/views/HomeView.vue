<script setup>
import TaskCarouselItem from '../components/tasks/carousel-item.vue'
import CProgressWidget from '../components/ui/c-progressWidget.vue'
import HeaderHome from '../components/ui/HeaderHome.vue'
import CActivity from '/src/components/ui/c-activity.vue'
import CCalendar from '../components/ui/c-calendar.vue'
import CTaskToday from '../components/ui/c-tasktoday.vue'
import CSearch from '../components/ui/c-search.vue'
import HeaderHomeLoading from '../components/loadingcomp/HeaderHomeLoading.vue'
import TaskCarouselItemLoading from '/src/components/loadingcomp/carousel-itemLoading.vue'
import SLine from '/src/components/ui/loadingitems/s-line.vue'
import CCategory from '/src/components/ui/c-category.vue'
import ElementIcon from '/src/assets/icons/element_1.vue'
import SProgressWidget from '../components/ui/loadingitems/s-progressWidget.vue'
import SActivity from '../components/ui/loadingitems/s-activity.vue'
import CLabel from '../components/ui/c-label.vue'
</script>
<template>
  <div class="flex w-full">
    <div class="flex-1 flex flex-col gap-6 items-stretch w-full">
      <Suspense>
        <template #default>
          <HeaderHome label="Привет, Жора" sublabel="Тебе наверное стоит че-то делать.">
          </HeaderHome>
        </template>
        <template #fallback>
          <HeaderHomeLoading class="h-[184px]" />
        </template>
      </Suspense>
      <div class="flex mt-11 gap-8">
        <Suspense >
          <template #default>
            <CProgressWidget />
          </template>
          <template #fallback>
            <SProgressWidget />
          </template>
        </Suspense>
        <Suspense>
          <template #default>
            <CActivity />
          </template>
          <template #fallback>
            <SActivity />
          </template>
        </Suspense>
      </div>
      <div class="flex flex-col gap-5 w-full">
        <Suspense>
          <template #default>
            <CLabel label="Недавние Ментаты" />
          </template>
          <template #fallback>
            <SLine class="h-8 w-[220px] animate-pulse" />
          </template>
        </Suspense>
        <div
          class="overflow-x-auto rounded-xl w-full max-w-full items-start gap-8 flex-nowrap flex"
        >
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
        <div class="flex flex-col gap-5 w-full">
        <Suspense>
          <template #default>
            <CLabel label="Ментаты" />
          </template>
          <template #fallback>
            <SLine class="h-8 w-[102px] animate-pulse" />
          </template>
        </Suspense>
        <div
          class="overflow-x-auto rounded-xl w-full max-w-full items-start gap-8 flex-nowrap flex"
        >
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
    <!-- <div class="bg-[#F5F5F7] sticky h-full min-h-screen top-0">
      <div class="p-8">
        <CCalendar />
        <CTaskToday class="mt-8" />
      </div>
    </div> -->
  </div>
</template>
