<template>
  <!-- About Section -->
  <section class="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 py-20 px-6">

    <div class="max-w-7xl mx-auto">

      <!-- Top Section -->
      <div class="grid md:grid-cols-2 gap-14 items-center">

        <!-- Left Content -->
        <div>

          <p class="uppercase tracking-[5px] text-green-600 font-semibold mb-3">
            Discover Rwanda
          </p>

          <h1 class="text-5xl md:text-7xl font-extrabold text-green-800 leading-tight mb-6">
            About Rwanda
          </h1>

          <div class="w-32 h-1 bg-green-600 rounded-full mb-8"></div>

          <p class="text-lg md:text-xl leading-9 text-gray-700 mb-8">
            Rwanda is known as the
            <span class="font-bold text-green-700">
              Land of a Thousand Hills
            </span>.
            It is one of Africa’s cleanest and fastest-growing countries,
            famous for mountain gorillas, beautiful landscapes,
            strong culture, peace, and hospitality.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-5">

            <div class="bg-white p-5 rounded-2xl shadow-lg border border-green-100">
              <h2 class="text-4xl font-extrabold text-green-700 mb-2">
                1000+
              </h2>
              <p class="text-gray-600">
                Beautiful Hills
              </p>
            </div>

            <div class="bg-white p-5 rounded-2xl shadow-lg border border-green-100">
              <h2 class="text-4xl font-extrabold text-green-700 mb-2">
                4
              </h2>
              <p class="text-gray-600">
                National Parks
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
              Kigali City
            </h2>

            <p class="text-gray-600 text-sm">
              One of Africa’s cleanest and smartest cities with modern innovation.
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
            Tourism
          </h2>

          <p class="text-gray-600 leading-7">
            Explore Volcanoes National Park, Akagera, Lake Kivu,
            and the famous mountain gorillas.
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
            Culture
          </h2>

          <p class="text-gray-600 leading-7">
            Experience traditional dances, local food,
            art galleries, and Rwandan traditions.
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
            Innovation
          </h2>

          <p class="text-gray-600 leading-7">
            Rwanda is becoming a leading technology and innovation hub in Africa.
          </p>
        </div>

      </div>

    </div>

  </section>
</template>