<template>
	<div> 
		<sidebar :options="{ title: 'Projects' }"/>
	</div>
</template>

<script>

import sidebar from '../components/sidebar.vue';

export default {
	name: 'projects',
	components: {
		sidebar
	}
}

</script>

<style scoped>



</style>