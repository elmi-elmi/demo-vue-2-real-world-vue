import { createRouter, createWebHistory } from "vue-router";

import EventCreate from "@/views/EventCreate";
import EventList from "@/views/EventList";
import EventShow from "@/views/EventShow";

const routes = [
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  },
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
