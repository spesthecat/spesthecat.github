<template>
	<div> 
		<div v-if="acceptPaths.includes(scope)">
			<sidebar :options="{ title: scope, deleteID }"/>

			<div v-if="pID" class='content-display'>
				<div class='title'> 
					{{ data.name }}
					<div class='date'> {{ data.timestamp }} </div>
					<div v-if="authenticated" @click='edit=!edit' class='edit-title'> <img src='https://image.flaticon.com/icons/png/512/84/84380.png' alt='edit'/> </div>
					<div v-if="authenticated" @click="confirmDelete" class='delete'> 
						<img src='https://docs.qgis.org/2.14/en/_images/mActionDeleteSelected.png' alt='edit'/> 
						<div class='confirm' v-show="deleteConfirm === 2"> sure? </div>
						<div class='confirm' v-show="deleteConfirm === 1"> sure sure? </div>
					</div>
				</div>

				<vue-simplemde 
				:configs="{ 
					tabsize: 4,
					spellChecker: false
				}"
				:value="data.md"
				v-show="edit" 
				class='editor' ref="markdownEditor"/>

				<div v-if="!edit" ref='content' class='content' v-html="data.content"/>

				<backarrow v-if='edit' @click.native="submit" class='submit' :disabled="true"/>

				<div ref='background' class='background'>
					<backgroundShapes :amount="20" :time="25"/>
				</div>
			</div>
		</div>
		<notfound v-else/>
	</div>
</template>

<script>

import api from '../utils/api.js';
import sidebar from '../components/sidebar.vue';
import backarrow from '../components/backarrow.vue';
import notfound from '../components/notfound.vue';
import backgroundShapes from '../components/backgroundShapes.vue';
import VueSimplemde from 'vue-simplemde';

import { mapGetters } from 'vuex';

export default {
	name: 'project-blog',
	data() {
		return {
			data: {},
			edit: false,
			deleteConfirm: 3,
			deleteTimer: {},
			deleteID: '',
			acceptPaths: ['projects', 'blogs']
		}
	},
	methods: {
		confirmDelete() {
			clearTimeout(this.deleteTimer);
			this.deleteConfirm = this.deleteConfirm - 1;
			this.deleteTimer = setTimeout(() => {
				this.deleteConfirm = 3;
			}, 3000);
		},
		async submit() {
			this.edit = false;
			let v = this.simplemde.value()
			this.$set(this.data, 'content', this.simplemde.markdown(v));
			this.$set(this.data, 'md', v);
			setTimeout(() => { // https://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful
				// this.$refs.content.children.forEach(el => {
			// 		if (el.tagName === 'H1') {
			// 			let parent = el.parentNode;
			// 			let anchor = document.createElement('a');
			// 			anchor.href = `#${this.path}/${el.id}`
			// 			parent.replaceChild(anchor, el);
			// 			anchor.appendChild(el);
			// 		}
				// });
				this.$refs.content.getElementsByTagName('A').forEach(a => {
					a.className = 'external-link';
					a.target = '_blank';
				});
				this.$refs.content.getElementsByTagName('IMG').forEach(img => {
					img.parentNode.className = 'img-wrapper';
				});
				this.$set(this.data, 'content', this.$refs.content.innerHTML);
			}); 
			await api.editDoc(this.scope, this.pID, this.data);
		}
	},
	computed: {
		pID() {
			return this.$route.params.id;
		},
		scope() {
			return this.$route.params.scope.toLowerCase();
		},
		...mapGetters(['authenticated']),
		simplemde() {
			return this.$refs.markdownEditor.simplemde;
		},
		path() {
			return this.$route.path;
		},
		contentHeight() {
			return this.$refs.content.clientHeight;
		}
	},
	components: {
		sidebar,
		VueSimplemde,
		backarrow,
		notfound,
		backgroundShapes
	},
	watch: {
		async pID(n) {
			this.deleteConfirm = 3;
			if (n) {
				this.data = await api.getDocByID(this.scope, this.pID);
				setTimeout(() => {
					this.$refs.background.style.height = this.$refs.content.clientHeight+'px';
				}, 500);
			}
		},
		async deleteConfirm() {
			if (this.deleteConfirm === 0) {
				this.deleteID = this.pID;
				this.data = new Object();
			}
		}
	},
	async mounted() {
		if (this.pID) {
			this.data = await api.getDocByID(this.scope, this.pID);
			setTimeout(() => {
				this.$refs.background.style.height = this.$refs.content.clientHeight+'px';
			}, 500);
		}
	}
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

</style>