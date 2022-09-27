<template>
  <div
    class="bg-gray-200 h-[100vh] hidden md:flex col-span-3 flex-col text-gray-500 border-r shadow-lg z-20 relative"
  >
    <TopBar @openProfile="profile = true"></TopBar>
    <div class="p-2 pb-0 flex flex-col">
      <SearchBar></SearchBar>
      <div class="h-full">
        <!-- icons list -->
        <ul>
          <li v-for="page in pages">
            <router-link
              :to="page.to"
              class="flex items-center gap-4 p-2 m-2 hover:bg-gray-300 rounded"
            >
              <div
                class="h-10 w-10 rounded flex justify-center items-center bg-gray-500 text-gray-100"
              >
                <component :is="page.icon" class="h-5"></component>
              </div>
              <h6 class="font-semibold capitalize">{{ page.name }}</h6>
            </router-link>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</template>
<script setup>
import TopBar from "./leftNav/TopBar.vue";
import SearchBar from "./leftNav/SearchBar.vue";
import {
  BookmarkIcon,
  HomeIcon,
  BookOpenIcon,
  PlayIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/vue/24/solid";
const pages = [
  { name: "home", icon: HomeIcon, to: "/home" },
  { name: "forum", icon: ChatBubbleBottomCenterTextIcon, to: "/" },
  { name: "sermons", icon: PlayIcon, to: "/" },
  { name: "Bible", icon: BookOpenIcon, to: "/bible" },
  { name: "bookmarks", icon: BookmarkIcon, to: "/" },
];
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
