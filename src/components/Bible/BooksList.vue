<template>
  <div class="px-10 pb-6">
    <h2 class="capitalize text-3xl mb-2 flex gap-2">
      <div
        @click="old = true"
        :class="
          old ? 'text-gray-700' : 'text-gray-400'
        "
        class="cursor-pointer hover:-translate-y-0.5 transition"
      >
        old Testament
      </div>
      <div class="text-gray-400">|</div>
      <div
        @click="old = false"
        :class="
          !old ? 'text-gray-700' : 'text-gray-400'
        "
        class="cursor-pointer hover:-translate-y-0.5 transition"
      >
        new Testament
      </div>
    </h2>

    <ul v-if="old" class="capitalize grid grid-cols-4">
      <li v-for="book in books.oldTestament">
        <router-link
          :to="'/bible/' + book.title"
          class="px-6 py-4 w-full block hover:bg-gray-200 rounded"
        >
          {{ book.title }}
        </router-link>
      </li>
    </ul>

    <ul v-else class="capitalize grid grid-cols-4">
      <li v-for="book in books.newTestament">
        <router-link
          :to="'/bible/' + book.title"
          class="px-6 py-4 w-full block hover:bg-gray-200 rounded"
        >
          {{ book.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
const store = useStore();

const old = ref(true);

const books = computed(() => store.state.books);
</script>
