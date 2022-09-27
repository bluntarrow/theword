<template>
    <footer>
      <div class="bg-gray-700 py-10 text-gray-200 flex flex-col items-center">
        <h3 class="text-3xl">Join Our Newsletter</h3>
        <h4 class="text-sm text-gray-400">
          Receive the latest news and price drops!
        </h4>
        <div class="flex mt-7 gap-2">
          <input
            type="text"
            class="bg-gray-600 rounded px-4 py-1 placeholder:text-gray-300 w-96"
            placeholder="Email"
          />
          <button class="px-8 py-2 rounded bg-gray-800">Join</button>
        </div>
      </div>
      <div class="bg-gray-800 px-4 py-10 grid grid-cols-3">
        <ul v-for="i in 3" class="text-center">
          <li v-for="i in 3" class="cursor-pointer hover:text-gray-300">
            lorem
          </li>
        </ul>
      </div>
      <div class="bg-gray-800 text-center py-2 text-xs">2022 Shopnovva</div>
    </footer>
</template>