<template>
  <div>
    <!-- Main slider -->
    <splide ref="primary" :options="primaryOptions" class="mb-2">
      <splide-slide v-for="(resim, i) in resimler" :key="i">
        <img :src="resim.url" />
      </splide-slide>
    </splide>

    <!-- Thumbnail slider -->
    <splide ref="secondary" :options="secondaryOptions">
      <splide-slide v-for="(resim, i) in resimler" :key="i">
        <img :src="resim.formats.thumbnail.url" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
export default {
  props: {
    resimler: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      primaryOptions: {
        type: 'slide',

        pagination: false,
        speed: 550,
        arrows: false,
        cover: true,
        fixedHeight: 540,
      },
      secondaryOptions: {
        fixedHeight: 70,

        fixedWidth: 110,
        type: 'slide',
        gap: '.5rem',
        pagination: false,

        cover: true,
        perMove: 1,
        focus: 'center',
        isNavigation: true,
        trimSpace: true,
      },
    }
  },

  mounted() {
    // Set the sync target.
    this.$refs.primary.sync(this.$refs.secondary.splide)
  },
  methods: {},
}
</script>
