<template>
  <!-- Home Section -->
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Main Content -->
    <div class="relative z-10 text-center px-6 max-w-6xl">

      <!-- Small Text -->
      <p class="uppercase tracking-[6px] text-green-300 mb-4 font-semibold">
        Visit Rwanda
      </p>

      <!-- Heading -->
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
        Welcome to <span class="text-green-400">Rwanda</span>
      </h1>

      <!-- Paragraph -->
      <p class="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
        Discover the beauty of Rwanda, the land of a thousand hills,
        rich culture, mountain gorillas, beautiful lakes,
        and unforgettable adventures.
      </p>

      <!-- Buttons -->
      <div class="flex justify-center gap-4 mb-16 flex-wrap">
        <button
          class="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Explore
        </button>

        <button
          class="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition duration-300"
        >
          Learn More
        </button>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Card 1 -->
        <div
          class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition duration-300 shadow-xl"
        >
          <div class="text-4xl mb-4">🦍</div>
          <h2 class="text-2xl font-bold mb-3 text-green-300">
            Wildlife
          </h2>
          <p class="text-gray-200">
            Visit Volcanoes National Park and experience the famous mountain gorillas.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition duration-300 shadow-xl"
        >
          <div class="text-4xl mb-4">🏞️</div>
          <h2 class="text-2xl font-bold mb-3 text-green-300">
            Nature
          </h2>
          <p class="text-gray-200">
            Explore breathtaking hills, lakes, forests, and Rwanda’s natural beauty.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition duration-300 shadow-xl"
        >
          <div class="text-4xl mb-4">🎭</div>
          <h2 class="text-2xl font-bold mb-3 text-green-300">
            Culture
          </h2>
          <p class="text-gray-200">
            Discover traditional dances, local food, and Rwanda’s rich heritage.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import heroImage from '../assets/b.png'
</script>