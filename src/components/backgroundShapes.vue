<template>
	<div>
		<li v-for="i of amount" :key="i" 
		:style="{ 
			left: i*200/amount-50+'%', 
			'animation-delay': Math.floor(Math.random()*time)+2+'s',
			'animation-duration': time+'s',
			transform: 'scale('+biasedGen()+')',
		}"
		:class="{
			square: i%3==0,
			circle: (i+1)%3==0,
			triangle: (i+2)%3==0,
			one: 1==$options.b,
			two: 2==$options.b,
			three: 3==$options.b,
			four: 4==$options.b,
			five: 5==$options.b,
			six: 6==$options.b
		}"
		/>
	</div>
</template>

<script>

export default {
	name: 'backgroundShapes',
	props: ['amount'],
	data() {
		return {
			time: 0
		}
	},
	methods: {
		biasedGen() {
			let ub = Math.floor(Math.random()*100)+1;
			if (ub < 40) {
				this.$options.b = 1;
				return 1;
			}else if (ub < 60) {
				this.$options.b = 2;
				return 2;
			}else if (ub < 70) {
				this.$options.b = 3;
				return 3;
			}else if (ub < 80) {
				this.$options.b = 4;
				return 4;
			}else if (ub < 90) {
				this.$options.b = 5;
				return 5;
			}
			this.b = 6;
			return 6;
		}
	},
	mounted() {
		setTimeout(() => {
			this.time = Math.floor(document.getElementsByClassName('content')[0].clientHeight/100);
		}, 1000);
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
	animation: linear alternate infinite;
}

.one {
	animation-name: drift1;
}

.two {
	animation-name: drift2;
}

.three {
	animation-name: drift3;
}

.four {
	animation-name: drift4;
}

.five {
	animation-name: drift5;
}

.six {
	animation-name: drift6;
}

.square {
	position: absolute;
	height: 40px;
	width: 40px;
}

.circle {
	position: absolute;
	height: 80px;
	width: 80px;
	border-radius: 40px;
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