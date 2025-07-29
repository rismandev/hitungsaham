<template>
  <div class="bg-white p-4 lg:p-8 rounded-lg shadow-md">
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="flex flex-col justify-start items-start">
        <label for="price" class="text-xs md:text-base font-medium mb-2"
          >Harga Saham</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="300"
          id="price"
        />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="typeOption" class="text-xs md:text-base font-medium mb-2"
          >Pilih Opsi</label
        >
        <select
          name="typeOption"
          id="typeOption"
          class="w-full p-2 border rounded-lg"
        >
          <option value="ara">ARA</option>
          <option value="araFca">ARA (FCA)</option>
          <option value="arb">ARB</option>
          <option value="arbFca">ARB (FCA)</option>
        </select>
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="dataCount" class="text-xs md:text-base font-medium mb-2"
          >Jumlah Data</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="5"
          id="dataCount"
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
  console.log("Tombol reset ara/arb diklik!");
};

const handleClickCalculate = () => {
  console.log("Tombol hitung ara/arb diklik!");
};
</script>
