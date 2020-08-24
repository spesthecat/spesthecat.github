<template>
	<div id='sidebar'>
		<div class='title noselect'> {{ options.title }} </div>

		<div class='nav'>

			<div class='actual-nav'>
				<ul v-if="!(loading)" class='list'>
					<li class='cat' v-for="cat in catalog" :key="cat.name">
						{{ cat.name }}
						<ul class='inner-item'>
							<li class='item' v-for="item in items[cat.name]" :key="item.id">
								<router-link class='item-link' :to="'/projects/' + item.id">
									{{ item.name }}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>

				<ul v-else class='list'>
					<li class='cat' v-for="cat in placeholder" :key="cat.name">
						<span class='placeholder-outer'> {{ cat.name }} </span>
						<ul class='list'>
							<li class='item' v-for="item in cat.items" :key="item">
								<span class='placeholder-inner'> {{ item }} </span>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<div class='back'>
				<backarrow id='goback' :link="'/'"/>
			</div>
		</div>
	</div>
</template> 

<script>

import api from '../utils/api.js';
import backarrow from '../components/backarrow.vue';

export default {
	name: 'sidebar',
	props: ['options'],
	components: {
		backarrow
	},
	data() {
		return {
			catalog: [],
			items: {},
			placeholder: [
				{name: 'aaaaaaaa', items: ['aaaaa', 'a'.repeat(20)]},
				{name: 'a'.repeat(10), items: ['a'.repeat(15), 'a'.repeat(13), 'a'.repeat(14)]},
				{name: 'a'.repeat(7), items: ['aaaaaaaaaa']},
				{name: 'a'.repeat(15), items: ['a'.repeat(7)]}
			],
			loading: true
		}
	},
	computed: {
		currCatalog() {
			return this.options.title + 'catalog';
		},
		currItems() {
			return this.options.title + 'items';
		}
	},
	async mounted() {
		if (localStorage[this.currCatalog]) {
			this.items = JSON.parse(localStorage[this.currItems]);
			let catalog = JSON.parse(localStorage[this.currCatalog]);
			this.catalog = catalog.data;
		}
		else {
			let catalog = await api.getCatalog(this.options.title.toLowerCase());
			const catalogArray = [];
			const items = {};
			for (let cat of catalog.order) {
				catalogArray.push({
					name: cat, 
					items: catalog[cat] 
				});

				let itemsName = [];
				for (let id of catalog[cat]) {
					let item = await api.getDocByID(this.options.title.toLowerCase(), id);
					itemsName.push({ id, ...item });
				}
				items[cat] = itemsName;
			}

			this.catalog = catalogArray;
			this.items = items;
			localStorage[this.currItems] = JSON.stringify(items);
			localStorage[this.currCatalog] = JSON.stringify({data: catalogArray});
		}

		this.loading = false;
	},
	watch: {
		catalog: {
			handler() {
				localStorage[this.currCatalog] = JSON.stringify({data: this.catalog});
			},
			deep: true
		},
		items: {
			handler() {
				localStorage[this.currItems] = JSON.stringify(this.items);
			},
			deep: true
		}
	}
}

</script>

<style lang='scss' scoped>

#sidebar {
	position: absolute;
	width: 250px;
	height: 100%;
	left: 0;
	background-color: var(--tertiary-bg-color);
}

.nav {
	display: grid;
	grid-template-rows: auto 100px;
	height: calc(100% - 120px);
	overflow: hidden;
}

.actual-nav {
	grid-row: 1;
	overflow: auto;
	overflow-x: hidden;
	scrollbar-width: thin;
	scrollbar-color: #606060 #393939;
	border-radius: 10px;
}

::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	background: #393939;
	border-radius: 10px;
}

::-webkit-scrollbar-thumb {
	background: #606060;
	border-radius: 10px;
}

.back {
	grid-row: 2;
}

#goback {
	position: relative;
	left: calc(50% - 10px);
	top: 40%;
}

.title {
	width: 80%;
	margin: 30px auto;
	text-align: center;
	color: var(--secondary-text-color);
	font-weight: bold;
	font-size: 24px;
	padding-bottom: 30px;
	box-shadow: 0 2px var(--primary-bg-color);
	cursor: default;
}

.list {
	list-style-type: none;
	margin-left: 20px;
	padding: 0;
	cursor: default;
}

.cat {
	margin: 40px 0;
	font-size: 20px;
	text-align: left;
	position: relative;
	padding: 0;
	font-weight: bold;
	z-index: 2;
}

.cat::after {
	content: '';
	position: absolute;
	top: 1em;
	left: 5px;
	border: 1px solid rgb(0, 0, 0);
	height: calc(100% + 25px);
	opacity: 0.8;
}

.update {
	display: none;
}

.inner-item {
	padding: 0;
	list-style-type: none;
}

.item {
	margin-top: 20px;
	padding-left: 30px;
	font-size: 14px;
	position: relative;
	cursor: pointer;
	opacity: 0.7;
	transition: transform 0.3s ease;
}

.item::before {
	content: '';
	width: 15px;
	height: 2px;
	background-color: rgb(44, 42, 42);
	left: 5px;
	top: 8px;
	position: absolute;
}

.item:hover {
	transform: translateX(20px);
	opacity: 1;
}

.item-link {
	text-decoration: none;
	color: black;
}

.placeholder-outer {
	color: rgb(170, 170, 170);
	background-color: rgb(170, 170, 170);
	border-radius: 10px;
	position: relative;
	left: 4px;
}

.placeholder-inner {
	color: rgb(212, 212, 212);
	background-color: rgb(212, 212, 212);
	border-radius: 10px;
}

</style>