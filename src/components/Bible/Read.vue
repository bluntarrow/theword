<template>
  <div class="px-10" id="top">
    <h2 class="capitalize text-3xl mb-4">
      <router-link class="hover:text-gray-500/75" to="/bible">{{ props.book }}</router-link> :
      <router-link class="hover:text-gray-500/75" :to="'/bible/' + props.book">{{
        props.chapter
      }}</router-link>
    </h2>
  </div>
  <ul class="text-lg pr-10" v-if="passage">
    <li v-for="verse in passage.verses" class="flex">
      <div class="w-12 text-center text-sm pt-1">{{ verse.verse }}</div>
      <div class="w-full font-semibold">{{ verse.text }}</div>
    </li>
  </ul>
  <ul class="px-10" v-else>
    <li class="bg-gray-400 h-3 rounded animate-pulse my-4" v-for="i in 10"></li>
  </ul>
  <ul class="px-10 flex justify-between my-4 pt-4 border-t">
    <li
      @click="prev()"
      class="cursor-pointer font-semibold text-gray-500 hover:text-gray-600"
    >
      <a href="#top"> Previous </a>
    </li>
    <li
      @click="next()"
      class="cursor-pointer font-semibold text-gray-500 hover:text-gray-600"
    >
      <a href="#top"> Next </a>
    </li>
  </ul>
</template>
<script setup>
import { watch, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const props = defineProps(["book", "chapter"]);

const passage = computed(() => store.state.passage);

const getPassage = () => {
  passage.value = null;
  store.dispatch("fetchPassage", { book: props.book, chapter: props.chapter });
};

getPassage();

const book = computed(() => store.getters.getChapters(route.params.book));

const prev = () => {
  if (Number(props.chapter) > 1) {
    scrollTo(0, 0);
    router.push(`/bible/${props.book}/${Number(props.chapter) - 1}`);
  }
};
const next = () => {
  if (Number(props.chapter) < book.value.chapters) {
    scrollTo(0, 0);
    router.push(`/bible/${props.book}/${Number(props.chapter) + 1}`);
  }
};
watch(() => props.chapter, getPassage);
</script>
