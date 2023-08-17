<script setup>
defineProps({
    label: {},
    img: {}
})
</script>


<template>
    <button class="px-7 h-12 py-3.5 border border-[#F5F5F7] rounded-xl text-xs items-center flex w-max ">
        <div>
            <slot name="img">
                 <img src="{{ img }}" alt=""> 
            </slot>
        </div>
        <div class="pl-3 text-center">
        <slot name="label">
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