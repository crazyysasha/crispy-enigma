<script setup>
import NotificationIcon from '/src/assets/icons/notification.vue'
import UserAvatarIcon from '/src/assets/icons/user_avatar.vue'
import CCircle from '/src/components/ui/c-circle.vue'
import SearchIcon from '/src/assets/icons/search_normal.vue'
import CCategory from '/src/components/ui/c-category.vue'
import CSearch from '/src/components/ui/c-search.vue'
import ElementIcon from '/src/assets/icons/element_1.vue'
import CToggle from './c-toggle.vue'

defineProps({
  label: {},
  sublabel: {},
})

const loadUserData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}
await loadUserData()
</script>
<template>
  <div class="p-8 -mx-8">
    <div class="mt-8 justify-between flex items-start">
      <div>
        <div class="font-semibold text-2xl">{{ label }}</div>
        <div class="font-medium text-base text-Secondary-400 mt-2">
          {{ sublabel }}
        </div>
      </div>
      <div class="flex items-center mr-8">
        <CCircle class="mr-8">
          <NotificationIcon />
        </CCircle>
        <CCircle>
          <UserAvatarIcon />
        </CCircle>
      </div>
    </div>
    <div class="justify-between items-center flex pr-8 pt-6">
      <div>
        <slot name="search"> </slot>
      </div>
      <slot name="category"></slot>
    </div>
  </div>
</template>
