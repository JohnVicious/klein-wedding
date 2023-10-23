import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Itinerary from "../views/Itinerary.vue";
import Monday from "../views/itinerary/Monday.vue";
import Wednesday from "../views/itinerary/Wednesday.vue";
import Thursday from "../views/itinerary/Thursday.vue";
import Friday from "../views/itinerary/Friday.vue";
import Saturday from "../views/itinerary/Saturday.vue";
import Sunday from "../views/itinerary/Sunday.vue";
import Location from "../views/Location.vue";
import Music from "../views/Music.vue";
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
      children: [
        {
          path: 'Monday',
          component: Monday,
        },
        {
          path: 'Wednesday',
          component: Wednesday,
        },
        {
          path: 'Thursday',
          component: Thursday,
        },
        {
          path: 'Friday',
          component: Friday,
        },
        {
          path: 'Saturday',
          component: Saturday,
        },
        {
          path: 'Sunday',
          component: Sunday,
        }
      ]
    },
    {
      path: "/location",
      name: "location",
      component: Location,
    },
    {
      path: "/music",
      name: "music",
      component: Music,
    },
  ],
});

export default router;
