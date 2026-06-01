<template>
  <section class="bg-white">
   
    <!-- Services -->
    <section class="py-16 px-8 ">
      <h2 class="text-5xl font-bold text-center text-green-700 mb-12">
        {{ $i18n.t('services.title') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
          <img src="/src/assets/gorilla.jpg" class="h-56 w-full object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ $i18n.t('services.gorillaTitle') }}
            </h3>
            <p class="text-gray-600 mt-3">
              {{ $i18n.t('services.gorillaDesc') }}
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
          <img src="/src/assets/kivu.jpg" class="h-56 w-full object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ $i18n.t('services.lakeTitle') }}
            </h3>
            <p class="text-gray-600 mt-3">
              {{ $i18n.t('services.lakeDesc') }}
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
          <img src="/src/assets/akagera.jpg" class="h-56 w-full object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ $i18n.t('services.safariTitle') }}
            </h3>
            <p class="text-gray-600 mt-3">
              {{ $i18n.t('services.safariDesc') }}
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
          <img src="/src/assets/culture.jpg" class="h-56 w-full object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ $i18n.t('services.cultureTitle') }}
            </h3>
            <p class="text-gray-600 mt-3">
              {{ $i18n.t('services.cultureDesc') }}
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
          <img src="/src/assets/hiking.jpg" class="h-56 w-full object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ $i18n.t('services.hikingTitle') }}
            </h3>
            <p class="text-gray-600 mt-3">
              {{ $i18n.t('services.hikingDesc') }}
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
          <img src="/src/assets/city.jpg" class="h-56 w-full object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ $i18n.t('services.kigaliTitle') }}
            </h3>
            <p class="text-gray-600 mt-3">
              {{ $i18n.t('services.kigaliDesc') }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Statistics -->
    <section class="bg-green-700 text-white py-16">
      <div class="grid md:grid-cols-4 text-center gap-8">
        <div>
          <h2 class="text-5xl font-bold">100+</h2>
          <p>{{ $i18n.t('services.toursCompleted') }}</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">500+</h2>
          <p>{{ $i18n.t('services.happyVisitors') }}</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">30+</h2>
          <p>{{ $i18n.t('services.years') }}</p>
        </div>

        <div>
          <h2 class="text-5xl font-bold">10+</h2>
          <p>{{ $i18n.t('services.locations') }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center px-6">
      <h2 class="text-5xl font-bold text-green-700 mb-5">
        {{ $i18n.t('services.ctaHeading') }}
      </h2>

      <p class="text-gray-600 text-lg mb-8">
        {{ $i18n.t('services.ctaDesc') }}
      </p>

      <button class="bg-green-600 text-white px-10 py-4 rounded-xl text-lg hover:bg-green-700">
        {{ $i18n.t('services.bookNow') }}
      </button>
    </section>

  </section>
</template>