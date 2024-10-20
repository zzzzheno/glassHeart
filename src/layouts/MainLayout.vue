<template>
  <q-layout view="lHh Lpr">
    <MainHeader></MainHeader>
    <q-page-container
      class="flex justify-center bg-brown-1"
      style="margin-top: 124px"
    >
      <router-view />
    </q-page-container>
    <MainFooter> </MainFooter>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import MainHeader from "components/MainHeader.vue";
import MainFooter from "src/components/MainFooter.vue";

defineOptions({
  name: "MainLayout",
});
</script>
