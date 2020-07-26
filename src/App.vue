<template>
	<div id="app">

		<Hero id='hero'/>	

		<router-view/>

	</div>
</template>

<script>

import Hero from './components/Hero';

export default {
	name: 'app',
	components: {
		Hero,
	},

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
	overflow-y: scroll;
	overflow-x: hidden;
}

#hero {
	width: 100%;
}

</style>
