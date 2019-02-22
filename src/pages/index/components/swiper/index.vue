<template>
  <!-- swiper -->
  <!-- <d2-container type="ghost"> -->

  <swiper
    :options="swiperOption"
    style="height:100%;border-radius:4px;"
  >
    <swiper-slide>滑块一</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div
      class="swiper-pagination"
      slot="pagination"
      style="height:2px"
    ></div>
    <div
      class="swiper-button-next"
      slot="button-next"
    ></div>
  </swiper>
  <!-- </d2-container> -->
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next'
        }
      }
    }
  }
}
</script>
<style>
</style>
