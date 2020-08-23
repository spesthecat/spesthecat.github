<template>
	<div> 

		<sidebar :options="{ title: 'Blogs' }"/>

	</div>
</template>

<script>

import sidebar from '../components/sidebar.vue';

export default {
	name: 'blogs',
	components: {
		sidebar
	}
}

</script>

<style scoped>



</style>