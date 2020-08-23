<template>
	<div> 
		
		<sidebar :options="{ title: 'Projects' }"/>

		<backarrow/>

	</div>
</template>

<script>

import sidebar from '../components/sidebar.vue';
import backarrow from '../components/backarrow.vue';

export default {
	name: 'projects',
	components: {
		sidebar, 
		backarrow
	}
}

</script>

<style scoped>



</style>