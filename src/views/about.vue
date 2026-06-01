<template>
  <!-- About Section -->
  <section class="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 py-20 px-6">

    <div class="max-w-7xl mx-auto">

      <!-- Top Section -->
      <div class="grid md:grid-cols-2 gap-14 items-center">

        <!-- Left Content -->
        <div>

          <p class="uppercase tracking-[5px] text-green-600 font-semibold mb-3">
            {{ $i18n.t('about.subtitle') }}
          </p>

          <h1 class="text-5xl md:text-7xl font-extrabold text-green-800 leading-tight mb-6">
            {{ $i18n.t('about.title') }}
          </h1>

          <div class="w-32 h-1 bg-green-600 rounded-full mb-8"></div>

          <p class="text-lg md:text-xl leading-9 text-gray-700 mb-8">
            {{ $i18n.t('about.mainText') }}
            <span class="font-bold text-green-700">
              {{ $i18n.t('about.mainTextBold') }}
            </span>.
            {{ $i18n.t('about.description') }}
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-5">

            <div class="bg-white p-5 rounded-2xl shadow-lg border border-green-100">
              <h2 class="text-4xl font-extrabold text-green-700 mb-2">
                1000+
              </h2>
              <p class="text-gray-600">
                {{ $i18n.t('about.hills') }}
              </p>
            </div>

            <div class="bg-white p-5 rounded-2xl shadow-lg border border-green-100">
              <h2 class="text-4xl font-extrabold text-green-700 mb-2">
                4
              </h2>
              <p class="text-gray-600">
                {{ $i18n.t('about.nationalParks') }}
              </p>
            </div>

          </div>

        </div>

        <!-- Right Image Place -->
        <div class="relative">

          <!-- Main Image Placeholder -->
          <div
            class="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200 flex items-center justify-center"
          >
            <!-- Replace with your image -->
            <img
              src="/src/assets/image.png"
              alt="Rwanda"
              class="w-full h-full object-cover"
            />

            <!-- If no image yet, use this text -->
            <!-- <p class="text-2xl text-gray-500 font-bold">Add Your Image Here</p> -->
          </div>

          <!-- Small Floating Card -->
          <div
            class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl w-60 border border-green-100"
          >
            <h2 class="text-2xl font-bold text-green-700 mb-2">
              {{ $i18n.t('about.kigaliTitle') }}
            </h2>

            <p class="text-gray-600 text-sm">
              {{ $i18n.t('about.kigaliDesc') }}
            </p>
          </div>

        </div>

      </div>

      <!-- Feature Cards -->
      <div class="grid md:grid-cols-3 gap-8 mt-24">

        <!-- Card 1 -->
        <div
          class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition duration-300 border border-green-100"
        >
          <div
            class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-5"
          >
            🦍
          </div>

          <h2 class="text-2xl font-bold text-green-700 mb-4">
            {{ $i18n.t('about.tourismCard') }}
          </h2>

          <p class="text-gray-600 leading-7">
            {{ $i18n.t('about.tourismDesc') }}
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition duration-300 border border-green-100"
        >
          <div
            class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-5"
          >
            🎭
          </div>

          <h2 class="text-2xl font-bold text-green-700 mb-4">
                    {{ $i18n.t('about.cultureCard') }}
          </h2>

          <p class="text-gray-600 leading-7">
            {{ $i18n.t('about.cultureDesc') }}
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition duration-300 border border-green-100"
        >
          <div
            class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-5"
          >
            🚀
          </div>

          <h2 class="text-2xl font-bold text-green-700 mb-4">
            {{ $i18n.t('about.innovationCard') }}
          </h2>

          <p class="text-gray-600 leading-7">
            {{ $i18n.t('about.innovationDesc') }}
          </p>
        </div>

      </div>

    </div>

  </section>
</template>