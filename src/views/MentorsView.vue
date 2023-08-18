<script setup>
import HeaderHome from '/src/components/ui/HeaderHome.vue';
import TaskCarouselItem from '../components/tasks/carousel-item.vue';
import CSearch from '/src/components/ui/c-search.vue'
import HeaderHomeLoading from '../components/loadingcomp/HeaderHomeLoading.vue';
import TaskCarouselItemLoading from '/src/components/loadingcomp/carousel-itemLoading.vue'
import CCategory from '../components/ui/c-category.vue';
import ElementIcon from '../assets/icons/element_1.vue'
import SortIcon from '../assets/icons/sort.vue'
import SCategory from '../components/ui/loadingitems/s-category.vue';
import SSearch from '../components/ui/loadingitems/s-search.vue';
import CLabel from '../components/ui/c-label.vue'
import SLine from '/src/components/ui/loadingitems/s-line.vue'
</script>
<template>
<div>
  <Suspense>
    <template #default>
      <HeaderHome label="Ментаты" class="sticky top-0 bg-white border-[#F5F5F7] border-b-2">
        <template #search>
          <CSearch searchlabel="Искать Ментатов" />
        </template>
        <template #category>
          <CCategory label="Категория">
            <template #img>
              <ElementIcon />
            </template>
          </CCategory>
          <CCategory label="Сортировка по:">
            <template #img>
              <SortIcon />
            </template>
          </CCategory>
        </template>
        </HeaderHome>
    </template>
    <template #fallback>
      <HeaderHomeLoading class="bg-white border-[#F5F5F7] border-b-2 h-[226px]">
        <template #searchload>
          <SSearch class="w-[480px]"/>
        </template>
        <template #categoryload>
          <SCategory class="w-[154.88px]" />
        </template>
        </HeaderHomeLoading>
    </template>
    </Suspense>
    <div>
      <div>
        <Suspense>
          <template #default>
            <CLabel class="mt-6" label="Ментаты" />
          </template>
          <template #fallback>
            <SLine class="h-8 mt-6 w-[119px] animate-pulse" />
          </template>
        </Suspense>
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
          <Suspense>
          <template #default>
            <CLabel class="mt-6" label="Новые Ментаты" />
          </template>
          <template #fallback>
            <SLine class="h-8 mt-6 w-[164px] animate-pulse" />
          </template>
        </Suspense>
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