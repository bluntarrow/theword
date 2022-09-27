<template>
  <div class="grid grid-cols-2">
    <img
      src="../../assets/img/img3.jpg"
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
  </div>
</template>
<script setup>
import { PlayIcon } from "@heroicons/vue/20/solid";
</script>
