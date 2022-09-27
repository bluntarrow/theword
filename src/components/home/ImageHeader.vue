<template>
  <div class="w-full relative">
    <!--  picture -->

    <!-- :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }" -->
    <swiper
      :slides-per-view="'auto'"
      :modules="modules"
      class="relative rounded-md py-6"
      effect="coverflow"
      :loop="true"
      :grab-cursor="true"
      :centered-slides="true"
      @swiper="getSwiper"
      @slide-change="getColor"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
    >
      <swiper-slide v-for="passage in passages" class="w-3/4">
        <div
          class="bg-gray-700 text-gray-100 capitalize flex justify-center font-serif items-center text-5xl px-10 py-6 rounded-md shadow-xl aspect-[2/1]"
          ref="img"
        >
          <div class="w-3/4 text-center">{{ passage }}</div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- controls -->

    <button
      class="text-lg absolute z-30 left-4 top-0 bottom-0 my-auto"
      v-if="swipe"
      @click="swipe.slidePrev(500)"
    >
      <div
        class="p-2 bg-gray-200/40 text-gray-700 backdrop-blur-sm rounded-full shadow-xl"
      >
        <ChevronLeftIcon class="h-5"></ChevronLeftIcon>
      </div>
    </button>
    <button
      class="text-lg absolute z-30 right-4 top-0 bottom-0 my-auto"
      v-if="swipe"
      @click="swipe.slideNext(500)"
    >
      <div
        class="p-2 bg-gray-200/40 text-gray-700 backdrop-blur-sm rounded-full shadow-xl"
      >
        <ChevronRightIcon class="h-5"></ChevronRightIcon>
      </div>
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { FastAverageColor } from "fast-average-color";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/20/solid";

const modules = [Autoplay, EffectCoverflow];
const emit = defineEmits(["colorChange"]);

const img = ref(null);
const bg = ref(null);

const getImg = (imgurl) => {
  return new URL(`../../assets/img/${imgurl}.jpg`, import.meta.url);
};

// swiper controls
const swipe = ref(null);
const getSwiper = (swiper) => {
  swipe.value = swiper;
  const fac = new FastAverageColor();
  bg.value = fac.getColor(img.value[swiper.activeIndex]).rgba;
};

//passages
const passages = [
  "in the beginning",
  "was the word",
  "and the word",
  "was with God",
  "and the word",
  "was God.",
];
</script>
