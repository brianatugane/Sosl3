<template>
  <section class="bg-white min-h-screen">

    <!-- Hero Section -->
    <div
      class="h-[80vh] bg-cover bg-center flex items-center justify-center"
      style="background-image:url('/src/assets/kigali-hero.jpg')"
    >
      <div class="bg-black/60 p-10 rounded-3xl text-center max-w-3xl">
        <h1 class="text-7xl font-extrabold text-white mb-4">
          Southern Province
        </h1>

        <p class="text-xl text-gray-200">
          Discover Southern Province's vibrant province known for agricalture and breathtaking views.
        </p>

        <button class="mt-6 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700">
          Explore Southern Province
        </button>
      </div>
    </div>

    <!-- Statistics -->
    <div class="bg-green-700 text-white py-12">
      <div class="grid md:grid-cols-4 text-center gap-6">

        <div>
          <h2 class="text-5xl font-bold">1.2M+</h2>
          <p>Population</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">20+</h2>
          <p>Tourist Sites</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">100+</h2>
          <p>Hotels</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">365</h2>
          <p>Days to Explore</p>
        </div>

      </div>
    </div>

    <!-- Attractions -->
    <div class="py-20 px-8">

      <h2 class="text-5xl font-bold text-center text-green-700 mb-12">
        Top Attractions
      </h2>

      <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="/src/assets/museum.png"
            class="w-full h-60 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              Kings Palace Museum
            </h3>
            <p class="text-gray-600 mt-3">
              Learn about Rwanda's history and journey toward unity.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="/src/assets/heritage.png"
            class="w-full h-60 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              Ethnographical Museum
            </h3>
            <p class="text-gray-600 mt-3">
                Experience Rwanda's rich cultural heritage and traditions.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="/src/assets/kibeho.png"
            class="w-full h-60 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              Kibeho Shrine
            </h3>
            <p class="text-gray-600 mt-3">
              Visit this sacred site and learn about its significance.
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- Why Visit -->
    <div class="bg-green-50 py-20 px-8">

      <div class="max-w-6xl mx-auto">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-12">
          Why Visit Southern Province?
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white p-8 rounded-2xl shadow">
            <h3 class="text-2xl font-bold mb-3">🌍 Clean City</h3>
            <p class="text-gray-600">
              Known as one of Africa's cleanest cities.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow">
            <h3 class="text-2xl font-bold mb-3">🎨 Rich Culture</h3>
            <p class="text-gray-600">
              Museums, art galleries, and cultural experiences.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow">
            <h3 class="text-2xl font-bold mb-3">🍽️ Great Food</h3>
            <p class="text-gray-600">
              Enjoy local and international cuisine.
            </p>
          </div>

        </div>

      </div>

    </div>

    <!-- CTA -->
    <div class="bg-green-700 text-white text-center py-20">

      <h2 class="text-5xl font-bold mb-5">
        Ready to Visit Southern Province?
      </h2>

      <p class="text-xl mb-8">
        Begin your unforgettable journey today.
      </p>

      <button class="bg-white text-green-700 px-10 py-4 rounded-xl font-bold">
        Book Your Tour
      </button>

    </div>

  </section>
</template>