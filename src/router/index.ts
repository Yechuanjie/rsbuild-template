import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About/About.vue'
import { projectName } from '@/config'

const routes = [
  { name: 'Home', path: '/', component: Home, meta: { title: 'planning' } },
  { name: 'About', path: '/about', component: About, meta: { title: 'about' } }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior: (to, form, savePosition) => {
    if (savePosition) return savePosition
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta) {
    document.title = to.meta.title || projectName
  }
  next()
})

export default router
