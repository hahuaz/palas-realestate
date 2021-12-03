<template>
  <div class="meet">
    <div class="meet--container relative my-24">
      <div class="meet--img ml-4 mb-4"></div>

      <h1 class="meet__title pb-4">Burak'la Tanışın</h1>

      <p class="meet__text text-gray-500">
        I started my real estate career in New York City, a spunky 20-something
        with a big idea and nothing to lose. After making it through the Great
        Recession still standing, I built my business up to the top 3% of
        company agents nationwide. I knew then that this was the career for me.
        Settling back into the Bay Area equipped with this experience, I
        fine-tuned my process and strategies to give my clients the best
        possible buying or selling experience. To me, the best part of this
        profession is that it provides an opportunity for me to build genuine
        relationships with each client and fellow agent. <br />
        <br />Now, over a decade later, this business has become who I am. It
        has seen me through a cross country move, a wedding, a Graduate degree,
        purchasing my first house, my first renovation, and my first child.
        These experiences have helped me to become better and better at doing
        what I love. From San Francisco to Marin, the landscape, architecture,
        and people fill me with energy. From Craftsman to mid-century homes and
        beamed ceilings to bay windows, working in and around these properties
        gives me a great sense of local pride. I have a strong ability to advise
        on proper pricing, develop a staging and marketing aesthetic, negotiate
        fiercely, and build strong relationships with other agents, effectively
        allowing for smoother deals from the first offer to the close of escrow.
        I save you stress and time, and I won't leave a penny on the table.<br /><br />
        My team flawlessly harmonizes the preparation of your property and
        provides resources for anything from cleaners to storage and moving
        companies. When you work with me, you can expect a direct, hands-on
        approach with strategy, insight, and exceptional service. Jennifer lives
        with her husband, their daughter, and their miniature bull terrier,
        Tusker, at their home in Corte Madera. She earned her BA in Psychology
        from the University of California, Santa Barbara, and her MS in
        Nutrition and Functional Medicine from the University of Western States.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.meet {
  &--container {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  &--container::before {
    content: '';
    width: 0;
    height: 95%;
    position: absolute;
    border: 1px dotted gray;
    top: 3rem;
    left: -1.6rem;
  }
  &__title {
    position: relative;
    left: -1.7rem;
  }

  &--img {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    background-image: url('~/assets/img/burak.jpg');
    width: 340px;
    height: 400px;
    float: right;
  }

  &__text {
    font-size: 1.1rem;
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
