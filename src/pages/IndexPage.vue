<template>
  <q-page class="flex justify-center">
    <div class="q-my-xl q-mx-md" style="max-width: 1440px; width: 100%">
      <div style="aspect-ratio: 16 / 6">
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
      </div>
      <h5 class="col-12 q-mt-xl q-mb-lg text-center text-bold text-brown-9">
        新品上架
      </h5>
      <div class="q-pa-md row items-start q-gutter-md justify-center">
        <q-card class="col-3 my-card" @click="card = true">
          <q-img src="src/assets/plant-1.jpg" ratio="1" />
          <q-card-section>
            <div class="text-subtitle2 text-brown">碗盤</div>
            <div class="text-h6 text-brown-9 q-mt-xs q-mb-md">
              日本製美濃燒花形盤 11cm
            </div>
            <q-btn
              size="md"
              unelevated
              padding="8px 12px"
              text-color="red-7"
              style="width: 100%"
              >$230</q-btn
            >
          </q-card-section>
        </q-card>

        <!-- 彈出詳細內容 -->
        <q-dialog v-model="card">
          <q-card class="card-style" style="border-radius: 1rem">
            <div style="aspect-ratio: 16 / 9">
              <q-carousel
                animated
                v-model="slide"
                navigation
                infinite
                arrows
                transition-prev="slide-right"
                transition-next="slide-left"
                height="100%"
              >
                <q-carousel-slide :name="1" img-src="src/assets/plant-1.jpg" />
                <q-carousel-slide :name="2" img-src="src/assets/BN1.jpg" />
              </q-carousel>
            </div>
            <q-card-section>
              <div class="row justify-between items-center">
                <div>
                  <div class="text-subtitle2 text-brown">碗盤</div>
                  <div class="text-h6 text-brown-9 q-my-xs">
                    日本製美濃燒花形盤 11cm
                  </div>
                </div>
                <div class="text-h6 text-red-7">$230</div>
              </div>
              <div class="text-body1 text-justify text-grey-7">
                精緻的復古風格小盤，邊緣設計有優雅的波浪形狀，並帶有細緻的紋理，增添觸感與質感。這些小盤適合用來放置小物、首飾或當作餐桌上的點心盤，不僅實用，還能為空間增添自然古典的美感。無論是用於家居裝飾還是送禮，都能展現獨特的品味。
              </div>
            </q-card-section>
            <q-separator />
          </q-card>
        </q-dialog>
        <!-- 彈出詳細內容 -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "IndexPage",
});
const slide = ref(1);
const card = false;
</script>
