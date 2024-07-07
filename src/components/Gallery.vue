<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Navigation, Pagination];
const swiperRef = ref(null);
</script>

<template>
  <main class="main container">
    <article class="product">
      <div class="product__gallery">
        <swiper
          ref="swiperRef.value"
          :slides-per-view="1"
          :space-between="50"
          :modules="modules"
          :navigation="true"
          :pagination="true"
        >
          <swiper-slide>
            <img
              class="swiper_main-img"
              src="/public/img/gallery/1.webp"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              class="swiper_main-img"
              src="/public/img/gallery/2.webp"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              class="swiper_main-img"
              src="/public/img/gallery/3.webp"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              class="swiper_main-img"
              src="/public/img/gallery/4.webp"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              class="swiper_main-img"
              src="/public/img/gallery/5.webp"
              alt=""
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
          adventure of your life, do you have a passion for enforcing
          regulations that nobody asked for: Then buckle up, because the Bureau
          of Land Mismanagement is looking for its next Ranger to join our
          illustrious team of paper-pushing eco-warriors!
        </p>
      </div>
    </article>
    <article class="recommended">
      <div class="recommended__header">
        <h2 class="recommended__header-title">Recommend</h2>
        <span class="recommended__header-span">See all</span>
      </div>
      <ul class="recommended__list">
        <li class="recommended__item">
          <div class="recommended__item-content item-1">
            <img
              class="item-1-img"
              src="/public/img/recommend/stickerRed.webp"
              alt=""
            />
            <ul class="recommended__item-tag-list">
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">subscription+</span>
              </li>
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">sky</span>
              </li>
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">textures</span>
              </li>
            </ul>
            <div class="recommended__item-addition">
              <div class="recommended__item-downloads">
                <img
                  class="recommended__item-downloads-img"
                  src="/public/img/recommend/downloads.webp"
                  alt=""
                />
                <span class="recommended__item-downloads-span">15.000</span>
              </div>
              <div class="recommended__item-favourites">
                <img
                  class="recommended__item-favourites-img"
                  src="/public/img/recommend/favourites.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <h3 class="recommended__item-title">Modification name</h3>
        </li>
        <li class="recommended__item">
          <div class="recommended__item-content item-2">
            <ul class="recommended__item-tag-list">
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">subscription+</span>
              </li>
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">sky</span>
              </li>
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">textures</span>
              </li>
            </ul>
            <div class="recommended__item-addition">
              <div class="recommended__item-downloads">
                <img
                  class="recommended__item-downloads-img"
                  src="/public/img/recommend/downloads.webp"
                  alt=""
                />
                <span class="recommended__item-downloads-span">15.000</span>
              </div>
              <div class="recommended__item-favourites">
                <img
                  class="recommended__item-favourites-img"
                  src="/public/img/recommend/favourites.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <h3 class="recommended__item-title">Modification name</h3>
        </li>
        <li class="recommended__item">
          <div class="recommended__item-content item-3">
            <img
              class="item-3-img"
              src="/public/img/recommend/stickerGreen.webp"
              alt=""
            />
            <ul class="recommended__item-tag-list">
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">subscription+</span>
              </li>
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">sky</span>
              </li>
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">textures</span>
              </li>
            </ul>
            <div class="recommended__item-addition">
              <div class="recommended__item-downloads">
                <img
                  class="recommended__item-downloads-img"
                  src="/public/img/recommend/downloads.webp"
                  alt=""
                />
                <span class="recommended__item-downloads-span">15.000</span>
              </div>
              <div class="recommended__item-favourites">
                <img
                  class="recommended__item-favourites-img"
                  src="/public/img/recommend/favourites.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <h3 class="recommended__item-title">Modification name</h3>
        </li>
        <li class="recommended__item">
          <div class="recommended__item-content item-4">
            <ul class="recommended__item-tag-list">
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">subscription+</span>
              </li>
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">sky</span>
              </li>
              <li class="recommended__item-tag-item">
                <img
                  class="recommended__item-tag-image"
                  src="/public/svg/tag.svg"
                  alt=""
                />
                <span class="recommended__item-tag-span">textures</span>
              </li>
            </ul>
            <div class="recommended__item-addition">
              <div class="recommended__item-downloads">
                <img
                  class="recommended__item-downloads-img"
                  src="/public/img/recommend/downloads.webp"
                  alt=""
                />
                <span class="recommended__item-downloads-span">15.000</span>
              </div>
              <img
                class="recommended__item-favourites-img"
                src="/public/img/recommend/favourites.webp"
                alt=""
              />
            </div>
          </div>
          <h3 class="recommended__item-title">Modification name</h3>
        </li>
      </ul>
    </article>
  </main>
</template>

<style scoped>
.main {
  padding: 32px 10px;
}
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
.recommended__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.recommended__header-title {
  margin: 0;
  font-size: 36px;
  line-height: 42px;
  font-weight: 400;
}
.recommended__list,
.recommended__item-tag-list {
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 10px;
}
.recommended__list {
  justify-content: space-between;
}
.recommended__item-tag-list {
  padding: 8px 16px 0;
  gap: 8px;
}
.recommended__item-tag-span {
  font-size: 13px;
  line-height: 18px;
}
.recommended__item {
  padding: 8px 0;
  border-radius: 20px;
  max-width: 340px;
  max-height: 257px;
  background-color: var(--secondary-dark-blue);
}
.recommended__item-content {
  width: 340px;
  height: 193px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.recommended__item-addition {
  display: flex;
  justify-content: space-between;
  padding: 0 16px 4px;
}
.recommended__header-span {
  cursor: pointer;
  font-size: 20px;
  line-height: 28px;
}
.recommended__item-tag-item {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: var(--secondary-dark-blue);
  padding: 4px 10px 4px 8px;
  border-radius: 32px;
  font-weight: 400;
}
.recommended__item-title {
  padding: 0 8px;
  font-size: 26px;
  line-height: 32px;
  margin: 10px 0;
  font-weight: 400;
  color: var(--secondary-gray);
}
.item-1 {
  background-image: url("/public/img/recommend/1.webp");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
.item-1-img {
  position: absolute;
  right: -14px;
  top: -1px;
}
.item-2 {
  background-image: url("/public/img/recommend/2.webp");
  background-repeat: no-repeat;
  background-position: center;
}

.item-3 {
  background-image: url("/public/img/recommend/3.webp");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
.item-3-img {
  position: absolute;
  right: -14px;
  top: -1px;
}
.item-4 {
  background-image: url("/public/img/recommend/4.webp");
  background-repeat: no-repeat;
  background-position: center;
}
.recommended__item-downloads {
  display: flex;
  align-items: center;
  gap: 10px;
}
.recommended__item-downloads-span {
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}
.recommended__item-favourites-img {
  cursor: pointer;
}

@media (width<1440px) {
  .swiper-slide {
    width: 100% !important;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product {
    flex-direction: column;
    align-items: center;
  }
  .product__gallery-list,
  .product__text {
    max-width: 694px;
  }
  .recommended {
    display: flex;
    flex-direction: column;
  }

  .recommended__list {
    display: grid;
    grid-template-columns: 340px 340px;
    grid-template-rows: 257px 257px;
    justify-content: center;
  }
}
@media (width<730px) {
  .recommended__list {
    display: grid;
    grid-template-columns: 340px;
    grid-template-rows: 257px;
    justify-content: center;
  }
}
</style>
