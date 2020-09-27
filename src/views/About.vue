<template>
	<div class='about'>

		<div class='side-scroll'>
			<div class='bar-container'>
				<div id='bar'/>
			</div>
		</div>

		<div class='content'>
			<div class='bio'>
				<p class='title'> bio </p>
				<p> {{ bio }} </p>
			</div>
		</div>
	</div>
</template>

<script>

import api from '../utils/api.js';
import { mapGetters } from 'vuex';

export default {
	name: 'About',
	data() {
		return {
			bio: ''
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
			document.getElementById('bar').style.height = scrolled + '%';

			if (scrolled > 0 && content.style.left!=='20%'){
				content.style.left='20%';
				bar.style.left='0';
			}
			else if (scrolled === 0) {
				content.style.left='12.5%';
				bar.style.left='-20%';
			}
		}
	},
	async mounted() {
		let bio = await api.getDocByID('static', 'bio');
		this.bio = bio.text;
		// setTimeout(() => {
		document.getElementsByClassName('bio')[0].style.opacity=1;
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
	font-size: 50px;
	transition: left 2s ease;

	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
	// background-color: green;

	&>* {
		opacity: 0;
		transition: opacity 1.5s ease, margin-top 1.5s ease;
	}
	
	.title {
		text-align: center;
		width: 100%;
		margin: 40px 0;
		color: var(--primary-text-color);
		font-weight: bold;
		font-size: 40px;
	}

}

/* #goback {
	position: absolute;
	left: 50%;
	bottom: 200px;
} */

</style>
