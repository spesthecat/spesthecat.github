<template>
  <div>
    <div class="site-wrapper">
      <div class="rain" />
      <Menu id="menu-nav" />
      <Hero id="hero" />
    </div>

    <Contact
      id="contact"
      class="footer"
    />
  </div>
</template>

<script>

import Menu from '../components/navlinks.vue';
import Hero from '../components/hero.vue';
import Contact from '../components/contact.vue';

export default {
  name: 'Landing',
  components: {
    Hero,
    Menu,
    Contact,
  },
  methods: {
    makeItRain() {
      var increment = 0;
      var drops = "";

      while (increment < 51) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (130 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + 
          increment*2 + '%; bottom: ' + 
          (randoFiver + randoFiver - 1 + 100) + 
          '%; animation-delay: 0.' + randoHundo + 
          's; animation-duration: 2.' + randoHundo + 
          's;"><div class="stem" style="animation-delay: 0.' + 
          randoHundo + 's; animation-duration: 2.' + randoHundo + 
          's;"></div><div class="splat" style="animation-delay: 0.' + 
          randoHundo + 's; animation-duration: 2.' + randoHundo + 's;"></div></div>';
      }

      document.getElementsByClassName('rain')[0].innerHTML += drops.trim();
    }
  },
  mounted() {
    this.makeItRain();
  }
}
</script>

<style>

.site-wrapper {
	min-height: 100%;
	position: relative;
}

.footer, .site-wrapper:after {
	height: 8%;
	overflow: hidden;
}

.footer {
	z-index: 2;
	background: white;
	position: relative;
}

#menu-nav {
	z-index: 2;
	position: relative;
	top: 15px;
	right: 30px;
}

#hero {
	position: absolute;
	width: 100%;
}

.rain {
	position: relative;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
}

.drop {
	position: absolute;
	bottom: 100%;
	width: 15px;
	height: 120px;
	pointer-events: none;
	animation: drop 0.5s linear infinite;
}

.stem {
  width: 2px;
  height: 60%;
  margin-left: 7px;
  opacity: 20%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
  animation: stem 0.5s linear infinite;
}

@keyframes drop {
	0% {
		transform: translateY(0vh);
	}
	75% {
		transform: translateY(100vh);
	}
	100% {
		transform: translateY(100vh);
	}
}

.splat {
	width: 15px;
	height: 10px;
	border-top: 2px dotted rgba(255, 255, 255, 0.5);
	border-radius: 50%;
	opacity: 1;
	transform: scale(0);
	animation: splat 0.5s linear infinite;
}

@keyframes stem {
  0% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes splat {
	0% {
		opacity: 1;
		transform: scale(0);
	}
	80% {
		opacity: 1;
		transform: scale(0);
	}
	90% {
		opacity: 0.5;
		transform: scale(1);
	}
	100% {
		opacity: 0;
		transform: scale(1.5);
	}
}

</style>