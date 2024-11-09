<template>
  <q-page
    class="col q-px-lg q-py-xl"
    style="max-width: 1440px; min-height: 0px"
  >
    <div class="row justify-center">
      <h5
        class="col-12 q-mt-none q-mb-lg text-center text-weight-medium text-brown-9"
      >
        購物須知
      </h5>
      <div class="col-lg-8 card-style text-body1 text-justify text-brown-9">
        <p>
          歡迎光臨玻璃心選物，請閱讀以下購物須知，以便您享受愉快的購物體驗。
        </p>
        <div class="q-mb-md">
          <h6 class="q-my-none">訂購流程</h6>
          <ul class="q-my-none">
            <li>瀏覽商品資訊，選擇心儀商品。</li>
            <li>
              通過LINE@（ID：@927xfcpa）聯繫客服，提供訂購商品名稱、顏色、數量、收件人及收貨地址等。
            </li>
            <li>
              客服確認訂單及運費後，請於三個工作天內完成支付，訂單即成立。
            </li>
          </ul>
        </div>
        <div class="q-mb-md">
          <h6 class="q-my-none">付款方式</h6>
          <p class="q-my-none">接受以下付款方式：</p>
          <ul class="q-my-none">
            <li>銀行轉帳（台新銀行）</li>
            <li>超商取貨付款</li>
          </ul>
        </div>
        <div class="q-mb-md">
          <h6 class="q-my-none">配送方式及費用</h6>
          <p class="q-my-none">我們提供多種配送方式，運費及配送時間如下：</p>
          <li>全家純取貨：台灣本島NT$ 60、台灣離島NT$ 100</li>
          <li>
            全家取貨付款：台灣本島NT$ 75、台灣離島NT$
            75（單筆訂單金額需小於10,000）
          </li>
          <li>7-11純取貨：台灣本島NT$ 60、台灣離島NT$ 140</li>
          <li>7-11取貨付款：台灣本島NT$ 60、台灣離島NT$ 140</li>
          <li>免費配送：單筆訂單金額滿NT$ 1,000元即免運</li>
        </div>
        <div class="q-mb-md">
          <h6 class="q-my-none">訂單追蹤</h6>
          <p class="q-my-none">
            完成訂購後，將會通過LINE@（ID：@927xfcpa）提醒出貨並提供訂單配送追蹤號碼，您可隨時查詢訂單狀態。
          </p>
        </div>
        <div class="q-mb-md">
          <h6 class="q-my-none">注意事項</h6>
          <li>下單前請仔細確認商品名稱、顏色、數量、收件人及收貨地址等。</li>
          <li>商品圖片僅供參考，實際商品可能略有不同。</li>
          <li>若遇庫存不足，我們會盡快通知您並提供解決方案。</li>
          <p class="q-my-none">
            感謝您的購物，祝您購物愉快！如有任何疑問，請隨時聯繫我們的客戶服務。
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "ShoppingInfo",
});
</script>
