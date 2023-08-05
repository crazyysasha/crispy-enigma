<script setup>
defineProps({
    label: {},
    img: {}
})
</script>


<template>
    <button class="px-7 py-3.5 border border-[#F5F5F7] rounded-xl flex w-max h-14">
        <div>
            <img :src="img" alt="">
        </div>
        <div class="pl-3 text-center">
        <slot>
            {{  label }}
        </slot>
        </div>
    </button>
</template>

<!-- 
<template>
    <div class="px-7 py-3 border border-[#F5F5F7] rounded-xl items-start flex w-max">
        <div>
        <img src="/src/components/icons/element_1.svg" alt="">
    </div>
    <div class="pl-3">
        Category
    </div>
    </div>
</template> -->