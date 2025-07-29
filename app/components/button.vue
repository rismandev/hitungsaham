<template>
  <button
    @click="handleClick"
    :style="{ backgroundColor: bgColor ? bgColor : '#007bff' }"
    :disabled="loading"
    class="py-1.5 px-3 lg:py-2.5 lg:px-5 text-white text-xs md:text-base font-medium cursor-pointer border-none rounded-md hover:opacity-75"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["click"]);

defineProps({
  text: String,
  bgColor: String,
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
