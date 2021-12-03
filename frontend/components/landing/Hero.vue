<template>
  <div id="hero" class="relative mb-32">
    <div
      class="hero__content bg-gray-900 bg-opacity-80 rounded-md px-24 pb-20 grid items-center absolute -bottom-32 left-28 2xl:left-52"
    >
      <div class="font-bold">
        <div class="relative top-8">
          <img class="m-auto" src="~/assets/brand-landing.png" alt="" />
        </div>
        <div class="w-min m-auto">
          <!-- <hr class="fancy relative top-5" /> -->
          <p
            class="landing__text whitespace-nowrap text-center text-white lg:text-4xl 2xl:text-5xl"
          >
            GAYRİMENKULE <br />
            SOLUK GETİRİYORUZ
          </p>
          <hr class="fancy relative top-3" />
        </div>
      </div>
    </div>
    <div class="background--image"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#hero {
  height: 700px;

  margin-bottom: 8rem;

  .background--image {
    background-image: linear-gradient(
        to bottom,
        rgba(black, 0.05),
        rgba(black, 0.2)
      ),
      url('~/assets/img/landing.jpg');
  }

  .landing__text {
    font-family: europe;
  }

  hr.fancy {
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color: white;
    border-width: 1px 0 0 0;
    border-radius: 20px;
  }
  hr.fancy:before {
    /* Not really supposed to work, but does */
    display: block;
    content: '';
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: white;
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }
}
</style>
