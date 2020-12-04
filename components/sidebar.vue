<template>
	<div id='sidebar' :class="{'slide-left': !nav}">

		<div class='title noselect'> 
			<nuxt-link class='link' :to="'/'+options.title.toLowerCase()"> {{ options.title }} </nuxt-link>
		</div>

		<div class='nav'>

			<div class='actual-nav'>
				<ul v-if="!(loading)" class='list'>
					<li class='cat' v-for="cat of options.catalog" :key="cat.name">
						{{ cat.name }}
						<ul class='inner-item'>
							<li @click.prevent="nav=false" 
							class='noselect' :class="{current: (id === item), item: !(id === item)}"
							v-for="item of cat.items" :key="item">
								<nuxt-link class='item-link' :to="`/${scope}/${item}`">
									<div class='clickable'> {{ item }} </div>
								</nuxt-link>
							</li>
						</ul>
					</li>
				</ul>

				<ul v-else class='list'>
					<li class='cat' v-for="cat in placeholder" :key="cat.name">
						<span class='placeholder-outer'> {{ cat.name }} </span>
						<ul class='list'>
							<li class='item add' v-for="item in cat.items" :key="item">
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

import backarrow from '../components/backarrow.vue';

export default {
  name: 'Sidebar',
  props: ['options'],
  components: {
    backarrow,
  },
  data() {
    return {
      catalog: [],
      placeholder: [
        {name: 'aaaaaaaa', items: ['aaaaa', 'a'.repeat(20)]},
        {name: 'a'.repeat(10), items: ['a'.repeat(15), 'a'.repeat(13), 'a'.repeat(14)]},
        {name: 'a'.repeat(7), items: ['aaaaaaaaaa']},
        {name: 'a'.repeat(15), items: ['a'.repeat(7)]}
      ],
      loading: true,
      nav: true,
    }
  },
  computed: {
    currCatalog() {
      return this.options.title + 'catalog';
    },
    currItems() {
      return this.options.title + 'items';
    },
    scope() {
      return this.options.title.toLowerCase();
    },
    id() {
      return this.$route.params.id;
    },
  },
  async mounted() {
    // load catalog here

    this.loading = false;
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
	color: var(--primary-bg-color);
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
	font-weight: bold;
	font-size: 24px;
	padding-bottom: 30px;
	box-shadow: 0 2px var(--primary-bg-color);
	text-transform: capitalize;

	.link {
		text-decoration: none;
		color: var(--secondary-text-color);
	}
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

.cat:not(.add)::after {
	content: '';
	position: absolute;
	top: 1em;
	left: 5px;
	border: 1px solid var(--primary-bg-color);
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

.item, .current {
	margin-top: 20px;
	padding-right: 25px;
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
	background-color: var(--primary-bg-color);
	left: 5px;
	top: 8px;
	position: absolute;
	transition: all 0.3s ease;
}

.item:not(.add):hover::before {
	transition: all 0.3s ease;
	left: -15px;
	width: 30px;
}

.item:hover {
	transform: translateX(20px);
	opacity: 1;
}

.current {
	transform: translateX(20px);
	opacity: 1;
}

.current::before {
	content: '';
	width: 30px;
	left: -15px;
	top: 8px;
	position: absolute;
	height: 2px;
	background-color: var(--primary-bg-color);
}

.item-link {
	text-decoration: none;
	color: black;
}

// .clickable {
// 	position: absolute;
// 	left: 25px;
// }

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

.add:hover {
	transform: none;
}

.add {
	border: none;
}

@media screen and (max-width: 500px) {
	#sidebar {
		width: 100%;
		transition: transform 0.5s ease;
	}

	.slide-left {
		transform: translateX(-100%);
	}

	.list {
		margin-left: 50px;
	}
}

</style>