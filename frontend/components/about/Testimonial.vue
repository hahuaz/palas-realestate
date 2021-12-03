<template>
  <div class="testimonial my-56">
    <div class="text-center mw-1170">
      <blockquote class="md:py-12 md:px-24">
        <font-awesome-icon icon="quote-left" class="text-7xl text-green-500" />
        <p class="text-gray-600 text-xl py-8 font-mono leading-relaxed">
          Hizmetlerinden çok memnun kaldım. Beraber çay içip öncelikli
          ihtiyaçlarımı göz önünde bulundurarak beni en uygun eve
          yönlendirdiler. Sağolsun Erol bey aracıyla beni aldı ve bıraktı. Uzun
          zamandır ev değiştirmiyordum. Çekindiğim bu süreçte benimleydiler.
        </p>
        <span class="testimonial--name font-bold">Salim Beyyürek</span>
      </blockquote>
    </div>
    <div class="background--image"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.testimonial {
  /* TODO refoctor the app for background as below */
  .background--image {
    background-image: linear-gradient(rgba(white, 0.85), rgba(white, 0.85)),
      url('~assets/img/testimonial.jpg');
  }

  .testimonial--name {
    position: relative;
    margin-right: -5rem;
    &:before {
      background-color: #000000;
      bottom: 0;
      content: '';
      left: -5.8rem;
      height: 2px;
      margin: auto;
      position: absolute;
      top: 0;
      opacity: 0.4;
      width: 5rem;
    }
  }
}
</style>
