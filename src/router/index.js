import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function lazyLoad(view) {
	return () => import(`../views/${view}.vue`);
}

const routes = [
	{
		name: 'landing',
		path: '/',
		components: {
			default: lazyLoad('Landing'),
		},
	},
	{
		name: 'about',
		path: '/about',
		components: {
			default: lazyLoad('About'),
		},
	},
	{
		name: 'admin',
		path: '/admin',
		components: {
			default: lazyLoad('Admin'),
		},
	},
	{
		name: 'pbLanding',
		path: '/:scope/',
		components: {
			default: lazyLoad('ProjectBlog'),
		}
	},
	{
		name: 'pbLandingContent',
		path: '/:scope/:id',
		components: {
			default: lazyLoad('ProjectBlog'),
		}	,
	},
	{
		name: 'notfound',
		path: '/*',
		components: {
			default: lazyLoad('NotFound'),
		},
	}
];

const router = new VueRouter({
	mode: 'hash',
	routes,
});

export default router;
