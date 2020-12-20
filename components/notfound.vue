<template>
	<div class='not-found'>
		<div class='main-text'>
			404 lul
			<div class='sub-text'>
				the page you are looking for does not exist, click here to return to the home page
			</div>
			<div class='back'>
				<back-arrow :link="'/'"/>
			</div> 
		</div>
	</div>
</template>

<script>

import BackArrow from './backarrow.vue';

export default {
  name: 'Notfound',
  components: {
    BackArrow,
  },
};

</script>

<style scoped>
	.not-found {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.main-text {
		color: var(--accent-text-color);
		font-weight: bold;
		font-size: 100px;
		position: relative;
		margin: auto;
		width: 500px;
		top: 20%;
		text-align: center;
	}

	.sub-text {
		font-size: 20px;
		font-weight: normal;
		color: var(--primary-text-color);
	}

	.back {
		transform: scale(2);
		margin: auto;
		width: 0;
		top: 50px;
		position: relative;
	}
</style>