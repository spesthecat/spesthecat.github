<template>
	<div id='sidebar'>
		<div class='title'> {{ options.title }} </div>

		<div class='nav'>
			<ul class='cat-list'>
				<li class='cat' v-for="cat in catalog" :key="cat.name">
					{{ cat.name }}
					<ul class='item-list'>
						<li class='item' v-for="item in items[cat.name]" :key="item.id">
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
				console.log(cat, id, item);
			}
			items[cat.name] = itemsName;
			console.log(cat, itemsName);
		}
		
		console.log(items);
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

.update {
	display: none;
}

.item-list {
	list-style-type: none;
}

/* .nav {
	height: 100%;
} */

</style>