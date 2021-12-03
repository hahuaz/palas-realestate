<template>
  <div id="navbar" class="bg-gray-50 w-full shadow-lg">
    <div
      ref="navbar"
      class="navbar__container grid grid-flow-col justify-between items-center py-4 px-4 xl:px-8"
    >
      <NuxtLink id="brand" to="/">
        <img src="~/assets/brand-nav.png" class="w-28" alt="" />
      </NuxtLink>
      <div class="nav__links grid grid-flow-col items-center">
        <NuxtLink to="/">Anasayfa</NuxtLink>

        <NuxtLink to="/ilanlar" :class="{ customActive: isActive }"
          >İlanlar</NuxtLink
        >

        <NuxtLink to="/hakkimizda"> Hakkımızda</NuxtLink>
        <nuxt-link :to="{ path: '/', hash: '#contact' }"> İletişim</nuxt-link>
        <span class="c-divider"></span>
        <span class="nav-info">+90 544 666 34 34</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    if (this.$route.name === 'ilanlar-id') this.isActive = true
  },
}
</script>

<style lang="scss" scoped>
#navbar {
  .nav__links {
    > a:not(:last-child) {
      margin-right: 1.5rem;
    }
    > a {
      border-bottom: 2px solid transparent;
      font-family: poppins;
      font-size: 14px;
      color: black;
      opacity: 0.5;
      &.customActive {
        opacity: 1;
        border-bottom: 2px solid var(--theme-green);
      }
    }
    .c-divider {
      background-color: #000000;
      height: 2rem;
      width: 0.1rem;

      opacity: 0.1;
    }
    .nav-info {
      font-size: 12px;
      opacity: 0.4;
      margin-left: 1.5rem;
      font-weight: 600;
    }
  }
  a.nuxt-link-exact-active:not(#brand) {
    opacity: 1;
    border-bottom: 2px solid var(--theme-green);
  }
}
</style>
