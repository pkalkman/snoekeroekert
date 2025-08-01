<template>
  <header class="bg-white text-gray-800 flex justify-between items-center shadow-md">
    <div class="p-4">
      <h1 class="text-xl font-bold text-green-700">Snoek</h1>
    </div>
    <button @click="$emit('toggle-sidebar')" class="p-4 focus:outline-none focus:bg-gray-200">
      <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
      <span class="sr-only">Open menu</span>
    </button>
  </header>
</template>

<script setup>
defineEmits(['toggle-sidebar']);
</script>
