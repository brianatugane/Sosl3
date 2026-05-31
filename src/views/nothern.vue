<template>
  <section class="bg-white min-h-screen">

    <!-- Hero Section -->
    <div
      class="h-[80vh] bg-cover bg-center flex items-center justify-center"
      style="background-image:url('/src/assets/kigali-hero.jpg')"
    >
      <div class="bg-black/60 p-10 rounded-3xl text-center max-w-3xl">
        <h1 class="text-7xl font-extrabold text-white mb-4">
          Northern Province
        </h1>

        <p class="text-xl text-gray-200">
          Discover Northern Province's vibrant province known for agricalture and breathtaking views.
        </p>

        <button class="mt-6 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700">
          Explore Northern Province
        </button>
      </div>
    </div>

    <!-- Statistics -->
    <div class="bg-green-700 text-white py-12">
      <div class="grid md:grid-cols-4 text-center gap-6">

        <div>
          <h2 class="text-5xl font-bold">960K+</h2>
          <p>Population</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">15+</h2>
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
            src="/src/assets/volcanoes.png"
            class="w-full h-60 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              Volcanoes National Park
            </h3>
            <p class="text-gray-600 mt-3">
              Visit the home of the endangered mountain gorillas and enjoy stunning volcanic landscapes.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="/src/assets/bisoke.png"
            class="w-full h-60 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              Mount Bisoke
            </h3>
            <p class="text-gray-600 mt-3">
              The iconic volcano with a crater lake, offering a challenging hike and breathtaking views.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="/src/assets/caves.png"
            class="w-full h-60 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              Musanze Caves
            </h3>
            <p class="text-gray-600 mt-3">
              Explore these fascinating caves formed by volcanic activity.
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- Why Visit -->
    <div class="bg-green-50 py-20 px-8">

      <div class="max-w-6xl mx-auto">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-12">
          Why Visit Northern Province?
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white p-8 rounded-2xl shadow">
            <h3 class="text-2xl font-bold mb-3">🌍  Best Caves</h3>
            <p class="text-gray-600">
              Known for its stunning caves, including the Musanze Caves, offering a unique underground adventure.
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
        Ready to Visit Northern Province?
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