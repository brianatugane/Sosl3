<template>
  <section class="min-h-screen bg-white py-10 px-6">
    <h1 class="text-5xl font-bold text-center text-green-700 mb-10">
      {{ $i18n.t('videos.title') }}
    </h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <!-- Map -->
      <div class="bg-white shadow-lg rounded-xl p-4">
        <h2 class="text-2xl font-bold text-green-600 mb-3">{{ $i18n.t('videos.card1.title') }}</h2>
        <video controls class="w-full rounded-lg">
          <source src="/src/assets/rwanda.mp4#t=49,52" type="video/mp4">
        </video>
      </div>

      <!-- Akagera -->
      <div class="bg-white shadow-lg rounded-xl p-4">
        <h2 class="text-2xl font-bold text-green-600 mb-3">{{ $i18n.t('videos.card2.title') }}</h2>
        <video controls class="w-full rounded-lg">
          <source src="/src/assets/rwanda.mp4#t=62,82" type="video/mp4">
        </video>
      </div>

      <!-- Nyanza -->
      <div class="bg-white shadow-lg rounded-xl p-4">
        <h2 class="text-2xl font-bold text-green-600 mb-3">{{ $i18n.t('videos.card3.title') }}</h2>
        <video controls class="w-full rounded-lg">
          <source src="/src/assets/rwanda.mp4#t=92,115" type="video/mp4">
        </video>
      </div>

      <!-- Nyungwe -->
      <div class="bg-white shadow-lg rounded-xl p-4">
        <h2 class="text-2xl font-bold text-green-600 mb-3">{{ $i18n.t('videos.card4.title') }}</h2>
        <video controls class="w-full rounded-lg">
          <source src="/src/assets/rwanda.mp4#t=116,142" type="video/mp4">
        </video>
      </div>

      <!-- Lake Kivu -->
      <div class="bg-white shadow-lg rounded-xl p-4">
        <h2 class="text-2xl font-bold text-green-600 mb-3">{{ $i18n.t('videos.card5.title') }}</h2>
        <video controls class="w-full rounded-lg">
          <source src="/src/assets/rwanda.mp4#t=149,171" type="video/mp4">
        </video>
      </div>

      <!-- Volcanoes -->
      <div class="bg-white shadow-lg rounded-xl p-4">
        <h2 class="text-2xl font-bold text-green-600 mb-3">{{ $i18n.t('videos.card6.title') }}</h2>
        <video controls class="w-full rounded-lg">
          <source src="/src/assets/rwanda.mp4#t=172,201" type="video/mp4">
        </video>
      </div>

    </div>
  </section>
</template>

<script setup>
// No script needed
</script>