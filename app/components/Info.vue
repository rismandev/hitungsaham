<template>
  <div class="bg-white p-4 lg:p-8 rounded-lg shadow-md flex flex-col">
    <span class="text-zinc-800 text-base lg:text-lg font-bold tracking-wider"
      >Created by</span
    >

    <div class="w-full flex justify-start items-center mt-3 gap-x-4">
      <div
        class="bg-zinc-900 w-16 h-16 lg:w-24 lg:h-24 rounded-full p-2 lg:p-4"
      >
        <Icon icon="et:profile-male" class="w-full h-full text-white" />
      </div>

      <div class="flex flex-col justify-start items-start">
        <h3 class="text-zinc-800 text-base lg:text-lg font-bold tracking-wider">
          Risman Abdilah
        </h3>
        <h4 class="text-zinc-600 text-xs lg:text-sm font-medium tracking-wider">
          Frontend Website Developer
        </h4>
      </div>
    </div>

    <span
      class="text-zinc-800 text-base lg:text-lg font-bold tracking-wider mt-4"
      >Support & Donations</span
    >

    <a
      href="https://saweria.co/rismandev"
      target="_blank"
      class="text-blue-600 text-xs lg:text-sm font-medium tracking-wider underline mt-1.5 lg:mt-2.5"
    >
      https://saweria.co/rismandev
    </a>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
