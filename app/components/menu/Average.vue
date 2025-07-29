<template>
  <div class="bg-white p-4 lg:p-8 rounded-lg shadow-md">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
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
    </div>

    <div class="w-full flex justify-end items-center mt-5 gap-x-4">
      <Button text="Reset" bgColor="#dc3545" @click="handleClickReset" />
      <Button text="Hitung" @click="handleClickCalculate" />
    </div>

    <div
      class="w-full flex flex-col justify-center items-center bg-blue-600 mt-4 py-4"
    >
      <h2 class="text-white text-xl font-medium tracking-wider text-center">
        Total Nilai Saham
      </h2>
      <h2 class="text-white text-2xl font-bold tracking-wider text-center mt-1">
        Rp. 100.000.000
      </h2>
    </div>

    <div class="w-full grid grid-cols-2 gap-4">
      <div class="py-4">
        <h2
          class="text-zinc-800 text-xl font-medium tracking-wider text-center"
        >
          Total Lot Saham
        </h2>
        <h2
          class="text-zinc-800 text-2xl font-bold tracking-wider text-center mt-1"
        >
          10.000
        </h2>
      </div>
      <div class="py-4">
        <h2
          class="text-zinc-800 text-xl font-medium tracking-wider text-center"
        >
          Harga Rata-Rata
        </h2>
        <h2
          class="text-zinc-800 text-2xl font-bold tracking-wider text-center mt-1"
        >
          1.000
        </h2>
      </div>
    </div>

    <table class="w-full bg-gray-50">
      <thead class="bg-blue-100">
        <tr>
          <th class="text-zinc-800 text-base font-semibold text-center">Lot</th>
          <th class="text-zinc-800 text-base font-semibold text-center">
            Harga
          </th>
          <th class="h-10"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-blue-600 text-base font-normal text-center">50</td>
          <td class="text-blue-600 text-base font-normal text-center">1.000</td>
          <td class="w-2/12 p-2">
            <div class="flex justify-end items-center">
              <Button text="Hapus" bgColor="#dc3545" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import Button from "~/components/button.vue";

const handleClickReset = () => {
  console.log("Tombol reset average diklik!");
};

const handleClickCalculate = () => {
  console.log("Tombol hitung average diklik!");
};
</script>
