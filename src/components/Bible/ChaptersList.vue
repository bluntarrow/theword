<template>
  <div class="px-10">
    <h2 class="capitalize text-3xl mb-2 hover:text-gray-500/75"><router-link to="/bible">{{ book.title }}</router-link></h2>
    <ul class="capitalize grid grid-cols-12">
      <li v-for="chapter in book.chapters">
        <router-link
          :to="'/bible/' + book.title + '/' + chapter"
          class="px-6 py-4 w-max block hover:bg-gray-200 rounded"
        >
          {{ chapter }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();

const book = computed(() => store.getters.getChapters(route.params.book));
</script>
