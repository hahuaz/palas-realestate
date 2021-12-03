<template>
  <div ref="nav" class="nav pt-12 pb-48 intersect--item hide--intersect">
    <h1 class="py-24 text-5xl font-bold font-serif text-center">
      Hizmetlerimizden Faydalanın
    </h1>
    <client-only>
      <div class="nav__content grid gap-x-8 grid-flow-col justify-center">
        <nuxt-link to="/ilanlar?emlakTipi=">
          <div ref="cardLeft" class="card glide-right opacity--zero">
            <div class="rounded-2xl bg-red-900">
              <span class="card__title">Kiralık Evler</span>
              <div
                class="card__img"
                :style="{ backgroundImage: `url(${kiralikImg})` }"
              ></div>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/ilanlar?emlakTipi=">
          <div ref="cardMiddle" class="card glide-up opacity--zero">
            <span class="card__title">Satlık Evler</span>
            <div
              class="card__img"
              :style="{ backgroundImage: `url(${satilikImg})` }"
            ></div>
          </div>
        </nuxt-link>
        <nuxt-link to="/ilanlar?emlakTipi=">
          <div ref="cardRight" class="card glide-left opacity--zero">
            <span class="card__title">Ofis & İşyeri</span>
            <div
              class="card__img"
              :style="{ backgroundImage: `url(${officeImg})` }"
            ></div>
          </div>
        </nuxt-link>
      </div>
    </client-only>
    <div class="background--image"></div>
  </div>
</template>

<script>
import kiralikImg from 'assets/img/kiralik.jpg'
import satilikImg from 'assets/img/satilik.jpg'
import officeImg from 'assets/img/office.jpg'

export default {
  props: {
    observer: {
      type: IntersectionObserver,
      default: () => {},
    },
  },
  data() {
    return {
      kiralikImg,
      satilikImg,
      officeImg,
      cardTransition: null,
    }
  },
  mounted() {
    /* TODO: on ssr observer is not defined. try to observe on parent with refs see if it get rids of warn */
    // this.observer.observe(this.$el)

    /* animate cards when they reval */
    this.cardTransition = new IntersectionObserver(
      (entries) => {
        /* you will have multiple entries when you have threshold more than one */
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) {
            return
          }

          this.cardTransition.unobserve(target)

          /* TODO: add data-[position] to every card. then remove class depending to position */
          target.classList.remove(
            'opacity--zero',
            'glide-right',
            'glide-up',
            'glide-left'
          )
        })
      },
      {
        root: null,
        threshold: 0.4,
      }
    )

    /* TODO: if you use ref inside the loop it gives you iterable. so use v-for to create cards then you can observe with iteration */

    /* if refs is component use $el attribute on that component to give element to observe */
    /* on ssr refs may not be ready.if it's not ssr you can directly observe here */
    this.initObserver()
  },
  beforeDestroy() {
    this.cardTransition.disconnect()
  },
  methods: {
    initObserver(count = 10) {
      this.$nextTick(() => {
        if (this.$refs.cardLeft) {
          this.cardTransition.observe(this.$refs.cardLeft)
          this.cardTransition.observe(this.$refs.cardMiddle)
          this.cardTransition.observe(this.$refs.cardRight)
          this.observer.observe(this.$refs.nav)
        } else if (count > 0) {
          this.initObserver(count - 1)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.glide-right {
  transform: translateX(-60px);
}

.glide-left {
  transform: translateX(60px);
}

.glide-up {
  transform: translateY(60px);
}

.nav {
  .background--image {
    background-image: linear-gradient(rgba(gray, 0.5), rgba(gray, 0.5)),
      url('~/assets/img/pattern-circle.png');
    opacity: 0.12;
    background-repeat: repeat;
    background-size: auto;
  }
  &__content {
    position: relative;
    width: 100%;
    // height will come from container automaticly

    .card {
      position: relative;
      height: 450px;
      width: 350px;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
      border-radius: 5px;
      overflow: hidden;
      transition: transform 1s, opacity 1s;

      &:hover {
        box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.75);
      }
      &__img {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;

        &::before {
          position: absolute;
          content: '';
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-image: linear-gradient(
            to bottom,
            transparent 60%,
            rgba(black, 0.9) 100%
          );
        }
      }
      &__title {
        position: absolute;
        bottom: 3rem;
        left: 1.5rem;
        font-size: 2.5rem;
        line-height: 2.5rem;
        font-weight: bold;
        color: white;
      }
    }
  }
}
</style>
