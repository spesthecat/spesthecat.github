<template>
	<div>
		<div class='menu-not-slide'>
			<router-link class='nav-buttons' to="/about">
				/about
			</router-link>
			<a class='nav-buttons' href="#contact">
				#contact
			</a>
			<router-link class='nav-buttons' to="/projects">
				/projects
			</router-link>
			<router-link class='nav-buttons' to="/blogs">
				/blogs
			</router-link>
			<!-- <router-link class='nav-buttons' to="/about"> 
				resume
			</router-link> -->
		</div>
		<div class='menu-slide'>
			<div @click.prevent="toggleMenu" class='menu-icon'>
				<div class='icon-part'/>
				<div class='icon-part'/>
				<div class='icon-part'/>
			</div>

			<div class='nav-menu' :class="{ 'show-nav-menu': showMenu }">
				<router-link id='first' class='nav-buttons slide' to="/about">
					about
				</router-link>
				<a class='nav-buttons slide' href="#contact">
					contact
				</a>
				<router-link class='nav-buttons slide' to="/projects">
					projects
				</router-link>
				<router-link class='nav-buttons slide' to="/blogs">
					blog
				</router-link>
			</div>
		</div>

	</div>
</template>

<script>

export default {
	name: 'navlinks',
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
	color: var(--primary-text-color);
	background-color: rgba(88, 88, 88, 0.401);
}

.nav-buttons:hover {
	background-color: rgba(88, 88, 88, 0.801);
}

.slide {
	text-align: center;
	background-color: var(--secondary-bg-color);
	padding: 20px 0;
	margin: 0;
	border-radius: 0;
	position: relative;
}

.slide:first-child {
	margin-top: 50px;
}

.menu-slide {
	display: none;
	position: absolute;
	height: 100vh;
	width: 200px;
	top: -15px;
	right: -30px;
}

.menu-not-slide {
	position: fixed;
	right: 15px;
	top: 30px;
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
	position: fixed;
}

.menu-icon > .icon-part {
	margin: 2px 0;
	height: 2px;
	width: 20px;
	background-color: white;
	border-radius: 2px;
}

.nav-menu {
	background-color: var(--secondary-bg-color);
	transition: width 0.5s ease;
	width: 0;
	height: 100vh;
	right: 0;
	display: flex;
	flex-flow: column nowrap;
	position: fixed;
	z-index: 0;
}

.show-nav-menu {
	width: inherit;
}

@media screen and (max-width: 920px) {

	.menu-not-slide {
		display: none;
	}

	.menu-slide {
		display: block;
	}

}

@media screen and (max-width: 650px) {

	.menu-slide {
		width: 100%;
	}

	.menu-slide > .nav-menu {
		background-color: rgb(50, 50, 50);
	}

}

</style>
