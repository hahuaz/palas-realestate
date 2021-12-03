<template>
  <div class="">
    <div class="pt-12">
      <div class="mw-1170 grid grid-cols-5 justify-center items-center">
        <div class="carousel__container col-span-3">
          <hr class="fadeHr" />
          <p class="text-center py-1 px-4 text-base font-bold uppercase">
            {{ ilan.baslik }}
          </p>
          <hr class="fadeHr" />
          <ilans-splide-carousel
            :resimler="ilan.resimler"
            class="p-4"
          ></ilans-splide-carousel>
        </div>
        <div class="table__container col-span-2 ml-12">
          <ilans-table :ilan="ilan"></ilans-table>
          <div class="brochure__container">
            <ilans-brochure></ilans-brochure>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="ilan__details">
        <div class="mw-1170 grid grid-cols-2 justify-between py-12 gap-x-4">
          <div>
            <hr class="fadeHr" />
            <p class="text-center py-1 px-4 text-base font-bold uppercase">
              Detaylar
            </p>
            <hr class="fadeHr" />
            <div
              class="unresetCss"
              style="font-family: sans-serif; font-size: 0.9rem mt-4"
              v-html="ilan.tanitim"
            ></div>
          </div>
          <div>
            <hr class="fadeHr" />
            <p class="text-center py-1 px-4 text-base font-bold uppercase">
              Konum
            </p>
            <hr class="fadeHr" />
            <ilans-google-maps
              class="mt-4"
              :mapLocation="ilan.googleHarita"
            ></ilans-google-maps>
          </div>
        </div>
      </div>
    </section>
    <section>
      <how-we-work></how-we-work>
    </section>
  </div>
</template>

<script>
export default {
  // middleware({ store, redirect }) {
  //   if (!store.state.konuts.length) {
  //     return redirect('/ilanlar')
  //   }
  // },

  /* eslint-disable */
  async asyncData({ params, store }) {
    const ilan = await store.dispatch('fetchKonut', { id: params.id })
    return { ilan }
  },
  /* eslint-disable */
  data() {
    return {}
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 600)
    // })
  },
}
</script>

<style lang="scss" scoped>
.fadeHr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 25%,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0) 75%
  );
}

.carousel__container {
  width: 100%;
}

.ilan__details {
  background-color: #f6faff;
}
</style>
