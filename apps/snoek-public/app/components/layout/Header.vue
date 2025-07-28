<template>
  <nav class="bg-gray-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <span class="bg-gradient-to-r from-lime-200 via-green-200 to-emerald-100 text-transparent bg-clip-text font-bold text-xl">
              Logo
            </span>
          </NuxtLink>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink 
              to="/" 
              class="text-white/80 hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              :class="{ 'text-green-200 bg-white/5': $route.path === '/' }"
            >
              Home
            </NuxtLink>
          </div>
        </div>

        <div class="hidden md:block">
          <NuxtLink 
            to="/login" 
            class="bg-gradient-to-r from-green-200 to-lime-200 text-gray-900 px-6 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Sign In
          </NuxtLink>
        </div>

        <div class="md:hidden">
          <button 
            @click="isOpen = !isOpen"
            class="text-white/80 hover:text-green-200 focus:outline-none focus:text-green-200 p-2 transition-colors duration-300"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-show="isOpen" class="md:hidden bg-gray-900/98 backdrop-blur-sm border-t border-white/10">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink 
          to="/" 
          class="text-white/80 hover:text-green-200 hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          :class="{ 'text-green-200 bg-white/5': $route.path === '/' }"
        >
          Home
        </NuxtLink>

        <div class="pt-4">
          <NuxtLink 
            to="/login" 
            class="bg-gradient-to-r from-green-200 to-lime-200 text-gray-900 block text-center px-3 py-2 rounded-lg text-base font-bold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Sign In
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
