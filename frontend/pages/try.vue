<template>
  <div>
    <div ref="div1" class="h-[900px] bg-red-200"></div>
    <div ref="div2" class="h-[500px] bg-green-300"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        /* you will have multiple entries when you have threshold more than one */
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) {
            console.log('not intersection')
            return
          }

          this.observer.unobserve(target)

          /* TODO: add data-[position] to every card. then remove class depending to position */
          console.log('intersected')
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
    this.observer.disconnect()
  },
  methods: {
    initObserver(count = 10) {
      this.$nextTick(() => {
        if (this.$refs.div1) {
          this.observer.observe(this.$refs.div1)
          this.observer.observe(this.$refs.div2)
        } else if (count > 0) {
          this.initObserver(count - 1)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
