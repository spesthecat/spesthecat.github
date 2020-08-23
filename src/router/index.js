import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../views/Landing.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Blogs from '../views/Blogs.vue';

Vue.use(VueRouter);

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
	},
	{
		name: 'blogs',
		path: '/blogs',
		components: {
			default: Blogs
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
