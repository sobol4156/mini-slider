<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import {Product} from '../interfaces/Product'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Navigation, Pagination];

const props = defineProps<{
  products: Product[];
}>();

const product = ref<Product | undefined>(undefined);
onMounted(() => {
  product.value = props.products[0];
});
</script>

<template>
  <article v-if="product" class="product">
    <div class="product__gallery">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        :navigation="true"
        :pagination="true"
      >
        <swiper-slide>
          <img
            class="swiper_main-img"
            :src="product.galleryPhoto.photo1"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="swiper_main-img"
            :src="product.galleryPhoto.photo2"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="swiper_main-img"
            :src="product.galleryPhoto.photo3"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="swiper_main-img"
            :src="product.galleryPhoto.photo4"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="swiper_main-img"
            :src="product.galleryPhoto.photo5"
            alt=""
          />
        </swiper-slide>
      </swiper>
      <ul class="product__gallery-list">
        <li class="product__gallery-item">
          <picture><img :src="product.galleryPhoto.photo2" alt="" /></picture>
        </li>
        <li class="product__gallery-item">
          <picture><img :src="product.galleryPhoto.photo3" alt="" /></picture>
        </li>
        <li class="product__gallery-item">
          <picture><img :src="product.galleryPhoto.photo4" alt="" /></picture>
        </li>
        <li class="product__gallery-item">
          <picture><img :src="product.galleryPhoto.photo5" alt="" /></picture>
        </li>
      </ul>
    </div>
    <div class="product__text">
      <h1 class="product__title">{{ product.title }}</h1>
      <p class="product__description">{{ product.description }}</p>
    </div>
  </article>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped lang="scss">
.swiper {
  max-width: 694px;
  margin-bottom: 40px;
}
.product {
  display: flex;
  gap: 20px;

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    font-size: 46px;
    line-height: 52px;
    margin: 0;
  }

  &__description {
    font-size: 26px;
    line-height: 32px;
    padding: 0;
    color: var(--secondary-gray);
  }

  &__gallery-list {
    display: flex;
    padding: 0;
    gap: 20px;
    justify-content: space-between;
    list-style-type: none;
  }

  &__gallery-item {
    cursor: pointer;

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }
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

@media (max-width: 1440px) {
  .swiper-slide {
    width: 100% !important;
  }

  .product {
    flex-direction: column;
    align-items: center;

    &__gallery-list,
    &__text {
      max-width: 694px;
    }
  }
}
</style>