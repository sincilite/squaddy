import Vue from "vue"
import Router from "vue-router"
import Confirm from "@/components/Confirm"
import Games from "@/components/Games"
import Manage from "@/components/Manage"
import Players from "@/components/Players"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Confirm",
      component: Confirm
    },
    {
      path: "/new-game",
      name: "Manage",
      component: Manage
    },
    {
      path: "/players",
      name: "Players",
      component: Players
    },
    {
      path: "/games",
      name: "Games",
      component: Games
    }
  ]
})
