<template>
  <div class="grid justify-center content-center h-screen">
    <!-- this is error page. treat it as page even if it's in the layout directory -->
    <p>
      Message: <span class="text-red-600">{{ error.message }}</span>
    </p>
    <p>
      Status code: <span class="text-red-600">{{ error.statusCode }}</span>
    </p>
  </div>
</template>

<script>
export default {
  layout: 'error-layout',
  props: ['error'],
  mounted() {
    console.log(this.error)
  },
}
</script>

<style lang="scss" scoped></style>
