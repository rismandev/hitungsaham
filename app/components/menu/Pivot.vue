<template>
  <div class="bg-white p-4 lg:p-8 rounded-lg shadow-md">
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="flex flex-col justify-start items-start">
        <label for="highPrice" class="text-xs md:text-base font-medium mb-2"
          >Harga Tertinggi (High)</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="500"
          id="highPrice"
        />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="lowPrice" class="text-xs md:text-base font-medium mb-2"
          >Harga Terendah (Low)</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="1.000"
          id="lowPrice"
        />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="closePrice" class="text-xs md:text-base font-medium mb-2"
          >Harga Penutupan (Close)</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="700"
          id="closePrice"
        />
      </div>
    </div>

    <div class="w-full flex justify-end items-center mt-5 gap-x-4">
      <Button text="Reset" bgColor="#dc3545" @click="handleClickReset" />
      <Button text="Hitung" @click="handleClickCalculate" />
    </div>
  </div>
</template>

<script setup>
import Button from "~/components/button.vue";

const handleClickReset = () => {
  console.log("Tombol reset pivot diklik!");
};

const handleClickCalculate = () => {
  console.log("Tombol hitung pivot diklik!");
};
</script>
