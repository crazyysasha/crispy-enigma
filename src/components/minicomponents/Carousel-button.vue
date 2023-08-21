<script setup>
</script>
<template>
    <div class="flex  flex-col ">
        <div class="flex text-[24px] font-bold justify-between ">
            <slot></slot>
            <div class="flex gap-2 w-6 aspect-square">
                <button>&#10094;</button>
                <button>&#x276F;</button>
            </div>
        </div>       
    </div>
</template>