<template>
  <div
    class="flex bg-gray-100/25 z-50 bg-clip-padding backdrop-filter backdrop-blur-sm justify-between items-end px-8 py-4 sticky top-0 w-full"
  >
    <h1 class="text-lg uppercase sm:hidden font-semibold">logo</h1>
    <router-link to="/" class="sm:hidden">
      <div class="p-2 bg-gray-200/60 rounded-full">
        <Bars2Icon class="h-5"></Bars2Icon>
      </div>
    </router-link>
    <ul class="sm:flex gap-4 hidden">
      <li class="p-2 bg-gray-200/60 rounded-full cursor-pointer" @click="$router.go(-1)">
        <ChevronLeftIcon class="h-5"></ChevronLeftIcon>
      </li>
      <li class="p-2 bg-gray-200/60 rounded-full cursor-pointer" @click="$router.go(+1)">
        <ChevronRightIcon class="h-5"></ChevronRightIcon>
      </li>
    </ul>
    <ul class="sm:flex hidden">
      <li>
        <router-link to="/">
          <div class="p-2 bg-gray-200/60 rounded-full">
            <UserIcon class="h-5"></UserIcon>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Bars2Icon,
  UserIcon,
} from "@heroicons/vue/24/outline";
</script>
