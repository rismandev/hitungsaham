<template>
  <div class="bg-white p-4 lg:p-8 rounded-lg shadow-md">
    <h1
      class="w-full text-base md:text-3xl font-bold text-blue-600 text-center"
    >
      Masukan Fee Jual & Fee Beli Broker
    </h1>

    <div class="w-full grid grid-cols-2 gap-4 mt-5 lg:mt-10">
      <div class="flex flex-col justify-start items-start">
        <label for="feeJual" class="text-xs md:text-base font-medium mb-2"
          >Fee Jual</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="0.15"
          id="feeJual"
        />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="feeBeli" class="text-xs md:text-base font-medium mb-2"
          >Fee Beli</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="0.25"
          id="feeBeli"
        />
      </div>
    </div>

    <div class="w-full flex justify-end items-center mt-5 gap-x-4">
      <Button text="Reset" bgColor="#dc3545" @click="handleClickReset" />
      <Button text="Simpan" @click="handleClickSave" />
    </div>
  </div>
</template>

<script setup>
import Button from "~/components/button.vue";

const handleClickReset = () => {
  console.log("Tombol reset diklik!");
};
const handleClickSave = () => {
  console.log("Tombol simpan diklik!");
};
</script>
