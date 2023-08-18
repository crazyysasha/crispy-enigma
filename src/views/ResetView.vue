<script setup>
import CInput from '../components/ui/c-input.vue'
</script>
<template>
    <form class="flex flex-col items-center justify-center" action="">
        <div class="mb-4 mt-4">
          <c-input label="Введите свой e-mail" placeholder="andrew123@google.com" ></c-input>
          </div>
          <c-button class="my-6">
            Подтвердить
          </c-button>
    </form>
</template>