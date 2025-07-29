<template>
  <div
    class="bg-white px-8 py-12 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer hover:bg-blue-50"
    @click="handleClick"
  >
    <div class="bg-blue-600 w-24 h-24 rounded-full p-4">
      <Icon :icon="icon" class="w-full h-full text-white" />
    </div>

    <h4 class="text-blue-600 text-lg font-bold tracking-wider mt-5">
      {{ text }}
    </h4>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const emit = defineEmits(["click"]);

defineProps({
  text: String,
  icon: String,
});

const loading = ref(false);

const handleClick = async () => {
  loading.value = true;
  emit("click");
  await new Promise((resolve) => {
    setTimeout(() => resolve(true), 100);
  }).finally(() => {
    loading.value = false;
  });
};
</script>
