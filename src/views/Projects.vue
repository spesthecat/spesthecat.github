<template>
	<div> 

		<sidebar :options="{ title: 'Projects' }"/>

		<div class='project-display'>
			<div class='title'> 
				{{ project.name }} 
				<div class='date'> 2020-06-15 / 15:23 </div>
			</div>
		</div>
	</div>
</template>

<script>

import api from '../utils/api.js';
import sidebar from '../components/sidebar.vue';

export default {
	name: 'projects',
	data() {
		return {
			project: {}
		}
	},
	computed: {
		pID() {
			return this.$route.params.id;
		}
	},
	components: {
		sidebar
	},
	watch: {
		async pID() {
			this.project = await api.getDocByID('projects', this.pID);
		}
	},
	async mounted() {
		if (this.pID) {
			this.project = await api.getDocByID('projects', this.pID);
		}
	}
}

</script>

<style scoped>

.project-display {
	position: absolute;
	left: 250px;
	width: calc(100% - 250px);
	height: 100%;
	overflow: auto;
}

.title {
	top: 50px;
	position: relative;
	width: 60%;
	margin: auto;
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 34px;
	color: white;

	padding-bottom: 40px;
	border-bottom: 1px solid rgb(185, 185, 185);
}

.date {
	position: absolute;
	font-size: 16px;
	right: 0;
	bottom: 10px;
	padding-right: 10px;
	color: var(--primary-text-color);
}

</style>