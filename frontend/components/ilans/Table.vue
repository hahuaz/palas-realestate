<template>
  <div>
    <div class="">
      <div
        class="content-col grid grid-cols-1 content-start divide-dashed divide-y-2 divide-gray-300"
      >
        <div>
          <span>Fiyat:</span>
          <p class="tl">
            {{ ilan.fiyat.toLocaleString() }} <span class="turkish-lira"></span>
          </p>
        </div>
        <div>
          <span>Aydat:</span>

          <p>
            {{ ilan.aydat.toLocaleString() }} <span class="turkish-lira"></span>
          </p>
        </div>
        <div>
          <span>Emlak Tipi:</span>
          <p>{{ ilan.emlakTipi === 'Rent' ? 'Kiralık' : 'Satlık' }}</p>
        </div>
        <div>
          <span>İlan Tarihi:</span>
          <p>{{ yayimTarihi }}</p>
        </div>
        <div>
          <span>M2 Brüt:</span>
          <p>{{ ilan.m2Brut }}</p>
        </div>
        <div>
          <span>M2 Net:</span>
          <p>{{ ilan.m2Net }}</p>
        </div>
        <div>
          <span>Oda Sayisi:</span>
          <p>{{ ilan.odaSayisi }}</p>
        </div>
        <div>
          <span>Bina yaşı:</span>
          <p>{{ ilan.binaYasi }}</p>
        </div>
        <div>
          <span>Kat:</span>
          <p>{{ ilan.kat }}</p>
        </div>
        <div>
          <span>Isıtma:</span>
          <p>{{ ilan.isitma }}</p>
        </div>
        <p class="text-center">
          {{ ilan.adres }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ilan: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      tlEntity: '&#8378',
    }
  },
  computed: {
    yayimTarihi() {
      const arr = this.ilan.createdAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-')
      return arr
    },
  },
}
</script>

<style lang="scss" scoped>
.content-col {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  p {
    padding: 0.4rem 0;
    font-weight: bold;
    color: rgb(65, 65, 65);
  }
  span {
    padding: 0.4rem 0;
  }
}
</style>
