import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Itinerary from "../views/Itinerary.vue";
import Location from "../views/Location.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/itinerary",
      name: "itinerary",
      component: Itinerary,
    },
    {
      path: "/location",
      name: "location",
      component: Location,
    },
  ],
});

export default router;
