<template>
	<div> 
		<div v-if="acceptPaths.includes(scope)">
			<sidebar :options="{ title: scope, deleteID }"/>

			<div v-if="pID" class='content-display'>
				<div class='title'> 
					{{ content.name }}
					<div class='date'> {{ content.timestamp }} </div>
					<div v-if="authenticated" @click='edit=true' class='edit-title'> <img src='https://image.flaticon.com/icons/png/512/84/84380.png' alt='edit'/> </div>
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
				:value="scope.content"
				v-show="edit" 
				class='editor' ref="markdownEditor"/>

				<div v-if="!edit" class='content' v-html="content.content"/>

				<backarrow @click.native="submit" class='submit' :disabled="true"/>
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
import VueSimplemde from 'vue-simplemde';

import { mapGetters } from 'vuex';

export default {
	name: 'project-blog',
	data() {
		return {
			content: {},
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
			this.$set(this.content, 'content', this.simplemde.markdown(this.simplemde.value()));
			api.editDoc(this.scope, this.pID, this.content);
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
		}
	},
	components: {
		sidebar,
		VueSimplemde,
		backarrow,
		notfound
	},
	watch: {
		async pID(n) {
			this.deleteConfirm = 3;
			if (n) {
				this.content = await api.getDocByID(this.scope, this.pID);
			}
		},
		async deleteConfirm() {
			if (this.deleteConfirm === 0) {
				this.deleteID = this.pID;
				this.content = new Object();
			}
		}
	},
	async mounted() {
		if (this.pID) {
			this.content = await api.getDocByID(this.scope, this.pID);
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

.editor, .content {
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

</style>