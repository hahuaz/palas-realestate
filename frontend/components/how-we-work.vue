<template>
  <div class="py-24">
    <div class="text-gray-800 pb-12 text-center">
      <h1 class="text-3xl font-sans font-bold">
        En İyilerini Keşfedin - Nasıl Çalışıyoruz?
      </h1>
    </div>
    <div class="how-we-work-content grid grid-flow-row gap-4 md:grid-flow-col">
      <div class="item">
        <div class="count">1</div>
        <div class="icon-wrapper map-marked-alt">
          <font-awesome-icon
            :icon="['fas', 'map-marked-alt']"
            class="text-6xl text-theme-green"
          />
        </div>
        <div class="content my-4">
          <h4 class="font-sans text-lg font-bold mb-4 text-gray-800">
            Evinizi Seçin
          </h4>
          <p class="font-mono text-sm text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have Ipsum available.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="count">2</div>
        <div class="icon-wrapper user-friends">
          <font-awesome-icon
            :icon="['fas', 'user-friends']"
            class="text-6xl text-theme-green"
          />
        </div>
        <div class="content my-4">
          <h4 class="font-sans text-lg font-bold mb-4 text-gray-800">
            Ajansımızla Görüşün
          </h4>
          <p class="font-mono text-sm text-gray-600">
            Size evi tanıtmaktan çift taraflı sözleşmeyi hazırlamaya kadar
            herşeyi hazırlayalım.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="count">3</div>
        <div class="icon-wrapper">
          <font-awesome-icon
            :icon="['fas', 'clipboard-list']"
            class="text-6xl text-theme-green"
          />
        </div>
        <div class="content my-4">
          <h4 class="font-sans text-lg font-bold mb-4 text-gray-800">
            Anlaşmayı Yapalım
          </h4>
          <p class="font-mono text-sm text-gray-600">
            Bütün işlemleri biz hallediyoruz. Seçtiğiniz eve sahip olmak için
            size sadece imza atmak kalıyor.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.how-we-work-content {
  max-width: 1240px;
  margin: 0 auto;
  .item {
    position: relative;
    border: 1px solid #dbe8fb;
    padding: 40px 20px;
    text-align: left;
    max-width: 300px;
    border-radius: 0 70px;
    margin: 0 auto;
    .map-marked-alt {
      &::before {
        position: absolute;

        content: url('~/assets/img/arrow-right-2.png');
        width: auto;
        height: auto;
        background: transparent;
        left: 106%;
        top: 50%;
        @media only screen and (max-width: 1200px) {
          display: none;
        }
      }
    }
    .user-friends {
      &::before {
        position: absolute;

        content: url('~/assets/img/arrow-right-1.png');
        width: auto;
        height: auto;
        background: transparent;
        left: 106%;
        top: 50%;
        @media only screen and (max-width: 1200px) {
          display: none;
        }
      }
    }
    .count {
      position: absolute;
      top: 0;
      right: 0;
      text-align: center;
      width: 70px;
      height: 70px;
      background: #ecfff0;
      line-height: 70px;
      font-size: 18px;
      font-weight: bolder;
      border-left: 1px solid #dbe8fb;
      border-bottom: 1px solid #dbe8fb;
      border-radius: 0 70px;
      font-family: sans-serif;
      color: #10b981;
    }
    .icon-wrapper {
    }
  }
}
</style>
