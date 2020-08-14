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
	position: absolute;
	right: 30px;
}

.nav-buttons {
	text-decoration: none;
	cursor: pointer;
	color: #1f98b1;
}

</style>
