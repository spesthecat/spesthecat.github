import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../views/Landing.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Blogs from '../views/Blogs.vue';
import Admin from '../views/Admin.vue';

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
		name: 'projectsLanding',
		path: '/projects',
		components: {
			default: Projects
		}
	},
	{
		name: 'projectsView',
		path: '/projects/*-:id',
		components: {
			default: Projects
		}	
	},
	{
		name: 'blogsLanding',
		path: '/blogs',
		components: {
			default: Blogs
		}
	},
	{
		name: 'blogsView',
		path: '/blogs/*-:id',
		components: {
			default: Blogs
		}	
	},
	{
		name: 'admin',
		path: '/admin',
		components: {
			default: Admin
		}
	}
];

const router = new VueRouter({
	mode: 'hash',
	routes
});

export default router;
