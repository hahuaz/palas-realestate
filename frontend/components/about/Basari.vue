<template>
  <div class="">
    <div class="basari mt-24 mb-12">
      <h1 class="brand__title text-center">PALAS</h1>
      <h6 class="second__title">
        I am proud to be part of the Compass family in San Francisco. Having
        begun my relationship with Compass as an associate broker in NYC, it's
        great to be home.
      </h6>
      <div class="grid grid-cols-5 mt-12 items-center">
        <div class="basari__content col-span-3 mr-10">
          <p>
            <span> #1</span>
            İşimizi en iyi yapıyoruz. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ipsa commodi rem quam mollitia aspernatur
            officiis, minus in culpa, error sed sunt labore optio sequi incidunt
            corrupti molestiae blanditiis amet hic.
          </p>
          <p>
            <span>#2</span>
            Ataşehirde 10 yılı aşkın süredir hizmetteyiz. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Ipsa commodi re.
          </p>
          <p>
            <span>#3</span>
            Yüzlerce kişiyi ev sagibi yaptık. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsa commodi re.
          </p>
        </div>
        <div class="col-span-2">
          <img src="~/assets/img/hakkimizda-basari.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.basari {
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  font-family: jura;

  .brand__title {
    font-family: goblin;
    font-size: 5rem;
    font-weight: bold;
  }
  .second__title {
    font-size: 1.7rem;
    line-height: 2rem;
  }
  &__content {
    p {
      text-transform: uppercase;
      font-weight: bold;

      span {
        color: var(--theme-green);
        margin-right: 0.5rem;
      }
    }
    p:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}
</style>
