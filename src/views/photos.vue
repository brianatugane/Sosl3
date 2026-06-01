<template>
  <section class="bg-white py-20 px-8">

    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-green-700">
        {{ $i18n.t('photos.title') }}
      </h1>

      <p class="text-gray-600 mt-4 text-lg">
        {{ $i18n.t('photos.desc') }}
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">

      <!-- Card 1 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img src="/src/assets/convention.jpg" class="w-full h-64 object-cover">
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">
            {{ $i18n.t('photos.card1.title') }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ $i18n.t('photos.card1.desc') }}
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img src="/src/assets/gorilla.jpg" class="w-full h-64 object-cover">
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">
            {{ $i18n.t('photos.card2.title') }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ $i18n.t('photos.card2.desc') }}
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img src="/src/assets/kivu.jpg" class="w-full h-64 object-cover">
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">
            {{ $i18n.t('photos.card3.title') }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ $i18n.t('photos.card3.desc') }}
          </p>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img src="/src/assets/inema.jpg" class="w-full h-64 object-cover">
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">
            {{ $i18n.t('photos.card4.title') }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ $i18n.t('photos.card4.desc') }}
          </p>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img src="/src/assets/memorial.jpg" class="w-full h-64 object-cover">
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">
            {{ $i18n.t('photos.card5.title') }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ $i18n.t('photos.card5.desc') }}
          </p>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img src="/src/assets/nyungwe.png" class="w-full h-64 object-cover">
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">
            {{ $i18n.t('photos.card6.title') }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ $i18n.t('photos.card6.desc') }}
          </p>
        </div>
      </div>

    </div>

  </section>
</template>