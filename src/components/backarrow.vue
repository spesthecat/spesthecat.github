<template>
	<div>
		<router-link :to="link">
			<div class='arrow-left'/>
		</router-link>
	</div>
</template>

<script>

export default {
	name: 'backarrow',
	props: ['link']
}

</script>

<style scoped>

.arrow-left {
	width: 20px;
	height: 20px;
	border-left: 2px var(--primary-text-color) solid;
	border-bottom: 2px var(--primary-text-color) solid;
	transform: rotate(45deg);
	cursor: pointer;
	transition: transform 1s ease;
	opacity: 0.7;
}

.arrow-left:hover {
	opacity: 1;
	transform: rotate(45deg) translate(-10px, 10px);
}

</style>
