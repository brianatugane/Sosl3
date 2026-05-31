<template>
  <section class="py-16 px-8">
      <h2 class="text-5xl font-bold text-center text-green-700 mb-12">
        Contact Us
      </h2>

    <!-- Contact Section -->
    <div class="max-w-7xl mx-auto px-6 py-16">

      <div class="grid md:grid-cols-2 gap-12">

        <!-- Contact Information -->
        <div>
          <h2 class="text-4xl font-bold text-green-700 mb-8">
            Get In Touch
          </h2>

          <div class="space-y-6">

            <div class="bg-green-50 p-5 rounded-2xl shadow">
              <h3 class="text-xl font-bold text-green-700">
                📍 Location
              </h3>
              <p class="text-gray-600 mt-2">
                Kigali, Rwanda
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-2xl shadow">
              <h3 class="text-xl font-bold text-green-700">
                📞 Phone
              </h3>
              <p class="text-gray-600 mt-2">
                +250 7XX XXX XXX
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-2xl shadow">
              <h3 class="text-xl font-bold text-green-700">
                ✉️ Email
              </h3>
              <p class="text-gray-600 mt-2">
                info@temberaurwanda.com
              </p>
            </div>

            <div class="bg-green-50 p-5 rounded-2xl shadow">
              <h3 class="text-xl font-bold text-green-700">
                🕒 Working Hours
              </h3>
              <p class="text-gray-600 mt-2">
                Monday - Saturday<br>
                8:00 AM - 6:00 PM
              </p>
            </div>

          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white shadow-2xl rounded-3xl p-8">

          <h2 class="text-3xl font-bold text-green-700 mb-6">
            Send a Message
          </h2>

          <form class="space-y-5">

            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition"
            >
              Send Message
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
