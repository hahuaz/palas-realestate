<template>
  <div class="single-ilan shadow-lg relative bg-white">
    <nuxt-link :to="`/ilanlar/${ilan.id}`">
      <div class="h-72 max-w-sm">
        <img
          class="w-full h-full object-cover object-center"
          :src="ilan.resimler[0].url"
          alt=""
          style=""
        />
      </div>
      <div class="ilan__content">
        <div
          class="text-center border-t border-b border-gray-300 my-2 mx-4 py-1"
        >
          <p class="">{{ ilan.adres }}</p>
          <div class="grid grid-flow-col justify-around mt-1">
            <p>
              <font-awesome-icon
                :icon="['fas', 'door-open']"
                class="text-lg text-gray-700"
              />
              {{ ilan.odaSayisi }}
            </p>
            <p>
              {{ ilan.fiyat.toLocaleString() }}
              <span class="turkish-lira"></span>
            </p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    ilan: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tlEntity: '&#8378',
    }
  },
}
</script>

<style lang="scss" scoped>
.single-ilan {
  .ilan__content {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }
}
</style>
