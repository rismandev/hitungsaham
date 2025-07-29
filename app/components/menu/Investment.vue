<template>
  <div class="bg-white p-4 lg:p-8 rounded-lg shadow-md">
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="flex flex-col justify-start items-start">
        <label for="type" class="text-xs md:text-base font-medium mb-2"
          >Pilih Jenis Perhitungan Investasi</label
        >
        <select name="type" id="type" class="w-full p-2 border rounded-lg">
          <option value="profit">Hitung Profit</option>
          <option value="target">Hitung Target</option>
        </select>
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="profitGoal" class="text-xs md:text-base font-medium mb-2"
          >Dana Awal Investasi</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="150.000.000"
          id="profitGoal"
        />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label
          for="profitPercentage"
          class="text-xs md:text-base font-medium mb-2"
          >Keuntungan per tahun (%)</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="15%"
          id="profitPercentage"
        />
      </div>
      <div class="flex flex-col justify-start items-start">
        <label for="period" class="text-xs md:text-base font-medium mb-2"
          >Periode (tahun)</label
        >
        <input
          class="w-full p-2 border rounded-lg hide-counter"
          type="number"
          placeholder="3 tahun"
          id="period"
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
  console.log("Tombol reset investasi diklik!");
};

const handleClickCalculate = () => {
  console.log("Tombol hitung investasi diklik!");
};
</script>