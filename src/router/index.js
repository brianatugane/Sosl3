import { createWebHistory, createRouter } from 'vue-router'

import About from '../views/about.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';



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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
}
);

export default router