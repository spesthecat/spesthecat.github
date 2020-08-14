import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
	{
		name: 'main',
		path: '/',
		components: {
			default: Main,
		}
	},
	{
		name: 'about',
		path: '/about',
		components: {
			default: About,
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
