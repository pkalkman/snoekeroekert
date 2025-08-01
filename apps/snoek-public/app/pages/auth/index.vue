<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-slate-300 rounded-xl">
    <div class="max-w-4xl w-full mx-auto p-8">
      <div class="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 class="text-4xl font-bold text-green-700 mb-4">Welcome to the Dashboard!</h1>
        <p class="text-lg text-gray-600">You have successfully logged in as an administrator.</p>
        <p class="mt-4 text-gray-500">This area is protected and uses the 'auth' layout.</p>
        <div class="mt-8">
          <button @click="handleLogout" class="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200">
            Log Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { navigateTo } from '#app';
import { definePageMeta } from '#imports';

definePageMeta({
  path: '/dashboard',
  layout: 'auth'
});

const handleLogout = () => {
  // In a real app, you would clear auth tokens here.
  navigateTo('/Login');
};
</script>
