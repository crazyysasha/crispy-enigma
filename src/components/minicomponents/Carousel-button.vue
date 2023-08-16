<script setup>
</script>
<template>
    <div class="flex  flex-col gap-10">
        <div class="flex text-3xl font-bold justify-between ">
            <slot></slot>
            <div class="flex gap-10">
                <button>&#10094;</button>
                <button>&#x276F;</button>
            </div>
        </div>       
    </div>
</template>