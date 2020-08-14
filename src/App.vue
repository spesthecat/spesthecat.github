<template>
	<div id="app">
		
		<Sidebar/>

		<router-view id='main-view'/>

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

html, body {
	height: 100%;
}

#app {
	font-family: 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: rgba(0, 0, 0, 0.911);
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

#main-view {
	height: 100%;
	overflow-y: height;;
	overflow-x: hidden;
	scrollbar-width: none;
	-ms-overflow-style: none;
	-webkit-scrollbar: none;
}

</style>
