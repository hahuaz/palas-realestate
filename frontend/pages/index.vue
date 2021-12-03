<template>
  <div>
    <landing-hero></landing-hero>

    <!-- you can observe component directly in this page with refs. but giving it to child and observing there is best practise because "with refs, we can't always assure they contain existing DOM element references if the children components are conditionally rendered with v-if or v-show directives " -->
    <client-only>
      <section>
        <landing-nav :observer="observer"></landing-nav>
      </section>
      <section>
        <landing-contact :observer="observer"></landing-contact>
      </section>
      <section>
        <landing-surec :observer="observer"></landing-surec>
      </section>
    </client-only>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  layout: 'nav-on-img',
  data() {
    return {
      observer: null,
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: null,
      threshold: 0.4,
    })

    this.initObserver()
  },
  beforeDestroy() {
    this.observer.disconnect()
  },

  methods: {
    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) {
          return
        }
        this.observer.unobserve(target)

        target.classList.remove('hide--intersect')
      })
    },
    initObserver(count = 10) {
      this.$nextTick(() => {
        if (this.$refs.nav) {
          this.observer.observe(this.$refs.nav)
          this.observer.observe(this.$refs.contact)
          this.observer.observe(this.$refs.surec)
        } else if (count > 0) {
          this.initObserver(count - 1)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
