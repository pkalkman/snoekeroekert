<template>
  <div
    class="relative flex w-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        v-for="(square, index) in squareStyles"
        :key="index"
        class="absolute rounded-md animate-float"
        :style="square.style"
        :class="square.class"
      />
    </div>

    <div class="max-w-md w-full space-y-8 relative z-10">
      <div class="bg-green-50/20 border shadow-xl p-8 rounded-xl">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-zinc-950">
            Sign in
          </h2>
        </div>

        <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
          <div class="space-y-4">
            <div>
              <label
                for="username"
                class="block text-sm font-medium text-zinc-900 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                v-model="username"
                type="text"
                autocomplete="username"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-green-700 placeholder-green-700 text-green-700 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-zinc-900 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                v-model="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-green-700 placeholder-green-700 text-green-700 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              Sign in
            </button>
          </div>

          <div class="text-center">
            <p class="text-sm text-green-600">
              Don't have an account?
              <a
                href="#"
                class="font-medium text-green-600 hover:text-green-500 underline transition-colors duration-200"
              >
                Sign up here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { navigateTo } from "#app"; // Import navigateTo

const username = ref("");
const password = ref("");
const squareStyles = ref([]);

onMounted(() => {
  const squares = [];
  for (let i = 0; i < 100; i++) {
    squares.push(generateSquareStyle(i));
  }
  squareStyles.value = squares;
});

const generateSquareStyle = (n) => {
  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const top = `${random(0, 100)}%`;
  const left = `${random(0, 100)}%`;
  const delay = `${random(0, 5)}s`;
  const duration = `${random(6, 14)}s`;
  const size = `${random(24, 64)}px`;
  const blur = `${random(0, 6)}px`;
  const opacity = (Math.random() * 0.4 + 0.2).toFixed(2);

  return {
    style: `
      top: ${top};
      left: ${left};
      width: ${size};
      height: ${size};
      animation-delay: ${delay};
      animation-duration: ${duration};
      filter: blur(${blur});
      opacity: ${opacity};
    `,
    class: randomColorClass(n),
  };
};

const randomColorClass = (n) => {
  const colors = [
    "bg-green-200",
    "bg-emerald-100",
    "bg-lime-200",
    "bg-teal-100",
  ];
  return colors[n % colors.length];
};

const handleLogin = async () => {
  if (username.value === "admin" && password.value === "admin") {
    await navigateTo('/dashboard');
  } else {
    alert("Invalid username or password. Please try again.");
    password.value = "";
  }
};
</script>
