<template>
  <div class="sidebar w-64 p-10 h-full overflow-y-auto text-center bg-white">
    <div class="text-gray-700 text-xl">
      <div class="p-2.5 mt-1 flex items-center">
        <img src="/src/components/icons/site_icon.svg" class="w-10 h-10" alt="" />
        <h1 class="font-bold text-black text-4xl ml-3">CRM</h1>
      </div>
      <div class="my-14"></div>
    </div>
    <button
      class="py-3 mt-6 flex items-center rounded-xl px-4 duration-300 cursor-pointer hover:bg-sidebar_gray_hover/5"
    >
      <img src="/src/components/icons/overwiew.svg" class="w-6 h-6" alt="" />
      <span class="text-sm ml-3 text-text_purple font-bold">Overview</span>
    </button>
    <button
      class="py-3 mt-6 flex items-center rounded-xl px-4 duration-300 cursor-pointer hover:bg-sidebar_gray_hover/5"
    >
      <img src="/src/components/icons/task.svg" class="w-6 h-6" alt="" />
      <span class="text-sm ml-3 text-text_purple font-bold">Task</span>
    </button>
    <button
      class="py-3 mt-6 flex items-center rounded-xl px-4 duration-300 cursor-pointer hover:bg-sidebar_gray_hover/5"
    >
      <img src="/src/components/icons/mentors.svg" class="w-6 h-6" alt="" />
      <span class="text-sm ml-3 text-text_purple font-bold">Mentors</span>
    </button>
    <button
      class="py-3 mt-6 flex items-center rounded-xl px-4 duration-300 cursor-pointer hover:bg-sidebar_gray_hover/5"
    >
      <img src="/src/components/icons/message.svg" class="w-6 h-6" alt="" />
      <span class="text-sm ml-3 text-text_purple font-bold">Message</span>
    </button>
    <button
      class="py-3 mt-6 flex items-center rounded-xl px-4 duration-300 cursor-pointer hover:bg-sidebar_gray_hover/5"
    >
      <img src="/src/components/icons/settings.svg" class="w-6 h-6" alt="" />
      <span class="text-sm ml-3 text-text_purple font-bold">Settings</span>
    </button>
  </div>
</template>
