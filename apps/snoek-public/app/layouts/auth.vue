<template>
  <div class="relative h-screen overflow-hidden bg-gray-100 md:flex">
    <LayoutMobileHeader class="md:hidden" @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

    <div :class="['fixed inset-y-0 left-0 transform z-30 transition-transform duration-300 ease-in-out md:relative md:translate-x-0', isSidebarOpen ? 'translate-x-0' : '-translate-x-full']">
      <LayoutSideHeader />
    </div>
    
    <div v-if="isSidebarOpen" @click="isSidebarOpen = false" class="fixed inset-0 bg-black opacity-50 z-20 md:hidden"></div>

    <div class="flex-1 p-4 flex flex-col">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LayoutSideHeader from '~/components/layout/SideHeader.vue';
import LayoutMobileHeader from '~/components/layout/MobileHeader.vue';

const isSidebarOpen = ref(false)
</script>
