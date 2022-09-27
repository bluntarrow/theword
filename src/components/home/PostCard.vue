<template>
  <div class="grid grid-cols-3 gap-4">
    <div
      class="shadow-sm col-span-2 bg-gray-200 gap-4 rounded-md px-6 py-4 h-full flex flex-col justify-between relative"
    >
      <div class="flex justify-between ">
        <div class="flex gap-2">
          <img
            src="../../assets/img/img3.jpg"
            class="aspect-square h-12 object-cover border-2 border-gray-50 rounded-full"
            alt=""
          />
          <div>
            <h4 class="text-lg font-medium text-gray-500">John doe</h4>
            <h6 class="text-xs">1/12/2022</h6>
          </div>
        </div>
        <div class="p-2">
          <BookmarkIcon class="h-5 cursor-pointer"></BookmarkIcon>
        </div>
      </div>
      <article class="h-full overflow-y-hidden text-gray-700">
        {{ truncate(input) }}
      </article>
      <ul class="flex gap-2 -ml-2 mt-1">
        <li v-for="i in 3" class="px-2 py-1 text-sm bg-gray-300 rounded-2xl">
          Lorem
        </li>
      </ul>

      <!-- <button class="px-6 py-4 text-center w-full font-semibold uppercase border-t border-gray-200 text-gray-600 hover:bg-gray-200/50">Read</button> -->
    </div>

    <div class="aspect-square bg-gray-200 rounded-md py-4 px-6">
     <h3 class="text-lg font-medium text-gray-500">Comments</h3> 
    </div>
  </div>
</template>
<script setup>
import { BookmarkIcon } from "@heroicons/vue/24/outline";

const input =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ratione atque sint quas, non nulla repudiandae voluptas cum eos laudantium ipsum, eaque totam reiciendis vel doloribus sunt. Consequatur, nobis natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ratione atque sint quas, non nulla repudiandae voluptas cum eos laudantium ipsum, eaque totam reiciendis vel doloribus sunt. Consequatur, nobis natus.";
const truncate = (input) => (input.length > 100 ? input.substring(0, 100) + "..." : input);
</script>
