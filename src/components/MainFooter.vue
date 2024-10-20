<template>
  <div
    class="flex justify-center bg-brown-4"
    style="box-shadow: 0px 6px 8px rgba(78, 52, 46, 0.1)"
  >
    <div class="flex justify-center q-py-lg" style="max-width: 1440px">
      <a href="/">
        <img
          src="/src/assets/logo_white.svg"
          alt="玻璃心選物"
          style="width: 140px"
        />
      </a>
      <div class="flex column">
        <q-btn text-color="white" label="隱私權政策" unelevated to="Privacy">
        </q-btn>
        <q-btn text-color="white" label="購物須知" unelevated> </q-btn>
        <q-btn text-color="white" label="退換貨方法" unelevated> </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "MainFooter",
});
</script>
