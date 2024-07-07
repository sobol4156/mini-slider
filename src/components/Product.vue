<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Navigation, Pagination];
</script>

<template>
  <article class="product">
    <div class="product__gallery">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        :navigation="true"
        :pagination="true"
      >
        <swiper-slide>
          <img class="swiper_main-img" src="/public/img/gallery/1.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img class="swiper_main-img" src="/public/img/gallery/2.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img class="swiper_main-img" src="/public/img/gallery/3.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img class="swiper_main-img" src="/public/img/gallery/4.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img class="swiper_main-img" src="/public/img/gallery/5.webp" alt=""
        /></swiper-slide>
      </swiper>
      <ul class="product__gallery-list">
        <li class="product__gallery-item">
          <picture> <img src="/public/img/gallery/2.webp" alt="" /></picture>
        </li>
        <li class="product__gallery-item">
          <picture> <img src="/public/img/gallery/3.webp" alt="" /></picture>
        </li>
        <li class="product__gallery-item">
          <picture> <img src="/public/img/gallery/4.webp" alt="" /> </picture>
        </li>
        <li class="product__gallery-item">
          <picture> <img src="/public/img/gallery/5.webp" alt="" /></picture>
        </li>
      </ul>
    </div>
    <div class="product__text">
      <h1 class="product__title">Modification name</h1>
      <p class="product__description">
        Description: Are you ready to embark on the wildest bureaucratic
        adventure of your life, do you have a passion for enforcing regulations
        that nobody asked for: Then buckle up, because the Bureau of Land
        Mismanagement is looking for its next Ranger to join our illustrious
        team of paper-pushing eco-warriors!
      </p>
    </div>
  </article>
</template>

<style scoped>
.swiper {
  max-width: 694px;
  margin-bottom: 40px;
}
.product {
  display: flex;
  gap: 20px;
}

.product__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product__title {
  font-size: 46px;
  line-height: 52px;
  margin: 0;
}
.product__description {
  font-size: 26px;
  line-height: 32px;
  padding: 0;
  color: var(--secondary-gray);
}
.product__gallery-list {
  display: flex;
  padding: 0;
  gap: 20px;
  justify-content: space-between;
}
.product__gallery-list {
  list-style-type: none;
}
.product__gallery-item {
  cursor: pointer;
}
.product__gallery-item img {
  max-width: 100%;
  height: auto;
  display: block;
}
.swiper_main-img {
  max-width: 694px;
  max-height: 380px;
  width: 100%;
  height: auto;
  display: block;
}
.swiper-slide {
  height: auto;
  display: block;
}

@media (width<1440px) {
  .swiper-slide {
    width: 100% !important;
  }
  .product {
    flex-direction: column;
    align-items: center;
  }
  .product__gallery-list,
  .product__text {
    max-width: 694px;
  }

}
</style>