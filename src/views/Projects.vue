<template>
	<div> 

		<sidebar :options="{ title: 'Projects' }"/>

		<div class='project-display'>
			<div class='title'> hi </div>
		</div>
	</div>
</template>

<script>

import sidebar from '../components/sidebar.vue';

export default {
	name: 'projects',
	data() {
		return {
			pID: ''
		}
	},
	watch: {
		$route(to) {
			this.pID = to.params.id;
		}
	},
	components: {
		sidebar
	}
}

</script>

<style scoped>



</style>