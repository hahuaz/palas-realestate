<template>
  <div>
    <div class="background--wrapper">
      <div class="background--image"></div>
    </div>
    <section>
      <about-basari></about-basari>
    </section>
    <section>
      <about-testimonial></about-testimonial>
    </section>
    <section>
      <about-meet></about-meet>
    </section>

    <section>
      <about-covid></about-covid>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'nav-on-img',
}
</script>

<style lang="scss" scoped>
.background--wrapper {
  height: 340px;
  .background--image {
    background-image: linear-gradient(rgba(black, 0.2), rgba(black, 0.2)),
      url('~/assets/img/hakkimizda-nav-background.jpg');
  }
}
</style>
