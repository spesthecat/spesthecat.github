<template>
	<div>
		<li/>
	</div>
</template>

<script>

export default {
	name: 'backgroundShapes'
}

</script>

<style lang='scss' scoped>

li {
	position: absolute;
	list-style: none;
	display: block;
	width: 40px;
	height: 40px;
	background-color: rgba(255, 255, 255, 0.15);
	bottom: -10%;
	animation: square 25s linear alternate infinite;
}

@keyframes square {
	0% {
		top: -10%;
	}
	100% {
		-webkit-transform: rotate(600deg);
		transform: rotate(600deg);
		top: 110%;
	}
}

</style>