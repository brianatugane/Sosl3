<template>
    <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-bet">
    <img src="../assets/images/rwandalogo.ico" alt="Logo" class="h-10 w-10"> 
    <span class="text-xl font-bold"></span>


    <ul class="flex gap-8 text-sm font-medium w-full justify-end">
    <li><router-link to="/" class="hover:text-yellow-400">Home</router-link></li>
    <li><router-link to="/about" class="hover:text-yellow-400">About</router-link></li>


    <li class="relative group">
    <a href="#" class="hover:text-yellow-300">Gallery<span></span></a>
    <ul class="invisible group-hover:visible opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
     <li><a href="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</a></li>
     <li><a href="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</a></li>
    </ul>
</li>
  <li class="relative group">
    <a href="#" class="hover:text-yellow-300">Destination<span></span></a>
<ul class="invisible group-hover:visible opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
        
        <li><a href="/northern"class="block px-4 py-2 hover:bg-green-200 text-green-900">Northern Province</a></li>
     <li><a href="/southern" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern Province</a></li>
     <li><a href="/western" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western Province</a></li>   
     <li><a href="/eastern" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern Province</a></li>
     <li><a href="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali City</a></li>
    </ul>
</li>

    <li><router-link to="/services" class="hover:text-yellow-400">Services</router-link></li>
    <li><router-link to="/contact" class="hover:text-yellow-400">Contact</router-link></li>

    
    

    </ul>

</nav>
    </template>