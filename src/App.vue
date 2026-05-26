<template>
  <div class="bg-gray-100 min-h-screen">

  
    <nav class="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">SOS TECHNICAL HIGH SCHOOL</h1>

      <div class="space-x-4">
        <a href="#about">About</a>
        <a href="#teachers">Teachers</a>
        <a href="#info">School Info</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    
    <div class="text-center py-10 bg-blue-600 text-white">

      <img
        :src="logo"
        class="w-32 h-32 rounded-full mx-auto border-4 border-white object-cover"
      />

      <h1 class="text-4xl font-bold mt-4">
        Welcome to SOS Technical High School
      </h1>

      <p class="mt-2">
        Technology • Innovation • Education
      </p>

    </div>

   
    <div id="about" class="p-6">

      <div class="bg-white p-6 rounded-xl shadow">

        <h2 class="text-2xl font-bold text-blue-700 mb-4">
          About School
        </h2>

        <p class="text-gray-700">
          SOS Technical High School is a technical school located in Kigali,
          Rwanda. The school focuses on ICT courses like Software Development,
          Networking and Multimedia.
        </p>

      </div>

    </div>


    <div id="info" class="p-6">

      <div class="bg-white p-6 rounded-xl shadow">

        <h2 class="text-2xl font-bold text-blue-700 mb-4">
          School Information
        </h2>

        <div class="space-y-3 text-gray-700">

          <p>
            📍 <strong>Location:</strong> Kigali, Rwanda
          </p>

          <p>
            👨‍🎓 <strong>Students:</strong> Over 500 students
          </p>

          <p>
            💻 <strong>Main Courses:</strong>
            Software Development, Networking, Multimedia
          </p>

          <p>
            🏆 <strong>Achievements:</strong>
            Won ICT competitions and produced skilled developers
          </p>

          <p>
            🌍 <strong>Mission:</strong>
            To provide quality technical education and innovation skills
          </p>

        </div>

      </div>

    </div>

  
    <div class="p-6">

      <div class="bg-white p-6 rounded-xl shadow">

        <h2 class="text-2xl font-bold text-blue-700 mb-4">
          Headteacher
        </h2>

        <img
          :src="headteacher"
          class="w-40 h-40 rounded-lg object-cover mb-4"
        />

        <p><strong>Name:</strong> Mr. jado</p>
        <p><strong>Position:</strong> Headteacher</p>

      </div>

    </div>
<div class="p-6">

      <div class="bg-white p-6 rounded-xl shadow">

        <h2 class="text-2xl font-bold text-blue-700 mb-4">
          director of discipline
        </h2>

        <img
          :src="disciplinemaster"
          class="w-40 h-40 rounded-lg object-cover mb-4"
        />

        <p><strong>Name:</strong> Mr. DOD</p>
        <p><strong>Position:</strong>disciplinemaster</p>

      </div>

    </div>
   
    <div id="teachers" class="p-6">

      <div class="bg-white p-6 rounded-xl shadow">

        <h2 class="text-2xl font-bold text-blue-700 mb-4">
          Teachers
        </h2>

        <ul class="space-y-2">
          <li>👨‍🏫 Mr Thierry - javascript fundamental</li>
          <li>👩‍🏫 Mr alexendra - Mathematics</li>
          <li>👨‍🏫 Mr chrispin - English</li>
          <li>👨‍🏫 Mr gedeon - projext requirement</li>
          <li>👨‍🏫 Ms solange - vue</li>
          <li>👨‍🏫 Mr innocent - phyisics</li>
          <li>👨‍🏫 Mr jean - graphic design</li>
          etc...
        </ul>

      </div>

    </div>

  
    <footer
      id="contact"
      class="bg-blue-900 text-white text-center p-6 mt-10"
    >

      <h2 class="text-2xl font-bold">
        SOS Technical High School
      </h2>

      <p class="mt-2">
        Kigali, Rwanda
      </p>

      <p class="mt-1">
        sostechinicalhighschool@gmail.com
      </p>

      <p class="mt-2 text-sm text-gray-300">
        © 2026 SOS Technical High School
      </p>

    </footer>

  </div>
</template>

<script>
import logo from './assets/sos-logo.jpg'
import headteacher from './assets/jado.png'

export default {
  name: 'App',

  data() {
    return {
      logo,
      headteacher
    }
  }
}
</script>