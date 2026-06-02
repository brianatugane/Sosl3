import { createWebHistory, createRouter } from 'vue-router'

import About from '../views/about.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Northern from '../views/nothern.vue';
import Southern from '../views/southern.vue';
import Western from '../views/western.vue';
import Eastern from '../views/eastern.vue';
import Kigali from '../views/kigali.vue';
import Photos from '../views/photos.vue';
import Videos from '../views/videos.vue';



const routes = [
    {
   path: "/",
   name: "home",
   component: Home
   },
   {
   path: "/about",
   name: "about",
   component: About
   },
    {
   path: "/services",
   name: "Services",
   component: Services
   },
   {
   path: "/contact",
   name: "Contact",
   component: Contact
   },
   {
    path: '/login',
    component: Login
   },
   {
    path: '/register',
    component: Register
   },
   {
  path: '/southern',
  component: Southern 
  },
   {
  path: '/western',
  component: Western
  },
   {
  path: '/eastern',
  component: Eastern
  },
   {
  path: '/kigali',
  component: Kigali
  },
   {
  path: '/photos',
  component: Photos
  },
   {
  path: '/videos',
  component: Videos
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
}
);

export default router