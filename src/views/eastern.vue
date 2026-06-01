<template>
  <section class="bg-white min-h-screen">

    <!-- Hero Section -->
    <div
      class="h-[80vh] bg-cover bg-center flex items-center justify-center"
      style="background-image:url('/src/assets/kigali-hero.jpg')"
    >
      <div class="bg-black/60 p-10 rounded-3xl text-center max-w-3xl">
        <h1 class="text-7xl font-extrabold text-white mb-4">
          {{ $i18n.t('provinces.eastern.title') }}
        </h1>

        <p class="text-xl text-gray-200">
          {{ $i18n.t('provinces.eastern.description') }}
        </p>

        <button class="mt-6 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700">
          {{ $i18n.t('provinces.eastern.exploreBtn') }}
        </button>
      </div>
    </div>

    <!-- Statistics -->
    <div class="bg-green-700 text-white py-12">
      <div class="grid md:grid-cols-4 text-center gap-6">

        <div>
          <h2 class="text-5xl font-bold">800K+</h2>
          <p>{{ $i18n.t('provinces.common.population') }}</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">15+</h2>
          <p>{{ $i18n.t('provinces.common.touristSites') }}</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">40+</h2>
          <p>{{ $i18n.t('provinces.common.hotels') }}</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">365</h2>
          <p>{{ $i18n.t('provinces.common.daysToExplore') }}</p>
        </div>

      </div>
    </div>

    <!-- Attractions -->
    <div class="py-20 px-8">

      <h2 class="text-5xl font-bold text-center text-green-700 mb-12">
        {{ $i18n.t('provinces.common.topAttractions') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="/src/assets/akagera.jpg"
            class="w-full h-60 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ $i18n.t('provinces.eastern.attraction1') }}
            </h3>
            <p class="text-gray-600 mt-3">
              {{ $i18n.t('provinces.eastern.attraction1Desc') }}
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="/src/assets/muhazi.png"
            class="w-full h-60 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ $i18n.t('provinces.eastern.attraction2') }}
            </h3>
            <p class="text-gray-600 mt-3">
              {{ $i18n.t('provinces.eastern.attraction2Desc') }}
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="/src/assets/rusumo.png"
            class="w-full h-60 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ $i18n.t('provinces.eastern.attraction3') }}
            </h3>
            <p class="text-gray-600 mt-3">
              {{ $i18n.t('provinces.eastern.attraction3Desc') }}
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- Why Visit -->
    <div class="bg-green-50 py-20 px-8">

      <div class="max-w-6xl mx-auto">

        <h2 class="text-5xl font-bold text-center text-green-700 mb-12">
          {{ $i18n.t('provinces.eastern.whyVisitTitle') }}
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white p-8 rounded-2xl shadow">
            <h3 class="text-2xl font-bold mb-3">🌍 {{ $i18n.t('provinces.eastern.card1') }}</h3>
            <p class="text-gray-600">
              {{ $i18n.t('provinces.eastern.card1Desc') }}
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow">
            <h3 class="text-2xl font-bold mb-3">🎨 {{ $i18n.t('provinces.common.richCulture') }}</h3>
            <p class="text-gray-600">
              {{ $i18n.t('provinces.common.culturalExperience') }}
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow">
            <h3 class="text-2xl font-bold mb-3">🍽️ {{ $i18n.t('provinces.common.greatFood') }}</h3>
            <p class="text-gray-600">
              {{ $i18n.t('provinces.common.foodExperience') }}
            </p>
          </div>

        </div>

      </div>

    </div>

    <!-- CTA -->
    <div class="bg-green-700 text-white text-center py-20">

      <h2 class="text-5xl font-bold mb-5">
        {{ $i18n.t('provinces.eastern.ctaTitle') }}
      </h2>

      <p class="text-xl mb-8">
        {{ $i18n.t('provinces.common.beginJourney') }}
      </p>

      <button class="bg-white text-green-700 px-10 py-4 rounded-xl font-bold">
        {{ $i18n.t('provinces.eastern.ctaBtn') }}
      </button>

    </div>

  </section>
</template>