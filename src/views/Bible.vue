<template>
  <BooksList v-if="!book && !chapter" />
  <ChaptersList v-if="book && !chapter" />
  <Read :key="chapter" v-if="book && chapter" :book="book" :chapter="chapter" />
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import BooksList from "../components/Bible/BooksList.vue";
import ChaptersList from "../components/Bible/ChaptersList.vue";
import Read from "../components/Bible/Read.vue";

const route = useRoute();

const book = ref(null);
const chapter = ref(null);

const setBook = () => {
  if (route.params.book) {
    book.value = route.params.book;
    if (route.params.chapter) {
      chapter.value = route.params.chapter;
    } else {
      chapter.value = null;
    }
  } else {
    book.value = null;
    chapter.value = null;
  }
};

setBook();
watch(() => route.params, setBook);
</script>
