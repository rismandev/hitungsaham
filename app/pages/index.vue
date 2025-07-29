<template>
  <div class="w-full min-h-screen bg-gray-100">
    <div class="w-full bg-blue-600 h-16 flex justify-start items-center px-4">
      <h1 class="text-white text-2xl font-bold tracking-wider">
        HitungSaham - v1.0.0
      </h1>
    </div>

    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      <Broker />

      <Info />
    </div>

    <div class="w-full h-16 flex justify-start items-center px-4">
      <!-- Back to main menu -->
      <Button
        text="Kembali ke Menu Utama"
        bgColor="#dc3545"
        @click="() => handleClickMenu(0)"
        class="mr-4"
        v-if="tabMenu !== 0"
      />

      <h1 class="text-blue-600 text-2xl font-bold tracking-wider">
        {{ tabMenuText }}
      </h1>
    </div>

    <div
      class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 p-4"
      v-if="tabMenu === 0"
    >
      <Menu
        text="Hitung Investasi"
        icon="iwwa:chart"
        @click="() => handleClickMenu(1)"
      />
      <Menu
        text="Hitung Keuntungan / Kerugian"
        icon="streamline-freehand:saving-bag-increase"
        @click="() => handleClickMenu(2)"
      />
      <Menu
        text="Hitung Dividen"
        icon="game-icons:receive-money"
        @click="() => handleClickMenu(3)"
      />
      <Menu
        text="Hitung ARA / ARB"
        icon="lucide:trending-up-down"
        @click="() => handleClickMenu(4)"
      />
      <Menu
        text="Pivot"
        icon="carbon:chart-area"
        @click="() => handleClickMenu(5)"
      />
      <Menu
        text="Harga Rata-Rata"
        icon="carbon:chart-median"
        @click="() => handleClickMenu(6)"
      />
    </div>

    <div class="p-4" v-else>
      <Investment v-if="tabMenu === 1" />
      <ProfitOrLose v-if="tabMenu === 2" />
      <Dividen v-if="tabMenu === 3" />
      <AraArb v-if="tabMenu === 4" />
      <Pivot v-if="tabMenu === 5" />
      <Average v-if="tabMenu === 6" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Broker from "~/components/Broker.vue";
import Info from "~/components/Info.vue";
import Menu from "~/components/Menu.vue";
import Investment from "~/components/menu/Investment.vue";
import ProfitOrLose from "~/components/menu/ProfitOrLose.vue";
import Dividen from "~/components/menu/Dividen.vue";
import AraArb from "~/components/menu/AraArb.vue";
import Pivot from "~/components/menu/Pivot.vue";
import Average from "~/components/menu/Average.vue";

const tabMenu = ref(0);

const tabMenuText = computed(() => {
  switch (tabMenu.value) {
    case 1:
      return "Hitung Investasi";
    case 2:
      return "Hitung Keuntungan / Kerugian";
    case 3:
      return "Hitung Dividen";
    case 4:
      return "Hitung ARA / ARB";
    case 5:
      return "Pivot";
    case 6:
      return "Harga Rata-Rata";
    default:
      return "Menu Utama";
  }
});

const handleClickMenu = (menuId: number) => {
  console.log("Menu " + menuId + " diklik!");
  tabMenu.value = menuId;
};
</script>
