<template>
  <nav class="bg-zinc-900 border-b border-green-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-white font-semibold text-xl">Logo</span>
          </NuxtLink>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink 
              to="/" 
              class="text-white hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              :class="{ 'bg-green-600 text-white': $route.path === '/' }"
            >
              Link
            </NuxtLink>
          </div>
        </div>

        <div class="hidden md:block">
          <NuxtLink to="/login" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Login
          </NuxtLink>
        </div>

        <div class="md:hidden">
          <button 
            @click="isOpen = !isOpen"
            class="text-green-700 hover:text-green-900 focus:outline-none focus:text-green-900 p-2"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-show="isOpen" class="md:hidden bg-green-50 border-t border-green-200">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <div class="pt-2">
          <NuxtLink to="/login" class=" text-left bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Login
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from '#app'

const isOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  isOpen.value = false
})
</script>