<template>
  <baseContainer class="sm: p-8">
    <defaultBox v-for="item in list" :key="item.id" :highligth="item.promo">{{ 
      item.title 
    }} </defaultBox>
  </baseContainer>
</template>

<script>
import defaultBox from "./assets/shared/defaultBox.vue";

import baseContainer from "./assets/shared/baseContainer.vue";

export default {
  components: { baseContainer, defaultBox },

  setup() {
    const list = [
      { id: 1, title: "Tailwind CSS" },
      { id: 2, title: "Tailwind CSS" },
      { id: 3, title: "Simulando item em promo CSS", promo: true },
      { id: 4, title: "Tailwind CSS" },
      { id: 5, title: "Tailwind CSS" },
      { id: 6, title: "Tailwind CSS" },
      { id: 7, title: "Tailwind CSS" },
      { id: 8, title: "Tailwind CSS" },
      { id: 9, title: "Tailwind CSS" },
    ];

    console.log(list);
    return { list };
  },
};
</script>

<style scoped></style>
