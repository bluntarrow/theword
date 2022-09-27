<template>
  <div class="w-full relative">
    <!--  picture -->

    <!-- :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }" -->

    <Swiper
      :slides-per-view="'auto'"
      class="rounded-md py-5 pl-5 relative z-10"
      :loop="true"
      :space-between="20"
      :centered-slides="true"
      @swiper="getSwiper"
    >
      <swiper-slide
        v-for="i in 5"
        class="w-2/3 grid grid-cols-2 bg-gray-200 rounded-md shadow-md"
      >
        <img
          :src="getImg('img'+i)"
          class="aspect-square object-cover"
          alt=""
        />
        <div class="bg-gray-100 grid grid-cols-1 grid-rows-3 px-4">
          <div class="flex justify-between self-center items-end">
            <div>
              <h4 class="text-gray-600 font-medium">Title</h4>
              <h5 class="text-xs">
                by <span class="text-gray-600 font-medium">John Doe</span>
              </h5>
            </div>
            <div class="text-xs">1/12/22</div>
          </div>

          <div class="bg-gray-500 rounded"></div>

          <div class="flex gap-2 items-center self-center">
            <div class="text-sm w-full">
              <h6>5 mins</h6>
              <div class="bg-gray-500 h-2 rounded-xl w-full"></div>
            </div>
            <div
              class="bg-gray-600 flex justify-center items-center text-gray-100 rounded-full h-8 w-10 mt-1"
            >
              <PlayIcon class="h-4"></PlayIcon>
            </div>
          </div>
        </div>
      </swiper-slide>
    </Swiper>

    <!-- control buttons -->

    <button
      class="text-lg absolute z-50 left-4 top-0 bottom-0 my-auto"
      v-if="swipe"
      @click="swipe.slidePrev(500)"
    >
      <div class="p-2 bg-gray-200/40 backdrop-blur-sm rounded-full shadow-xl">
        <ChevronLeftIcon class="h-5"></ChevronLeftIcon>
      </div>
    </button>
    <button
      class="text-lg absolute z-50 right-4 top-0 bottom-0 my-auto"
      v-if="swipe"
      @click="swipe.slideNext(500)"
    >
      <div class="p-2 bg-gray-200/40 backdrop-blur-sm rounded-full shadow-xl">
        <ChevronRightIcon class="h-5"></ChevronRightIcon>
      </div>
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PlayIcon,
} from "@heroicons/vue/20/solid";
import { MegaphoneIcon, BanknotesIcon } from "@heroicons/vue/24/outline";

const img = ref(null);

const getImg = (imgurl) => {
  return new URL(`../../assets/img/${imgurl}.jpg`, import.meta.url);
};

// swiper controls
const swipe = ref(null);
const getSwiper = (swiper) => {
  swipe.value = swiper;
};
</script>
