import Vue from 'vue'
import VueRouter from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(VueRouter)

const routes = []

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
    })
  })
})

export default new VueRouter({ routes })
