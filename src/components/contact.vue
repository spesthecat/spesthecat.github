<template>
	<div class='contacts'>
		<a href='https://github.com/spesthecat' target='_blank'>
			<img class='social' alt='github'
			src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
		</a>
		<a href='mailto:spesthecat@gmail.com' target='_blank'>
		<img id='email' class='social' alt='email'
			src='http://clipartmag.com/images/transparent-email-icon-26.png'/>
		</a>
	</div>
</template>

<script>

export default {
	name: 'contact',

}

</script>

<style scoped>

.contacts {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
}

.social {
	transition: transform 0.3s ease;
	opacity: 0.7;
	width: 40px;
	height: 40px;
	cursor: pointer;
}

.social:hover {
	transform: scale(1.2);
	opacity: 1;
}

</style>