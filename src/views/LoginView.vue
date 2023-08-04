<script setup>
import CInput from '../components/ui/c-input.vue'
</script>

<template>
  
      <form class="" action="">
        <div class="mb-4 mt-4">
          <c-input label="Логин" placeholder="xXx_DODO_xXx" ></c-input>
        </div>
        <div class="mb-4 mt-4">
          <c-input type="password" label="Пароль" placeholder="*******"></c-input>
          
          <c-button>
            Войти
          </c-button>
        </div>
      </form>
      <div class="mt-8 col-auto">
        <p>
          Нет аккаунта?
          <router-link
            class="text-Secondary-300 mt-4 hover:text-Primary-500"
            :to="{ name: 'registation' }"
            href=""
            >Регистрация</router-link
          >
        </p>
        <div class="items-center flex flex-col">
          <div class="mt-6 w-20 h-1 rounded-xl bg-bg_gray_design"></div>
        </div>
        <div class="mt-6">
        <router-link
          class="text-Secondary-300 hover:bg-Error-600"
          :to="{ name: 'reset' }"
          href=""
        >
          Забыли пароль?
        </router-link>
      </div>
      </div>
</template>
