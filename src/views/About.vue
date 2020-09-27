<template>
	<div class='about'>

		<div class='side-scroll'>
			<div class='bar-container'>
				<div id='bar'/>
			</div>
		</div>

		<div class='content'>
			<div id='bio'>
				<p class='title'> bio </p>
				<p v-for='para of bio' :key='para' class='medium'>
					{{ para }}
				</p>
				<p class='medium'> dadwa </p>
				<div class='scroll-down'>
					<!-- add jump to the below element with nuxt -->
					<backarrow :disabled='true'/> 
				</div>
			</div>
			<div id='education'>
				test
			</div>
		</div>
	</div>
</template>

<script>

import api from '../utils/api.js';
import { mapGetters } from 'vuex';
import backarrow from '../components/backarrow.vue';

export default {
	name: 'About',
	components: {
		backarrow
	},
	data() {
		return {
			bio: []
		}
	},
	computed: {
		...mapGetters(['authenticated'])
	},
	methods: {
		onscroll() {
			let content = document.getElementsByClassName('content')[0];
			let bar = document.getElementsByClassName('side-scroll')[0];

			// let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			let height = content.scrollHeight - content.clientHeight;
			let scrolled = (content.scrollTop / height) * 100;
			if (this.extended) {
				document.getElementById('bar').style.height=scrolled+'%';
			}else {
				setTimeout(() => {
					document.getElementById('bar').style.height=scrolled+'%';
				}, 1500);
			}

			if (scrolled > 0 && content.style.left!=='20%'){
				content.style.left='20%';
				bar.style.left='0';
				setTimeout(() => {
					this.extended = true;
				}, 2000);
			} else if (scrolled === 0) {
				content.style.left='12.5%';
				bar.style.left='-20%';
				setTimeout(() => {
					this.extended = false;
				}, 2001);
			}
		}
	},
	async mounted() {
		let bio = await api.getDocByID('static', 'bio');
		this.bio = bio.paragraphs;
		// setTimeout(() => {
		document.getElementById('bio').style.opacity=1;
		// })
		
		(document.getElementsByClassName('content')[0]).addEventListener('scroll', this.onscroll);
	},
	destroyed() {
		(document.getElementsByClassName('content')[0]).removeEventListener('scroll', this.onscroll);
	}
}

</script>

<style lang='scss' scoped>

.about {
	/* width: 100%; */
	height: 100%;
}

.side-scroll {
	top: 5%;
	width: 20%;
	height: 90%;
	left: -20%;
	// background-color: green;
	position: fixed;
	transition: left 2s ease, opacity 2s ease;
}

.bar-container {
	margin: auto;
	height: 100%;
	width: 10px;
	border-radius: 10px;
	border: 1px solid rgba(196, 196, 196, 0.212);

	#bar {
		border-radius: 10px;
		background: var(--primary-text-color);
		height: 0;
		width: 100%;
	}
}

.content {
	overflow-y: auto;
	height: 100%;
	width: 75%;
	left: 12.5%;
	position: absolute;
	color: white;
	transition: left 2s ease;


	.title {
		text-align: center;
		width: 100%;
		margin: 60px 0;
		color: var(--primary-text-color);
		font-weight: bold;
		font-size: 40px;
	}

	.medium {
		font-size: 25px;
		font-family: Georgia, Cambria, "Times New Roman", Times, serif;
		letter-spacing: 0.63px;
		line-height: 40px;
		overflow-wrap: break-word;
		word-break: break-word;
		margin-top: 40px;
	}

	#bio {
		height: 100%;

		.scroll-down {
			// width: 40px;
			transform: rotate(-90deg);
			position: absolute;
			left: 50%;
			bottom: 60px;
		}
	}

	// lazy load effect
	&>* {
		opacity: 0;
		transition: opacity 1.5s ease, margin-top 1.5s ease;
	}
	
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
	// background-color: green;

}

/* #goback {
	position: absolute;
	left: 50%;
	bottom: 200px;
} */

</style>
