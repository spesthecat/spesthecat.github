import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from '../views/Landing.vue';
import About from '../views/About.vue';
import ProjectBlog from '../views/ProjectBlog.vue';
import Admin from '../views/Admin.vue';

import notfound from '../components/notfound.vue';

Vue.use(VueRouter);

const routes = [
	{
		name: 'landing',
		path: '/',
		components: {
			default: Landing
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
		name: 'admin',
		path: '/admin',
		components: {
			default: Admin
		}
	},
	{
		name: 'pbLanding',
		path: '/:scope/',
		components: {
			default: ProjectBlog
		}
	},
	{
		name: 'pbLandingContent',
		path: '/:scope/*-:id',
		components: {
			default: ProjectBlog
		}	
	},
	{
		name: 'notfound',
		path: '/*',
		components: {
			default: notfound
		}
	}
];

const router = new VueRouter({
	mode: 'hash',
	routes
});

export default router;
