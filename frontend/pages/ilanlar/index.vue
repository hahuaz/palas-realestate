<template>
  <div>
    <section>
      <div class="ilans">
        <div class="background--wrapper">
          <div class="background--image"></div>
        </div>
        <div class="mw-1170 py-8">
          <h1 class="ilans__title pb-6">Aktif İlanlar</h1>
          <div class="grid grid-cols-3 gap-x-8 gap-y-8 grid-flow-row">
            <ilans-single v-for="(ilan, i) in ilans" :key="i" :ilan="ilan">
            </ilans-single>
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
  layout: 'nav-on-img',

  async fetch() {
    this.$nextTick(() => {
      /* During your page component's mounting process, the $loading property may not be immediately available to access. */
      this.$nuxt.$loading.start()
    })
    await this.$store.dispatch('fetchKonuts')
    this.$nuxt.$loading.finish()
  },
  computed: {
    ilans() {
      return this.$store.state.konuts
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.background--wrapper {
  height: 340px;
  .background--image {
    background-image: linear-gradient(rgba(black, 0.2), rgba(black, 0.2)),
      url('~/assets/img/ilans-nav-background.jpg');
    background-position: center;
  }
}
.ilans {
  background-color: #f5faff;
  &__title {
    font-size: 1.4rem;
    overflow: hidden;
    &::before,
    &::after {
      background-color: #000;
      content: '';
      display: inline-block;
      height: 2px;
      position: relative;
      vertical-align: middle;
    }
    &::before {
      width: 10%;
      right: 0.5em;
    }
    &::after {
      width: 100%;
      left: 0.5em;
      margin-right: -50%;
    }
  }
}
</style>
