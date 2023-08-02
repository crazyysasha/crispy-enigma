<script></script>

<template>
    <div class="flex min-h-screen justify-center items-center flex-1 p-8">
      <form class="rounded-xl bg-white px-8 pt-6 pb-8 mb-4 sm:text-center" action="">
        <div class="p-2.5 mt-1 flex items-center justify-center">
          <img src="/src/components/icons/site_icon.svg" class="w-10 h-10" alt="" />
          <h1 class="font-bold text-black text-4xl ml-3">CRM</h1>
        </div>
        <div class="mb-4 mt-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input
            class="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-button_purple focus:ring-4 outline-3 outline outline-bg_gray_design"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-4 mt-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            class="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-button_purple focus:ring-4 outline-3 outline outline-bg_gray_design"
            id="username"
            type="password"
            placeholder="********"
          />
        </div>
        <button
          class="mt-6 bg-button_purple rounded-3xl flex items-center justify-center h-12 px-6 w-64 text-white hover:bg-button_purple/60"
        >
          Sign in
        </button>
        <button class="text-text_purple mt-4 hover:text-button_purple">Registration</button>
        <span class="mx-2 text-gray-300">/</span>
        <button class="text-text_purple mt-4 hover:text-red-500">Forget Password?</button>
      </form>
    </div>
</template>
<!-- йо чел доделай все нормально -->
