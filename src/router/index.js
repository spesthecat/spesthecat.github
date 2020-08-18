import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Landing.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

const routes = [
	{
		name: 'main',
		path: '/',
		components: {
			default: Main
		}
	},
	{
		name: 'about',
		path: '/about',
		components: {
			default: About
		}
	},
	{
		name: 'projects',
		path: '/projects',
		components: {
			default: Projects
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
