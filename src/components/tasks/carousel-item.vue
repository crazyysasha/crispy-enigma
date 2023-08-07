<script setup>

import { ref, computed } from 'vue';

const progress = ref(Math.random()*100);
setTimeout(() => {
    progress.value = Math.random()*100;
}, Math.random() * 10000);

const parent = ref();
const pixelProgress = computed(() => {
    console.dir(parent.value);
    if (parent.value) {
        console.dir(`${progress.value * parent.value.clientWidth / 100}px`);
        return `${progress.value * parent.value.clientWidth / 100}px`;
    }
    return `0px`;
});
</script>
<template>
    <div class="bg-white p-6 rounded-xl max-w-sm">
        <img src="/src/assets/temps/task-1.png" alt="" class="w-full rounded-xl">
        <div>
            <h3 class="font-semibold pt-4">Creating Awesome Mobile Apps</h3>
            <p class="text-xs pt-1">UI UX Design</p>
            <div class="progress pt-4">
                <div class="flex justify-between">
                    <div>Progress</div>
                    <div>{{ Math.floor(progress) }}%</div>
                </div>
                <div class="relative py-3" ref="parent"> 
                    <div class="h-2 w-full bg-[#BAC8FF] rounded-lg"></div>
                    <div class="h-2 absolute top-1/2 -translate-y-1/2 bg-[#546FFF] rounded-lg transition-all duration-200 ease-in-out"
                        :style="{ width: pixelProgress }"></div>
                    <div class="absolute top-1/2 -translate-y-1/2 h-4 aspect-square bg-[#546FFF]  transition-all duration-200 ease-in-out border-2 border-white rounded-full -ml-2" 
                        :style="{ '--tw-translate-x': pixelProgress }"></div>  <!-- //TODO #13 не корректно отображается круг в safari --> 
                </div> 
                <div>
                    1 Hour
                </div>
            </div>
        </div>
    </div>
</template>