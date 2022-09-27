<script setup>
import Leftnav from "./components/app/Leftnav.vue";
import Toolbar from "./components/app/Toolbar.vue";
</script>

<template>
  <div class="h-[100vh] overflow-hidden">
    <div class="grid grid-cols-10 w-full h-full text-gray-500 bg-gray-100 overflow-hidden">
      <Leftnav></Leftnav>
      <div class="h-full w-full col-span-10 md:col-span-7 overflow-y-auto flex flex-col">
        <Toolbar></Toolbar>
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
