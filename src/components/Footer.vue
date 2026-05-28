<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
        <div class="flex flex-wrap justify-between gap-8">
        <div>
            <h3 class="text-yellow-300 font-bold text_1g mb-3">Tembera U Rwanda</h3>
            <p class="text-sm text-green-200">Discover the beauty of the Land of a thousand hills</p>
        </div>
        <!--Quick Link-->
        <div>
            <h3 class="text-yellow-300 font-bold text_1g mb-3">Quick Links</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/Home" class="hover:text-yellow-300">Home</RouterLink><br>
                </li>
                <li>
                    <RouterLink to="/About" class="hover:text-yellow-300">About</RouterLink><br>
                </li>
                <li>
                    <RouterLink to="/Services" class="hover:text-yellow-300">Services</RouterLink><br>
                </li>
                <li>
                    <RouterLink to="/Contact" class="hover:text-yellow-300">Contact</RouterLink><br>s
                </li>

            </ul>
        </div>
        <!--Destinations-->
        <div>
            <h3 class="text-yellow-300 font-bold text_1g mb-3">Destinations</h3>
            <ul class="space-y-2 text-sm">
            <li>
                <RouterLink to="/kigali" class="hover:text-yellow-300">Kigali City</RouterLink>
            </li><br>
            <li>
                <RouterLink to="/eastern" class="hover:text-yellow-300">Eastern Province</RouterLink>
            </li><br>
            <li>
                <RouterLink to="/nothern" class="hover:text-yellow-300">Nothern Province</RouterLink>
            </li><br>
            <li>
                <RouterLink to="/southern" class="hover:text-yellow-300">Southern Province</RouterLink>
            </li><br>
            <li><RouterLink to="/western" class="hover:text-yellow-300">Western Province</RouterLink>
            </li><br>
        </ul>
        </div>
         <!--Contact Info-->
        <div>
            <h3 class="text-yellow-300 font-bold text_1g mb-3">Contact</h3>
            <ul class="space-y-2 text-sm">
            <li>
                <RouterLink to="/" class="hover:text-yellow-300">ahantunyaburanga</RouterLink>
            </li><br>
            <li>
                <RouterLink to="/" class="hover:text-yellow-300">+2507883452</RouterLink>
            </li><br>
            <li>
                <RouterLink to="/" class="hover:text-yellow-300">Kigali-Rwanda</RouterLink>
            </li><br>
        </ul>
        </div>
        </div>

        <div class="border-t border-green-600 mt-8 pt-4 text-green-300"></div>
        <p class="text-center">©️ 2026 Visit Rwanda.All rights reserved</p>
    </footer>


</template>