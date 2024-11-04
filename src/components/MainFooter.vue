<template>
  <q-footer
    class="row justify-center bg-brown-4"
    style="box-shadow: 0px 6px 8px rgba(78, 52, 46, 0.1)"
  >
    <q-toolbar class="col-3 justify-between q-py-lg">
      <a href="/">
        <img
          src="/static/logo_white.svg"
          alt="玻璃心選物"
          style="width: 140px"
        />
      </a>
      <div class="flex column">
        <q-btn text-color="white" label="隱私權政策" unelevated to="Privacy">
        </q-btn>
        <q-btn
          text-color="white"
          label="購物須知"
          unelevated
          to="ShoppingNotice"
        >
        </q-btn>
        <q-btn
          text-color="white"
          label="退換貨方法"
          unelevated
          to="ReturnNotice"
        >
        </q-btn>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script setup>
defineOptions({
  name: "MainFooter",
});
</script>
