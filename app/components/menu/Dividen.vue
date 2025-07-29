<template>
  <div class="bg-white p-4 lg:p-8 rounded-lg shadow-md">
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="flex flex-col justify-start items-start">
        <label for="dividenPrice" class="text-xs md:text-base font-medium mb-2"
          >Jumlah Dividen yang dibagikan</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="250"
          id="dividenPrice"
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
        <label for="dividenTax" class="text-xs md:text-base font-medium mb-2"
          >Pajak Dividen (%)</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="0.25"
          id="dividenTax"
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
  console.log("Tombol reset dividen diklik!");
};

const handleClickCalculate = () => {
  console.log("Tombol hitung dividen diklik!");
};
</script>
