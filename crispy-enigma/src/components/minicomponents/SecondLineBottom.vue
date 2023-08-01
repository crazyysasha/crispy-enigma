<script setup>
import SecondLineBottomLittle from '../littlecomponents/SecondLineBottomLittle.vue';
</script>

<template>
    <div class="flex  flex-col gap-10">
        <div class="flex text-3xl font-bold justify-between ">
            <h1>Upcoming Task</h1>
            <div class="flex gap-10">
                <button>&#10094;</button>
                <button>&#x276F;</button>
            </div>
        </div>
        <SecondLineBottomLittle></SecondLineBottomLittle>
    </div>
</template>