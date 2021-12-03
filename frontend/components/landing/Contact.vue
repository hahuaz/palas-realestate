<template>
  <div
    id="contact"
    ref="contact"
    class="relative py-24 mt-24 intersect--item hide--intersect"
  >
    <div class="content grid grid-flow-col gap-x-4 justify-center">
      <div class="text-right content__caption" style="">
        <p class="text-6xl font-bold mt-8 leading-snug">
          Hayalleriniz İçin Yeni Yaşamlar
        </p>
        <p class="text-gray-500 mt-12 p-4 md:pl-44">
          İhtiyacınız olan evi sizinle buluşturmak için buradayız. Şimdi bizimle
          iletişime geçin ve aradığınız eve hızlıca kavuşun. Bizimle tanışın...
        </p>
        <nuxt-link to="#">
          <button
            ref="contactButton"
            class="intersect--item opacity--zero md:mt-6 bg-transparent hover:bg-green-500 text-green-700 font-bold hover:text-white py-2 px-4 border border-green-500 border-4 hover:border-transparent rounded"
          >
            İletişim
          </button>
        </nuxt-link>
      </div>
      <div class="w-96">
        <img
          src="~/assets/img/contact.jpg"
          alt=""
          style="width: 450px; height: 480px"
        />
      </div>
    </div>
    <div class="section__img"></div>
  </div>
</template>

<script>
export default {
  props: {
    observer: {
      type: IntersectionObserver,
      default: () => {},
    },
  },
  data() {
    return {
      buttonTransition: null,
    }
  },
  mounted() {
    this.buttonTransition = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) {
            return
          }
          this.buttonTransition.unobserve(target)
          setTimeout(() => {
            target.classList.remove('opacity--zero')
          }, 500)
        })
      },
      {
        root: null,
        threshold: 1,
      }
    )
    this.initObserver()
  },
  beforeDestroy() {
    this.buttonTransition.disconnect()
  },
  methods: {
    initObserver(count = 10) {
      this.$nextTick(() => {
        if (this.$refs.contactButton) {
          this.buttonTransition.observe(this.$refs.contactButton)
          this.observer.observe(this.$refs.contact)
        } else if (count > 0) {
          this.initObserver(count - 1)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#contact {
  overflow: hidden;
  .content {
    &__caption {
      width: 31rem;
    }
  }

  .section__img {
    // generated pattern
    background-color: rgba(232, 232, 232, 0.2);
    opacity: 0.18;
    background-image: radial-gradient(
      #000000 1px,
      rgba(232, 232, 232, 1) 1.1px
    );
    background-size: 11px 11px;

    // configs
    position: absolute;
    top: 3rem;
    left: 20%;
    z-index: -2;
    width: 60%;
    height: 40%;
  }
}
</style>
