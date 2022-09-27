<template>
  <!-- <h2 class="font-serif capitalize text-center text-6xl">the word made alive</h2> -->
  <ImageHeader></ImageHeader>
  <div class="px-10 pb-10">
    <PostCard></PostCard>
  </div>
  <div class="h-[100vh] text-gray-500">
    <HomeFooter></HomeFooter>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageHeader from "../components/home/ImageHeader.vue";
import PostCard from "../components/home/PostCard.vue";
import HomeFooter from "../components/home/HomeFooter.vue";
</script>
