<template>
	<div id='menu'>
		<router-link class='nav-buttons' to="/about#bio">
			About Me
		</router-link>
		<router-link class='nav-buttons' to="/projects">
			Projects
		</router-link>
		<router-link class='nav-buttons' to="/blog">
			Blog
		</router-link>
		<router-link class='nav-buttons' to="/about"> 
			Resume
		</router-link>
	</div>
</template>

<script>

export default {
	name: 'menu'
}

</script>

<style scoped>

#menu {
	z-index: 2;
	position: absolute;
	top: 15px;
	right: 30px;
}

.nav-buttons {
	padding: 10px;
	margin: 0 5px;
	border-radius: 4px;
	text-decoration: none;
	font-weight: bold;
	cursor: pointer;
	color: #1f98b1;
	background-color: rgba(88, 88, 88, 0.401);
}

.nav-buttons:hover {
	background-color: rgba(88, 88, 88, 0.801);
}

</style>
