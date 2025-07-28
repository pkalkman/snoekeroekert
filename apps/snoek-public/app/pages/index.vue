<template>
  <div class="w-full overflow-hidden flex items-center justify-center relative">
    <section class="relative flex items-center justify-center w-full h-full">
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          v-for="(sparkle, index) in sparkleStyles"
          :key="index"
          class="absolute animate-floatstar"
          :style="sparkle.style"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-full h-full text-green-400"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </div>
      </div>

      <div
        class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div class="mb-6 sm:mb-8">
          <h1
            class="inline-block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-transparent bg-clip-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none"
          >
            Snoekeboekert
          </h1>
        </div>

        <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
        >
          <button
            class="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto min-w-[240px]"
          >
            <span class="relative z-10 flex items-center justify-center">
              Sign Up!
              <svg
                class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </button>
          <button
            class="border-2 border-green-600 text-green-600 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-green-50 hover:border-green-700 hover:text-green-700 transition-all duration-300 w-full sm:w-auto min-w-[240px] backdrop-blur-sm"
          >
            Contact
          </button>
        </div>
      </div>

      <div class="absolute inset-0 opacity-5">
        <div
          class="w-full h-full"
          style="
            background-image: radial-gradient(
              circle,
              #000000 3px,
              transparent 1px
            );
            background-size: 50px 50px;
          "
        ></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const sparkleStyles = ref([]);

const generateStars = () => {
  const sparkles = [];
  const gridSize = 120;
  const occupiedPositions = new Set();

  const zones = [
    { x: [5, 25], y: [10, 30] }, // Top left
    { x: [75, 95], y: [10, 30] }, // Top right
    { x: [5, 25], y: [70, 90] }, // Bottom left
    { x: [75, 95], y: [70, 90] }, // Bottom right
    { x: [10, 35], y: [45, 65] }, // Mid left
    { x: [65, 90], y: [45, 65] }, // Mid right
    { x: [40, 60], y: [15, 25] }, // Top center
    { x: [40, 60], y: [75, 85] }, // Bottom center
  ];

  zones.forEach((zone) => {
    const sparklesInZone = Math.random() > 0.2 ? 3 : 2;
    for (let i = 0; i < sparklesInZone; i++) {
      let attempts = 0;
      let position;

      do {
        position = {
          x: Math.random() * (zone.x[1] - zone.x[0]) + zone.x[0],
          y: Math.random() * (zone.y[1] - zone.y[0]) + zone.y[0],
        };
        attempts++;
      } while (
        attempts < 10 &&
        isPositionOccupied(position, occupiedPositions, gridSize)
      );

      if (attempts < 10) {
        occupiedPositions.add(
          `${Math.floor(position.x)}-${Math.floor(position.y)}`
        );

        const size =
          Math.random() > 0.7
            ? Math.random() * 20 + 40
            : Math.random() * 10 + 20;

        const delay = Math.random() * 6;
        const duration = Math.random() * 8 + 12;
        const opacity = Math.random() * 0.4 + 0.4;

        sparkles.push({
          style: `
            top: ${position.y}%;
            left: ${position.x}%;
            width: ${size}px;
            height: ${size}px;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            opacity: ${opacity.toFixed(2)};
          `,
        });
      }
    }
  });

  return sparkles;
};

const isPositionOccupied = (newPos, occupied, minDistance) => {
  for (const pos of occupied) {
    const [x, y] = pos.split("-").map(Number);
    const distance = Math.sqrt(
      Math.pow(newPos.x - x, 2) + Math.pow(newPos.y - y, 2)
    );
    if (distance < minDistance / 10) {
    }
  }
  return false;
};

onMounted(() => {
  sparkleStyles.value = generateStars();
});
</script>
