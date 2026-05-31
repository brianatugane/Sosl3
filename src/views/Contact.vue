<template>
  <section class="py-16 px-8">
      <h2 class="text-5xl font-bold text-center text-green-700 mb-12">
        {{ $i18n.t('contact.title') }}
      </h2>

    <!-- Contact Section -->
    <div class="max-w-7xl mx-auto px-6 py-16">

      <div class="grid md:grid-cols-2 gap-12">

        <!-- Contact Information -->
        <div>
          <h2 class="text-4xl font-bold text-green-700 mb-8">
            {{ $i18n.t('contact.getInTouch') }}
          </h2>

          <div class="space-y-6">

            <div class="bg-green-50 p-5 rounded-2xl shadow">
              <h3 class="text-xl font-bold text-green-700">
                {{ $i18n.t('contact.location') }}
              </h3>
              <p class="text-gray-600 mt-2">
                {{ $i18n.t('contact.locationValue') }}
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-2xl shadow">
              <h3 class="text-xl font-bold text-green-700">
                {{ $i18n.t('contact.phone') }}
              </h3>
              <p class="text-gray-600 mt-2">
                {{ $i18n.t('contact.phoneValue') }}
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-2xl shadow">
              <h3 class="text-xl font-bold text-green-700">
                {{ $i18n.t('contact.email') }}
              </h3>
              <p class="text-gray-600 mt-2">
                {{ $i18n.t('contact.emailValue') }}
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-2xl shadow">
              <h3 class="text-xl font-bold text-green-700">
                {{ $i18n.t('contact.hours') }}
              </h3>
              <p class="text-gray-600 mt-2">
                {{ $i18n.t('contact.hoursValue') }}
              </p>
            </div>

          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white shadow-2xl rounded-3xl p-8">

          <h2 class="text-3xl font-bold text-green-700 mb-6">
            {{ $i18n.t('contact.sendMessage') }}
          </h2>

          <form class="space-y-5">

            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                {{ $i18n.t('contact.fullName') }}
              </label>
              <input
                type="text"
                :placeholder="$i18n.t('contact.fullNamePlaceholder')"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                {{ $i18n.t('contact.emailAddress') }}
              </label>
              <input
                type="email"
                :placeholder="$i18n.t('contact.emailPlaceholder')"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                {{ $i18n.t('contact.subject') }}
              </label>
              <input
                type="text"
                :placeholder="$i18n.t('contact.subjectPlaceholder')"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                {{ $i18n.t('contact.message') }}
              </label>
              <textarea
                rows="5"
                :placeholder="$i18n.t('contact.messagePlaceholder')"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition"
            >
              {{ $i18n.t('contact.send') }}
            </button>

          </form>

        </div>

      </div>

    </div>

    <!-- FAQ Section -->
    <div class="bg-green-50 py-16 px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-10">
        Frequently Asked Questions
      </h2>

      <div class="max-w-4xl mx-auto space-y-4">

        <div class="bg-white p-5 rounded-xl shadow">
          <h3 class="font-bold text-green-700">
            Do you organize group tours?
          </h3>
          <p class="text-gray-600 mt-2">
            Yes, we organize tours for individuals, families, and groups.
          </p>
        </div>

        <div class="bg-white p-5 rounded-xl shadow">
          <h3 class="font-bold text-green-700">
            Can I book online?
          </h3>
          <p class="text-gray-600 mt-2">
            Yes, bookings can be made through our website.
          </p>
        </div>

        <div class="bg-white p-5 rounded-xl shadow">
          <h3 class="font-bold text-green-700">
            What destinations do you cover?
          </h3>
          <p class="text-gray-600 mt-2">
            We cover Volcanoes National Park, Akagera, Nyungwe, Lake Kivu, Kigali, and many more.
          </p>
        </div>

      </div>
    </div>

  </section>
</template>
