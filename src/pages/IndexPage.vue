<template>
  <q-page class="flex justify-center">
    <div
      class="q-my-xl"
      style="max-width: 1440px; width: 100%; aspect-ratio: 16 / 7"
    >
      <!-- banner -->
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        height="100%"
        style="border-radius: 1rem"
      >
        <q-carousel-slide :name="1" img-src="src/assets/BN1.jpg" />
      </q-carousel>
      <!-- banner -->
      <h5 class="col-12 q-mt-xl q-mb-lg text-center text-bold text-brown-9">
        新品上架
      </h5>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "IndexPage",
});

const slide = ref(1);
const autoplay = ref(true);
</script>
