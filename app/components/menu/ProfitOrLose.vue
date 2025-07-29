<template>
  <div class="bg-white p-4 lg:p-8 rounded-lg shadow-md">
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="flex flex-col justify-start items-start">
        <label for="priceBuy" class="text-xs md:text-base font-medium mb-2"
          >Harga Beli Saham</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="500"
          id="priceBuy"
        />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="lot" class="text-xs md:text-base font-medium mb-2"
          >Jumlah Lot Saham</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="1.000"
          id="lot"
        />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="priceSell" class="text-xs md:text-base font-medium mb-2"
          >Harga Jual Saham</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="700"
          id="priceSell"
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
  console.log("Tombol reset profit/lose diklik!");
};

const handleClickCalculate = () => {
  console.log("Tombol hitung profit/lose diklik!");
};
</script>
