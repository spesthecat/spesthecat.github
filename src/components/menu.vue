<template>
	<div>
		<router-link class='nav-buttons' to="/about#bio">
			about me
		</router-link>
		<a class='nav-buttons' href="#contact">
			contact
		</a>
		<router-link class='nav-buttons' to="/projects">
			projects
		</router-link>
		<router-link class='nav-buttons' to="/blog">
			blog
		</router-link>
		<router-link class='nav-buttons' to="/about"> 
			resume
		</router-link>

		<div class='menu-slide'>
			<div @click.prevent="toggleMenu" class='menu-icon'>
				<div class='icon-part'/>
				<div class='icon-part'/>
				<div class='icon-part'/>
			</div>

			<div class='nav-menu' :class="{ 'show-nav-menu': showMenu }">
			</div>
		</div>

	</div>
</template>

<script>

export default {
	name: 'menu',
	data() {
		return {
			showMenu: false,
		}
	},
	methods: {
		toggleMenu() {
			this.showMenu = !this.showMenu;
		}
	}
}

</script>

<style scoped>

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

.menu-slide {
	position: absolute;
	height: 100vh;
	width: 15%;
	top: -15px;
	right: -30px;
}

.menu-icon {
	z-index: 3;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: 20px;
	cursor: pointer;
	top: 15px;
	right: 30px;
	position: absolute;
}

.menu-icon > .icon-part {
	margin: 2px 0;
	height: 2px;
	width: 20px;
	background-color: white;
	border-radius: 2px;
}

.nav-menu {
	background-color: rgba(88, 88, 88, 0.601);
	transition: width 0.5s ease;
	width: 0;
	height: 100%;
	right: 0;
	position: absolute;
}

.show-nav-menu {
	width: 100%;
}

@media screen and (max-width: 920px) {

	.nav-buttons {
		display: none;
	}

	.menu-slide {
		display: block;
	}

}

</style>
