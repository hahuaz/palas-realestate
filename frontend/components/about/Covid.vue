<template>
  <div class="covid py-24 mw-1170">
    <h1 class="covid__title font-bold text-2xl relative my-8 text-center">
      <span class="title--span">
        Covid-19 Süresince Hizmete Devam Ediyoruz
      </span>
    </h1>
    <div class="grid grid-cols-5 items-center mt-12">
      <div class="col-span-3">
        <img src="~/assets/img/hakkimizda-covid.jpg" alt="" class="w-full" />
      </div>
      <div class="col-span-2 ml-8">
        <p class="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur
          veritatis quisquam labore suscipit! Quos odit iste dolor officia
          possimus fuga! Iste nobis eius laboriosam saepe, maiores natus magnam
          ipsum. Molestias, ad quia id ipsa nulla nobis consequuntur porro qui.
          Maiores facilis adipisci dolores in voluptatum facere totam,
          recusandae ratione magni aperiam dolore, odio porro et. Quam
          necessitatibus officiis natus. Nihil maxime minima esse blanditiis
          similique pariatur inventore, praesentium id facere libero odit
          <br />
          <br />
          quisquam recusandae possimus soluta delectus doloremque porro ea!
          Quibusdam suscipit culpa, neque accusantium illo atque exercitationem
          quas. Provident, adipisci hic qui quo error non reprehenderit enim,
          nostrum cum ab blanditiis ratione, sed deleniti necessitatibus eveniet
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.covid {
  &__title {
    font-size: 2rem;
    width: 100%;
    text-align: center;
    border-bottom: 3px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;
    .title--span {
      background: white;
      padding: 0 10px;
    }
  }
}

// .before-hype::before {
// }
</style>
