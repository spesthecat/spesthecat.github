<template>
	<div id='sidebar'>
		<div class='title'> {{ options.title }} </div>

		<div class='nav'>
			<ul class='cat-list'>
				<li class='cat' v-for="cat in catalog" :key="cat">
					{{ cat.name }}
					<ul class='item-list'>
						<li class='item' v-for="item in getItemsInCat(cat.id)" :key="item.id">
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
		getItemsInCat(id) {
			api.getItemsInCat('page', this.options.title.toLowerCase(), id);
		}
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

</style>