<script setup>
import { ref } from 'vue'

const galleryOpen = ref(false)
const destinationOpen = ref(false)

</script>
<template>
  <nav class="bg-green-800 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <img src="../assets/images/rwandalogo.ico" alt="Logo" class="h-10 w-10">
    

      <ul class="flex gap-6 text-lg">
        <li>
          <a href="/" class="hover:text-yellow-300">
            Home
          </a>
        </li>

        <li>
          <a href="/about" class="hover:text-yellow-300">
            About
          </a>
        </li>

        <li>
          <a href="/services" class="hover:text-yellow-300">
            Services
          </a>
        </li>

         <li class="relative group">
          <a href="#" class="hover:text-yellow-300"> Gallery <span>▽</span></a>
           <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-1g opacity-0 group-hover:opacity-100 transition-opacity">
            <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-7OO">Photos</a> </li>
            <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-7OO">Videos</a></li>
          </ul>

        </li>

         <li class="relative group">
          <a href="#" class="hover:text-yellow-300"> Destination <span>▽</span></a>
          <ul class="absolute right-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-1g opacity-0 group-hover:opacity-100 transition-opacity">
            <li>
            <a href="/kigali" class="block px-4 py-2 hover:bg-green-7OO">Kigali City</a>
            </li>
            <li>
              <a href="/eastern" class="block px-4 py-2 hover:bg-green-7OO">Eastern Province</a> 
            </li>
            <li>
              <a href="/nothern" class="block px-4 py-2 hover:bg-green-7OO">Nothern Province</a>
            </li>
            <li>
              <a href="southern" class="block px-4 py-2 hover:bg-green-7OO">Southern Province</a>
              </li>
            <li>
              <a href="/western" class="block px-4 py-2 hover:bg-green-7OO">Western Province</a>
            </li>
          </ul>

        </li>

        

        <li>
          <a href="/contact" class="hover:text-yellow-300">
            Contact
          </a>
        </li>
      </ul>

    </div>
  </nav>
</template>