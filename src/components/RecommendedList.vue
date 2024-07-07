<template>
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
    </ul>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped>
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
