<template>
  <q-page class="row justify-center q-my-xl">
    <div class="col" style="max-width: 1440px">
      <div class="row justify-center">
        <h5 class="col-12 q-mt-none q-mb-lg text-center text-bold text-brown-9">
          退換貨方法
        </h5>
        <div class="col-8 q-pa-xl card-style text-body1 text-brown-9">
          <p class="q-mb-lg text-body1">
            玻璃心選物致力於提供高品質的商品及服務，若您對購買的商品不滿意，可參考以下退換貨政策：
          </p>
          <div>
            <h6 class="q-ma-none">退換貨條件</h6>
            <ol>
              <li>商品在簽收7天內可提出退換貨申請。</li>
              <li>商品必須保持全新狀態，未使用且包裝完整。</li>
              <li>提供購買憑證（訂單編號）。</li>
            </ol>
          </div>
          <div>
            <h6 class="q-mt-lg q-mb-none">退換貨程序</h6>
            <ol>
              <li>
                通過LINE@（ID：@927xfcpa）聯繫客服，提供訂單編號及退換貨原因。
              </li>
              <li>客服確認後，您將收到退貨地址及指示。</li>
              <li>將商品及購買憑證一併寄回。</li>
              <li>
                收到退貨後，會進行檢查，符合條件者將在7個工作日內處理退款或寄出換貨商品。
              </li>
            </ol>
          </div>
          <div>
            <h6 class="q-mt-lg q-mb-none">退款</h6>
            <ol>
              <li>退款將退還至您原支付方式。</li>
              <li>退款處理完成後，會通過LINE@（ID：@927xfcpa）通知您。</li>
            </ol>
          </div>
          <div>
            <h6 class="q-mt-lg q-mb-none">特殊情況</h6>
            <p>如因商品本身瑕疵或錯誤發貨，玻璃心選物將承擔來回運費。</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "ReturnNotice",
});
</script>
