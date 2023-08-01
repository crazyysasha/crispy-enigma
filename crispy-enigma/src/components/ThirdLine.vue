<script setup>
import ThirdLineRow from './minicomponents/ThirdLineRow.vue';
</script>

<template>
    <div class="container flex flex-col gap-5 font-PlusJakartaSans text-xl p-10 w-96">
        <div class="flex justify-between">
            <button>&#10094;</button>
            <p class="font-bold">July 2022</p>
            <button>&#x276F;</button>
        </div>
        <div>
            <div class="flex gap-5">
                <ul>
                    <li>S</li>
                    <li>10</li>
                </ul>
                <ul>
                    <li>M</li>
                    <li>11</li>
                </ul>
                <ul>
                    <li>T</li>
                    <li>12</li>
                </ul>
                <ul class="bg-black rounded-xl text-white w-6">
                    <li>W</li>
                    <li class="rounded-full bg-blue-600">13</li>
                </ul>
                <ul>
                    <li>T</li>
                    <li>14</li>
                </ul>
                <ul>
                    <li>F</li>
                    <li>15</li>
                </ul>
                <ul>
                    <li>S</li>
                    <li>16</li>
                </ul>
            </div>
        </div>
        <ThirdLineRow></ThirdLineRow>
    </div>
</template>