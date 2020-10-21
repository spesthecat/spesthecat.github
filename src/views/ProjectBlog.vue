<template>
	<div> 
		<div v-if="acceptPaths.includes(scope)">
			<sidebar :options="{ title: scope}"/>

			<div class='content-display'>
				<div class='title'> 
					{{ data.name }}
					<div class='date'> {{ data.timestamp }} </div>
				</div>

				<!-- <div class='content'></div> -->
				<file-viewer
				class='content'
				src='cac.html'/>
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
		// backgroundShapes
	},
	watch: {
	},
}

</script>

<style lang='scss' scoped>

@import "~simplemde/dist/simplemde.min.css";

.content-display {
	position: absolute;
	left: 250px;
	width: calc(100% - 250px);
	height: 100%;
	overflow: auto;
}

.editor, .content, .background {
	width: 60%;
	position: absolute;
	left: 20%;
	margin-top: 100px;
	white-space: pre-wrap;
}

.editor {
	height: 70%;
	overflow-x: auto;
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

.edit-title {
	position: absolute;
	right: 25px;
	top: -10px;
	
	img {
		width: 16px;
		height: 16px;
		filter: invert(100%);
	}

	:hover {
		cursor: pointer;
	}
}

.content {
	color: white;
}

.delete {
	position: absolute;
	right: 0;
	top: -8px;

	:hover {
		cursor: pointer;
	}

	img {
		width: 20px;
		height: 20px;
	}

	.confirm {
		position: absolute;
		font-size: 14px;
		color: rgb(226, 27, 27);
		top: 14px;
		left: 20px;
		width: 100px;
		text-align: left;
	}
}

.date {
	position: absolute;
	font-size: 16px;
	right: 0;
	bottom: 10px;
	padding-right: 10px;
	color: var(--primary-text-color);
}

.submit {
	position: absolute;
	margin: auto;
	left: 50%;
	bottom: 50px;
	transform: rotate(180deg);
}


.background {
	position: absolute;
	left: 0;
	width: 100%;
	// height: 100%;
	z-index: 1;
	overflow: hidden;

}

</style>

<style lang='scss'>

.content {
	z-index: 2;
	p {

		a.external-link {
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
	}

	p.img-wrapper {
		width: 140%;
		left: -20%;
		position: relative;
	}

	h1 {
		// cursor: pointer;
		padding-bottom: 15px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.247);
	}

	h1:before {
		content: '#';
		position: absolute;
		left: -25px;
		font-weight: normal;
		color: var(--primary-text-color);
	}

}

// </style>
// <style lang='scss' scoped>

// .content-display {
// 	position: absolute;
// 	left: 250px;
// 	width: calc(100% - 250px);
// 	height: 100%;
// 	overflow: auto;
// }

// .content, .background {
// 	width: 60%;
// 	position: absolute;
// 	left: 20%;
// 	margin-top: 100px;
// 	white-space: pre-wrap;
// }
// .editor {
// 	height: 70%;
// 	overflow-x: auto;
// }
// .title {
// 	top: 50px;
// 	position: relative;
// 	width: 60%;
// 	margin: auto;
// 	text-align: center;
// 	text-transform: uppercase;
// 	font-weight: bold;
// 	font-size: 34px;
// 	color: white;

// 	padding-bottom: 40px;
// 	border-bottom: 1px solid rgb(185, 185, 185);
// }

// .date {
// 	position: absolute;
// 	font-size: 16px;
// 	right: 0;
// 	bottom: 10px;
// 	padding-right: 10px;
// 	color: var(--primary-text-color);
// }

// .background {
// 	position: absolute;
// 	left: 0;
// 	width: 100%;
// 	// height: 100%;
// 	z-index: 1;
// 	overflow: hidden;
// }

// .content {
// 	z-index: 2;
// 	color: white;

// 	p {
// 		a {
// 			text-decoration: underline;
// 			color: var(--primary-text-color);
// 		}

// 		img {
// 			position: relative;
// 			max-width: 100%;
// 			height: auto;
// 			margin: auto;
// 			display: block;
// 		}
// 	}

// 	p.img-wrapper {
// 		width: 140%;
// 		left: -20%;
// 		position: relative;
// 	}

// 	h1 {
// 		// cursor: pointer;
// 		padding-bottom: 15px;
// 		border-bottom: 1px solid rgba(255, 255, 255, 0.247);
// 	}

// 	h1:before {
// 		content: '#';
// 		position: absolute;
// 		left: -25px;
// 		font-weight: normal;
// 		color: var(--primary-text-color);
// 	}

// }

// </style>