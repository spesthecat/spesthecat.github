<template>
	<div id="app">
		
		<router-view id='main-view'/>

	</div>
</template>

<script>

export default {
	name: 'app',

}

</script>

<style lang="scss">

:root {
	--primary-text-color: #1f98b1;
	--secondary-text-color: rgb(92, 108, 255);
	--primary-bg-color: rgba(0,0,0,0.911);
	--secondary-bg-color: rgba(88,88,88,0.601);
}

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
