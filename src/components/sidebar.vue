<template>
	<div id='sidebar'>
		<div class='title noselect'> {{ options.title }} </div>

		<div class='nav'>
			<ul class='cat-list'>
				<li class='cat' v-for="cat in catalog" :key="cat.name">
					{{ cat.name }}
					<ul class='item-list'>
						<li class='item' v-for="item in items[cat.name]" :key="item.id">
							<router-link class='item-link' :to="'/projects/' + item.id">
								{{ item.name }}
							</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</div>

		<backarrow id='goback' :link="'/'"/>
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
			items: {}
		}
	},
	async mounted() {
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
		
		this.items = items;
		this.catalog = catalogArray;
	}
}

</script>

<style scoped>

#sidebar {
	position: absolute;
	width: 250px;
	height: 100%;
	left: 0;
	background-color: var(--tertiary-bg-color);
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

.cat-list {
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
}

.cat::after {
	content: '';
	position: absolute;
	top: 1em;
	left: 4px;
	border: 1px solid rgb(0, 0, 0);
	height: calc(100% + 25px);
}

.update {
	display: none;
}

.item-list {
	padding: 0;
	list-style-type: none;
}

.item {
	margin-top: 20px;
	padding-left: 20px;
	font-size: 14px;
	position: relative;
	cursor: pointer;
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

.item-link {
	text-decoration: none;
	color: black;
}

#goback {
	position: absolute;
	bottom: 100px;
	left: calc(50% - 10px);
}

</style>