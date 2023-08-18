<script setup>
import CInput from '../components/ui/c-input.vue'
</script>
<!-- eslint-disable vue/valid-template-root -->
<template>
    <form class="flex flex-col items-center justify-center" action="">
      <div class="mb-4 mt-4">
          <c-input label="E-mail" placeholder="andrew123@google.com" ></c-input>
        </div>
        <div class="mb-4 mt-4">
          <c-input label="Логин" placeholder="xXx_DODO_xXx" ></c-input>
        </div>
        <div class="mt-4">
          <c-input type="password" label="Пароль" placeholder="*******"></c-input>
          </div>
          <div class="flex my-6">
    <div class="flex items-center justify-center">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-bg_gray_design rounded-full bg-gray-50 focus:ring-3 focus:bg-button_purple" required>
    </div>
    <label for="terms" class="text-sm font-medium text-left ml-2">Я согласен с<a href="#" class="text-Information-600 hover:underline"> пользовательским соглашением</a></label>
  </div>
          <c-button class="my-6" >
            Зарегистрироваться
          </c-button>
      
        </form>
</template>