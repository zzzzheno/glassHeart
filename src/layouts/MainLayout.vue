<template>
  <q-layout view="hHh lpR fff">
    <MainHeader></MainHeader>
    <q-page-container class="bg-brown-1">
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
