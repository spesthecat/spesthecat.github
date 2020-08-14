<template>
	<div id="app">
		
		<Sidebar/>

		<router-view/>

	</div>
</template>

<script>

import Sidebar from './components/sidebar.vue';

export default {
	name: 'app',
	components: {
		Sidebar,
	},
	data() {
		return {
			showSideBar: false,
		}
	}
}

</script>

<style lang="scss">

* {
	margin: 0;	
}

#app {
	font-family: 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.911);
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

</style>
