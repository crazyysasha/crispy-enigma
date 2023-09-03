<script setup>
</script>

<template>
    <div>
        <button class=" border-4 border-b-indigo-500 border-white" >
            General
        </button>
    </div>  
        <div class="flex flex-col p-[31.5px] gap-[98px]">          
            <div class="flex flex-col gap-[16px]">
                <h1>Language</h1>
                <div class="flex border-2 w-[400px] justify-between p-2 ">
                    <input type="text" placeholder="English (default)">
                    <button>
                        <img src="src/assets/images/Dashboardpictures/Arrow-Down.svg" alt="" class="w-[20px] aspect-square">
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-[16px]">
                <h2>Timezone</h2>
                <div class="flex border-2 w-[400px] justify-between p-2 ">
                    <input type="text" placeholder="English (default)">
                    <button>
                        <img src="src/assets/images/Dashboardpictures/Arrow-Down.svg" alt="" class="w-[20px] aspect-square">
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-[16px]">
                <h3>Timezone</h3>
                <div class="flex gap-[32px]">
                    <div class="flex w-[181px] justify-between border-2 rounded-[10px] h-[58px] items-center gap-[10px] p-[20px]">
                        <p>24 Hours</p>
                    <input type="radio"> 
                    </div>
                    <div class="flex w-[181px] justify-between border-2 rounded-[10px] h-[58px] items-center gap-[10px] p-[20px]">
                        <p>12 Hours</p>
                        <input type="radio">
                    </div>
                </div>
            </div>
        </div>
        <div class="rounded-[10px] bg-[#546FFF] w-[216px] h-[44px] text-center text-white flex flex-col justify-center">
            <button>Save changes</button>
        </div>
</template>