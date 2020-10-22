<template>
	<div> 
		<div v-if="acceptPaths.includes(scope)">
			<sidebar class='sidebar' :options="{ title: scope}"/>

			<div class='content-display'>
				<div class='title'> 
					{{ data.name }}
					<div class='date'> {{ data.timestamp }} </div>
				</div>

				<!-- <div class='content'></div> -->
				<div class='content'>
					<file-viewer
					class='file'
					src='cac.html'/>

					<contact class='footer'/>	
				</div>
				<!-- <div ref='background' class='background'>
					<backgroundShapes :amount="50"/>
				</div> -->

			</div>


		</div>
		<not-found v-else/>
	</div>
</template>

<script>

// const fs = require('fs')
// import file from '../_projects/0webdev/test/content.md'
import sidebar from '../components/sidebar.vue';
import NotFound from '../components/notfound.vue';
import FileViewer from '../components/fileviewer.vue';
import Contact from '../components/contact.vue';
// import backgroundShapes from '../components/backgroundShapes.vue';

export default {
	name: 'project-blog',
	data() {
		return {
			data: {},
			acceptPaths: ['projects', 'blogs']
		}
	},
	computed: {
		scope() {
			return this.$route.params.scope.toLowerCase();
		},
		contentHeight() {
			return this.$refs.content.clientHeight;
		}
	},
	components: {
		sidebar,
		NotFound,
		FileViewer,
		Contact,
		// backgroundShapes
	},
	watch: {
	},
}

</script>

<style lang='scss' scoped>

.sidebar {
	z-index: 5;
}

.content-display {
	position: absolute;
	left: 250px;
	width: calc(100% - 250px);
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
}

.content, .background {
	width: 60%;
	position: absolute;
	left: 20%;
	margin-top: 100px;
	white-space: pre-wrap;
}

.title {
	top: 50px;
	position: relative;
	width: 60%;
	margin: auto;
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 34px;
	color: white;

	padding-bottom: 40px;
	border-bottom: 1px solid rgb(185, 185, 185);
}

.date {
	position: absolute;
	font-size: 16px;
	right: 0;
	bottom: 10px;
	padding-right: 10px;
	color: var(--primary-text-color);
}

.background {
	position: absolute;
	left: 0;
	width: 100%;
	// height: 100%;
	z-index: 1;
	overflow: hidden;
}

.footer {
	z-index: 1;
	margin-top: 50px;
	// left: -30%;
	// width: 160%;
	position: absolute;
	left: -35%;
	right: -35%;
	overflow: hidden;
	height: 50px;
}

</style>

<style lang='scss'> // global because DOM injection

.content {
	z-index: 2;
	color: white;
	
	p {

		a {
			text-decoration: underline;
			color: var(--primary-text-color);
		}

		img {
			position: relative;
			max-width: 100%;
			height: auto;
			margin: auto;
			display: block;
		}

		&.img-wrapper {
			width: 140%;
			left: -20%;
			position: relative;
		}
	}

	iframe {
		position: relative;
		max-width: 100%;
		width: 30vw;
		height: 30vh;
		margin: auto;
		display: block;
	}

	pre {
		overflow-x: scroll;
	}

	h1 {
		// cursor: pointer;
		padding-bottom: 15px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.247);
		&::before {
			content: '#';
			position: absolute;
			left: -25px;
			font-weight: normal;
			color: var(--primary-text-color);
		}
	}

}

</style>