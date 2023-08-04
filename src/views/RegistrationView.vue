<script setup>
import CInput from '../components/ui/c-input.vue'
</script>
<!-- eslint-disable vue/valid-template-root -->
<template>
    <form class="" action="">
      <div class="mb-4 mt-4">
          <c-input label="E-mail" placeholder="andrew123@google.com" ></c-input>
        </div>
        <div class="mb-4 mt-4">
          <c-input label="Логин" placeholder="xXx_DODO_xXx" ></c-input>
        </div>
        <div class="mb-4 mt-4">
          <c-input type="password" label="Пароль" placeholder="*******"></c-input>
          <div class="flex items-start mt-6">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-bg_gray_design rounded bg-gray-50 focus:ring-3 focus:bg-button_purple" required>
    </div>
    <label for="terms" class="text-sm font-medium text-left ml-2">Я согласен с<a href="#" class="text-Information-600 hover:underline"><br>пользовательским соглашением</a></label>
  </div>
          <c-button>
            Зарегистрироваться
          </c-button>
        </div>
        </form>
</template>