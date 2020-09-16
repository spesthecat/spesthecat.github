<template>
	<div>
		<li v-for="i of amount" :key="i" 
		:style="{ 
			left: i*50/amount+(Math.floor(Math.random()*100)-50) + '%', 
			'animation-delay': Math.floor(Math.random()*time)+2 +'s',
			'animation-duration': time + 's',
			'animation-name': 'drift'+biasedGen(),
			transform: 'scale('+biasedGen()+')'
		}"
		:class="{
			square: i%3==0,
			circle: (i+1)%3==0,
			triangle: (i+2)%3==0
		}"
		/>
	</div>
</template>

<script>

export default {
	name: 'backgroundShapes',
	props: ['amount', 'time', 'height'],
	methods: {
		biasedGen() {
			let ub = Math.floor(Math.random()*100)+1;
			if (ub < 40) {
				return 1;
			}else if (ub < 60) {
				return 2;
			}else if (ub < 70) {
				return 3;
			}else if (ub < 80) {
				return 4;
			}else if (ub < 90) {
				return 5;
			}
			return 6;
		}
	}
}

</script>

<style lang='scss' scoped>

li {
	position: absolute;
	list-style: none;
	display: block;
	background-color: rgba(255, 255, 255, 0.15);
	bottom: -50%;
}

.square {
	position: absolute;
	height: 40px;
	width: 40px;
	animation: linear alternate infinite;
}

.circle {
	position: absolute;
	height: 80px;
	width: 80px;
	border-radius: 40px;
	animation: linear alternate infinite;
}

@keyframes drift1 {
	0% {
		top: -10%;
	}
	100% {
		-webkit-transform: rotate(600deg);
		transform: rotate(600deg);
		top: 110%;
	}
}

@keyframes drift2 {
	0% {
		top: -10%;
	}
	100% {
		-webkit-transform: rotate(-600deg);
		transform: rotate(-600deg);
		top: 100%;
	}
}

@keyframes drift3 {
	0% {
		top: -10%;
	}
	100% {
		-webkit-transform: rotate(450deg);
		transform: rotate(450deg);
		top: 100%;
	}
}

@keyframes drift4 {
	0% {
		top: -10%;
	}
	100% {
		-webkit-transform: rotate(1200deg);
		transform: rotate(1200deg);
		top: 100%;
	}
}

@keyframes drift5 {
	0% {
		top: -10%;
	}
	100% {
		-webkit-transform: rotate(300deg);
		transform: rotate(300deg);
		top: 100%;
	}
}

@keyframes drift6 {
	0% {
		top: -10%;
	}
	100% {
		-webkit-transform: rotate(-800deg);
		transform: rotate(-800deg);
		top: 100%;
	}
}
</style>