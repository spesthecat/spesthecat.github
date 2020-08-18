<template>
	<div id='sidebar'>
		<div class='title'> {{ options.title }} </div>
	</div>
</template>

<script>

export default {
	name: 'sidebar',
	props: ['options']
}

</script>

<style scoped>

#sidebar {
	position: absolute;
	width: 250px;
	height: 100%;
	left: 0;
	background-color: var(--secondary-bg-color);
}

.title {
	width: 80%;
	margin: 30px auto;
	text-align: center;
	color: var(--secondary-text-color);
	font-weight: bold;
	font-size: 24px;
	padding-bottom: 30px;
	box-shadow: 0 2px var(--primary-bg-color);
}

</style>