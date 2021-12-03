<template>
  <div
    id="surec"
    ref="surec"
    class="relative py-24 intersect--item hide--intersect"
  >
    <div
      class="particle__container absolute top-0 left-0 w-full h-full overflow-hidden"
    >
      <client-only>
        <Particles
          color="#A2A2A2"
          :particles-number="100"
          shape-type="circle"
          :particle-size="2"
          movement-direction="bottom"
          lines-color="#A2A2A2"
          :line-linked="true"
          :move-speed="0.5"
        />
      </client-only>
    </div>
    <!-- below style is for horizontal centering on absolute-->
    <div class="grid grid-flow-col gap-x-4 justify-center">
      <img
        src="~/assets/img/workProgress.jpg"
        alt=""
        style="width: 450px; height: 480px"
      />
      <div class="surec__content pl-12">
        <div>
          <span>Süreç #1</span>
          <div class="title__container">
            <h1>Bütçeni Belirle</h1>
            <span class="completed">Tamamlandı</span>
          </div>
          <p>
            Sen bütçeni söyle ve biz bulalım. Her aileye ve her türlü yaşam
            tarzına uygun evler avcunun içinde. Geride durma ve harekete geç.
          </p>
        </div>
        <div>
          <span>Süreç #2</span>
          <div class="title__container">
            <h1>Seçimini Yap</h1>
            <span class="completed">Tamamlandı</span>
          </div>
          <p>
            Bütçene uygun taradığımız ve sana sunduğumuz evlerden seçimi yap.
            Hemen taşıyalım. Bütük evrak işlemlerini hazırlayalım. Gerekirse
            taşıma şirketini ayağına getirelim
          </p>
        </div>
        <div>
          <span>Süreç #3</span>
          <div class="title__container">
            <h1>Hayalini yaşa</h1>
            <span class="waiting">Bekliyor</span>
          </div>
          <p>
            İşte o an. Huzura erdiğin ve evinin koltuğunda oturup ailenle
            geçirdiğin zaman.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Particles from '~/components/landing/Particles.vue'

export default {
  components: {
    Particles,
  },
  props: {
    observer: {
      type: IntersectionObserver,
      default: () => {},
    },
  },
  mounted() {
    this.initObserver()
  },

  methods: {
    initObserver(count = 10) {
      this.$nextTick(() => {
        if (this.$refs.surec) {
          this.observer.observe(this.$refs.surec)
        } else if (count > 0) {
          this.initObserver(count - 1)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#surec {
  width: 100%;
  .particle__container {
    z-index: -100;
  }
  .surec__content {
    width: 32rem;
    > div {
      margin-bottom: 3rem;
      > span {
        color: grey;
        font-weight: bold;
        font-size: 1.2rem;
        position: relative;
        &:before {
          background-color: #95c425;
          content: '';
          height: 0.2rem;
          font-size: 1.3rem;
          font-weight: 600;
          left: -1.5rem;
          opacity: 0.6;
          position: absolute;
          top: 0.8rem;
          width: 1rem;
        }
      }
      .title__container {
        display: flex;
        align-items: center;
        > h1 {
          font-weight: bolder;
          font-size: 1.4rem;
        }
        .completed {
          margin-left: 0.5rem;
          background-color: #28a745;
          color: white;

          display: inline-block;
          font-size: 0.7rem;
          font-weight: 500;
          padding: 0.1rem 0.2rem 0.2em 0.2rem;
        }
        .waiting {
          margin-left: 0.5rem;
          background-color: grey;
          color: white;

          display: inline-block;
          font-size: 0.7rem;
          font-weight: 500;
          padding: 0.1rem 0.2rem 0.2em 0.2rem;
        }
      }
      p {
        padding-top: 0.7rem;
        color: rgb(99, 99, 99);
        font-weight: 300;
      }
    }
  }
}
</style>
