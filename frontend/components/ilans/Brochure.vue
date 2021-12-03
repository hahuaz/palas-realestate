<template>
  <div id="brochure" class="m-4 p-4 bg-blue-50">
    <div
      class="grid grid-flow-col justify-center items-center bg-blue-100 rounded-md"
    >
      <img class="w-28" src="~/assets/brand.png" alt="" />

      <div class="text-primary-blue">
        <span class="text-2xl font-bold font-serif 2xl:text-3xl">
          <span class="underline--magical underline--seventy">Palas</span>
          Emlak</span
        >
        <p class="text-right mt-1 font-mono text-xs">
          sizin için
          <span class="underline--magical underline--full">en iyisi</span>
        </p>
      </div>
    </div>
    <div
      class="grid justify-center gap-y-1 2xl:grid-flow-col gap-x-8 text-primary-blue mt-4"
    >
      <a href="tel:05446287783">
        <div class="brochure__actions mt-2">
          <font-awesome-icon
            :icon="['fas', 'phone-square-alt']"
            class="text-2xl"
          />
          <span class="font-semibold text-sm ml-1">0544 654 77 77</span>
        </div>
      </a>
      <a
        href="https://www.google.com/maps/place/Sancakpark+Mall/@41.0057993,29.2037689,14z"
      >
        <div class="brochure__actions mt-2">
          <font-awesome-icon :icon="['fas', 'map-marker']" class="text-xl" />
          <span class="font-semibold text-sm">Ataşehir - İstanbul</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#brochure {
  max-width: 400px;
  .brochure__actions {
    display: grid;
    grid-template-columns: 25px 1fr;
  }
}

.underline--magical {
  background-image: linear-gradient(120deg, rgb(116 209 76) 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
}
.underline--full {
  background-size: 100% 0.2em;
}
.underline--seventy {
  background-size: 70% 0.2em;
}
</style>
