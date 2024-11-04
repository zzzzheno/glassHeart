<template>
  <q-header
    class="fixed-top flex justify-center bg-white"
    style="box-shadow: 0px 6px 8px rgba(78, 52, 46, 0.1)"
  >
    <q-toolbar class="q-py-lg justify-between" style="max-width: 1440px">
      <a href="/">
        <img
          src="/static/logo_brown.svg"
          alt="玻璃心選物"
          style="width: 100px"
        />
      </a>
      <q-btn-dropdown
        size="16px"
        color="white"
        text-color="brown-9"
        label="餐廚"
        unelevated
      >
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label href="/" class="text-body1 text-brown-9"
                >碗盤</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>

<script setup>
defineOptions({
  name: "MainHeader",
});
</script>
