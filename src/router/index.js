import Vue from "vue"
import Router from "vue-router"
import Confirm from "@/components/Confirm"
import Manage from "@/components/Manage"
import Teams from "@/components/Teams"

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
      path: "/teams",
      name: "Teams",
      component: Teams
    }
  ]
})
