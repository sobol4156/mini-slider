<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { Recommend } from '../interfaces/Reccommend';

const props = defineProps<{
  recommends: Recommend[];
}>();

const recommend = ref<Recommend | undefined>(undefined);
onMounted(()=> {
  recommend.value = props.recommends[0];
});
</script>

<template>
  <article v-if="recommend" class="recommended">
    <div class="recommended__header">
      <h2 class="recommended__header-title">Recommend</h2>
      <span class="recommended__header-span">See all</span>
    </div>
    <ul class="recommended__list">
      <li class="recommended__item" v-for="(item, index) in props.recommends" :key="item.id">
        <div class="recommended__item-content" :class="'item-' + (index + 1)">
          <img v-if="index === 0 || index === 2" class="item-img" :src="'/img/recommend/sticker' + (index % 3 ? 'Green' : 'Red') + '.webp'" alt=""/>
          <ul class="recommended__item-tag-list">
            <li v-for="(tag, index) in item.tags" :key="index" class="recommended__item-tag-item">
              <img class="recommended__item-tag-image" src="/svg/tag.svg" alt="" />
              <span class="recommended__item-tag-span">{{ tag }}</span>
            </li>
          </ul>
          <div class="recommended__item-addition">
            <div class="recommended__item-downloads">
              <img class="recommended__item-downloads-img" src="/img/recommend/downloads.webp" alt="" />
              <span class="recommended__item-downloads-span">{{ item.downloads }}</span>
            </div>
            <div class="recommended__item-favourites">
              <img class="recommended__item-favourites-img" src="/img/recommend/favourites.webp" alt="" />
            </div>
          </div>
        </div>
        <h3 class="recommended__item-title">{{ item.name }}</h3>
      </li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
$max-width: 340px;
$max-height: 257px;
$gap: 10px;
$font-size-title: 36px;
$line-height-title: 42px;
$font-size-span: 20px;
$line-height-span: 28px;
$font-size-item-title: 26px;
$line-height-item-title: 32px;
$font-size-tag: 13px;
$line-height-tag: 18px;
$font-size-downloads: 13px;
$line-height-downloads: 18px;
$secondary-dark-blue: #2c3e50;
$secondary-gray: #95a5a6;

.recommended__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-title {
    margin: 0;
    font-size: $font-size-title;
    line-height: $line-height-title;
    font-weight: 400;
  }

  &-span {
    cursor: pointer;
    font-size: $font-size-span;
    line-height: $line-height-span;
  }
}

.recommended__list,
.recommended__item-tag-list {
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: $gap;
}

.recommended__list {
  justify-content: space-between;
}

.recommended__item-tag-list {
  padding: 8px 16px 0;
  gap: 8px;
}

.recommended__item-tag-span {
  font-size: $font-size-tag;
  line-height: $line-height-tag;
}

.recommended__item {
  padding: 8px 0;
  border-radius: 20px;
  max-width: $max-width;
  max-height: $max-height;
  background-color: $secondary-dark-blue;

  &-content {
    width: $max-width;
    height: 193px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-addition {
    display: flex;
    justify-content: space-between;
    padding: 0 16px 4px;
  }

  &-tag-item {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: $secondary-dark-blue;
    padding: 4px 10px 4px 8px;
    border-radius: 32px;
    font-weight: 400;
  }

  &-title {
    padding: 0 8px;
    font-size: $font-size-item-title;
    line-height: $line-height-item-title;
    margin: 10px 0;
    font-weight: 400;
    color: $secondary-gray;
  }
}

.item-img {
  position: absolute;
  right: -14px;
  top: -1px;
}

.item-1,
.item-3 {
  position: relative;
}

.item-1 {
  background-image: url("/img/recommend/1.webp");
  background-repeat: no-repeat;
  background-position: center;
}

.item-2 {
  background-image: url("/img/recommend/2.webp");
  background-repeat: no-repeat;
  background-position: center;
}

.item-3 {
  background-image: url("/img/recommend/3.webp");
  background-repeat: no-repeat;
  background-position: center;
}

.item-4 {
  background-image: url("/img/recommend/4.webp");
  background-repeat: no-repeat;
  background-position: center;
}

.recommended__item-downloads {
  display: flex;
  align-items: center;
  gap: 10px;
}

.recommended__item-downloads-span {
  font-size: $font-size-downloads;
  font-weight: 400;
  line-height: $line-height-downloads;
}

.recommended__item-favourites-img {
  cursor: pointer;
}

@media (max-width: 1440px) {
  .recommended {
    display: flex;
    flex-direction: column;
  }

  .recommended__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-content: center;
    gap: $gap;
  }
}

@media (max-width: 730px) {
  .recommended__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-content: center;
    gap: $gap;
  }
}
</style>
