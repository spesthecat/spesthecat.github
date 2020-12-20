<template>
  <div id="background-shapes-container">
    <!-- this whole system sucks, should rework it to just generate new shapes and delete old ones -->

    <!-- ok so basically run loop in mounted and append li elements to this div with infinite animation -->
  </div>
</template>

<script>

export default {
  name: 'BackgroundShapes',
  props: ['amount'],
  data() {
    return {
      time: 0,
    };
  },
  async mounted() {
    function wait(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(ms);
        }, ms );
      });
    }  

    await wait(1500);

    this.time = Math.floor(document.getElementsByClassName('content')[0].clientHeight/35); 
    // going directly to page has shorter time (assumed inaccurate) than nav from side
    // console.log(this.time);

    let container = document.getElementById('background-shapes-container');
    let c = 0;
    while (c < this.amount) {
      await wait(Math.random()*(4000)+3000);
      let li = document.createElement('li');

      switch(Math.floor(Math.random()*3)) {
      case 0:
        li.className = 'square';
        break;
      case 1:
        li.className = 'circle';
        break;
      case 2:
        li.className = 'triangle';
        break;
      }

      li.style.transform = `scale(${this.biasedGen()})`;

      if(Math.random() >= 0.5) {
        li.classList.add('drift');
        li.style.animationName='drift';
      }else {
        li.classList.add('drift-reverse');
        li.style.animationName='drift2';
      }

      if(Math.random() >= 0.5) {
        li.style.right = Math.random()*30-5+'%';
      }else {
        li.style.left = Math.random()*30-5+'%';
      }

      li.style.animationDuration = Math.random()*(this.time*2)+this.time+'s';

      container.appendChild(li);
      c++;
    }
  },
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
    },
  },
	
};

</script>

<style>

#background-shapes-container li {
	position: absolute;
	list-style: none;
	display: block;
	border: 1px solid rgba(255, 255, 255, 0.15);
	top: -50%;
	animation: linear normal infinite;
}

.drift {
	animation-name: drift;
}

.drift-reverse {
	animation-name: drift2;
}

.square {
	height: 40px;
	width: 40px;
}

.circle {
	height: 80px;
	width: 80px;
	border-radius: 40px;
}

/* // .triangle {
//     width: 0;
//     height: 0;
// 	border-top: none;
//     border-left: 40px solid transparent;
//     border-right: 40px solid transparent;
//     border-bottom: 80px solid  rgba(255, 255, 255, 0.15);
// 	box-shadow: 2px 2px white;
// } */

.triangle {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	border: none;
}

.triangle:after {
	content: '';
	position: absolute;
	width: 40px;
    height: 40px;
	top: 2px;
    background: var(--primary-bg-color);
	transform: scale(0.8);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

@keyframes drift {
	0% {
		top: -25%;
	}
	100% {
		-webkit-transform: rotate(600deg);
		transform: rotate(600deg);
		top: 125%;
	}
}

@keyframes drift2 {
	0% {
		top: -25%;
	}
	100% {
		-webkit-transform: rotate(-600deg);
		transform: rotate(-600deg);
		top: 125%;
	}
}

</style>