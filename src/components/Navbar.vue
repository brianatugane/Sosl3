<template>
    <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-bet">
    <img src="../assets/images/rwandalogo.ico" alt="Logo" class="h-10 w-10"> 
    <span class="text-xl font-bold"></span>


    <ul class="flex gap-8 text-sm font-medium w-full justify-end items-center">
    <li><router-link to="/" class="hover:text-yellow-400">{{ $i18n.t('nav.home') }}</router-link></li>
    <li><router-link to="/about" class="hover:text-yellow-400">{{ $i18n.t('nav.about') }}</router-link></li>


    <li class="relative group">
    <a href="#" class="hover:text-yellow-300">{{ $i18n.t('nav.gallery') }}<span></span></a>
    <ul class="invisible group-hover:visible opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
     <li><a href="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ $i18n.t('nav.photos') }}</a></li>
     <li><a href="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ $i18n.t('nav.videos') }}</a></li>
    </ul>
</li>
  <li class="relative group">
    <a href="#" class="hover:text-yellow-300">{{ $i18n.t('nav.destination') }}<span></span></a>
<ul class="invisible group-hover:visible opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
        
        <li><a href="/northern"class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ $i18n.t('nav.northern') }}</a></li>
     <li><a href="/southern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ $i18n.t('nav.southern') }}</a></li>
     <li><a href="/western" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ $i18n.t('nav.western') }}</a></li>   
     <li><a href="/eastern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ $i18n.t('nav.eastern') }}</a></li>
     <li><a href="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ $i18n.t('nav.kigali') }}</a></li>
    </ul>
</li>

    <li><router-link to="/services" class="hover:text-yellow-400">{{ $i18n.t('nav.services') }}</router-link></li>
    <li><router-link to="/contact" class="hover:text-yellow-400">{{ $i18n.t('nav.contact') }}</router-link></li>

    <!-- Language Switcher -->
    <li class="relative group">
    <a href="#" class="hover:text-yellow-300 flex items-center gap-1">
      <span>{{ $i18n.t('nav.language') }}</span>
      <span class="text-xs">▼</span>
    </a>
    <ul class="invisible group-hover:visible opacity-100 absolute bg-white text-green-900 rounded shadow w-32 top-full right-0 z-50">
      <li>
        <button 
          @click="changeLanguage('en')" 
          :class="['w-full text-left block px-4 py-2 hover:bg-green-200', { 'bg-green-300': $i18n.locale === 'en' }]"
        >
          English
        </button>
      </li>
      <li>
        <button 
          @click="changeLanguage('rw')" 
          :class="['w-full text-left block px-4 py-2 hover:bg-green-200', { 'bg-green-300': $i18n.locale === 'rw' }]"
        >
          Kinyarwanda
        </button>
      </li>
    </ul>
</li>
    

    </ul>

</nav>
    </template>

<script setup>
import { useI18n } from '../i18n.js'

const { setLocale } = useI18n()

const changeLanguage = (locale) => {
  setLocale(locale)
}
</script>