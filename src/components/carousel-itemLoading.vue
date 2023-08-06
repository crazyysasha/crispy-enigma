
<script setup>
</script>
<template>
    <div class="bg-white p-6 rounded-xl max-w-sm">
        <div class="border-2 w-[336px] h-[134px] rounded-xl items-center justify-center flex">
        <img src="/src/assets/icons/gallery_placeholder.svg" alt="" class="w-10 h-10">
    </div>
        <div>
            <div class="w-40 h-4 bg-indigo-500 bg-opacity-30 rounded-2xl mt-4"></div>
            <div class="w-40 h-4 bg-indigo-500 bg-opacity-10 rounded-2xl mt-2"></div>
            <div class="progress pt-4">
                <div class="flex justify-between items-center">
                    <div class="w-28 h-4 bg-indigo-500 bg-opacity-10 rounded-2xl mt-2"></div>
                    <div class="w-4 h-4 bg-indigo-500 bg-opacity-10 rounded-full mt-2"></div>
                </div>
                <div class="relative py-3" ref="parent"> 
                    <div class="h-2 w-full bg-[#BAC8FF] rounded-lg"></div>
                    <div class="h-2 absolute top-1/2 -translate-y-1/2 bg-[#546FFF] rounded-lg transition-all duration-200 ease-in-out"
                        :style="{ width: pixelProgress }"></div>
                    <div class="absolute top-1/2 -translate-y-1/2 h-4 aspect-square bg-[#546FFF]  transition-all duration-200 ease-in-out border-2 border-white rounded-full -ml-2" 
                        :style="{ '--tw-translate-x': pixelProgress }"></div>  <!-- //TODO #13 не корректно отображается круг в safari --> 
                </div> 
                <div class="flex gap-3 mt-2">
                <div class="w-4 h-4 bg-indigo-500 bg-opacity-10 rounded-full"></div>
                    <div class="w-28 h-4 bg-indigo-500 bg-opacity-10 rounded-2xl"></div>
                </div>
                </div>
            </div>
        </div>
</template>