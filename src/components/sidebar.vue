<template>
	<div id='sidebar'>
		<div class='title'> {{ options.title }} </div>

		<div class='nav'>
			<ul class='cat-list'>
				<li class='cat' v-for="cat in catalog" :key="cat.name">
					{{ cat.name }}
					<ul class='item-list'>
						<li class='item' v-for="item in getItemsFromId(cat.items)" :key="item.id">
							adwads
							{{ item.name }}
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template> 

<script>

import api from '../utils/api.js';

export default {
	name: 'sidebar',
	props: ['options'],
	data() {
		return {
			catalog: []
		}
	},
	methods: {
		async getItemsFromId(IDs) {
			const items = [];
			for (let id of IDs) {
				let item = await api.getDocByID(this.options.title.toLowerCase(), id);
				items.push({ id, ...item });
			}
			return items;
		}
	},
	async mounted() {
		let catalog = await api.getCatalog(this.options.title.toLowerCase());
		const catalogArray = [];
		for (let cat of catalog.order) {
			catalogArray.push({
				name: cat, 
				items: catalog[cat] 
			});
		}
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
	background-color: var(--secondary-bg-color);
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
}

.cat-list {
	list-style-type: none;
}

.cat {
	margin: 50px 0;
}

.item-list {
	list-style-type: none;
}

/* .nav {
	height: 100%;
} */

</style>