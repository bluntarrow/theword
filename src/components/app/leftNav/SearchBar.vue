<template>
  <div class="flex text-gray-500 px-2 items-center">
    <div class="bg-gray-300 my-2 py-2 px-3 rounded-md flex items-center grow">
      <MagnifyingGlassIcon class="h-4 mr-4"></MagnifyingGlassIcon>
      <input
        type="text"
        placeholder="Search anything"
        class="bg-transparent placeholder:text-gray-400 text-sm outline-none"
      />
    </div>
    <div class="w-4 ml-2">
      <Bars3BottomRightIcon class="h-4"></Bars3BottomRightIcon>
    </div>
  </div>
</template>
<script setup>
import {
  MagnifyingGlassIcon,
  Bars3BottomRightIcon,
} from "@heroicons/vue/20/solid";
</script>
