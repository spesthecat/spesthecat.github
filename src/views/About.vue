<template>
  <div class="about">
    <div class="side-scroll">
      <div class="bar-container">
        <div id="bar" />
      </div>
    </div>

    <div class="content">
      <div
        id="bio"
        class="lazy"
      >
        <p class="title">
          bio
        </p>
        <p
          v-for="para of bio"
          :key="para"
          class="medium"
        >
          {{ para }}
        </p>
        <div class="scroll-down">
          <!-- add jump to the below element with nuxt -->
          <backarrow :disabled="true" /> 
        </div>
      </div>
      <div
        id="education"
        class="lazy"
      >
        <p class="title">
          education
        </p>
        <p
          v-for="para of bio"
          :key="para"
          class="medium"
        >
          {{ para }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import backarrow from '../components/backarrow.vue';

export default {
  name: 'About',
  components: {
    backarrow
  },
  data() {
    return {
      bio: [],
    }
  },
  computed: {
    ...mapGetters(['authenticated'])
  },
  methods: {
    wait(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(ms);
        }, ms )
      });
    },
    async onscroll() {
      let content = document.getElementsByClassName('content')[0];
      let bar = document.getElementsByClassName('side-scroll')[0];

      // progress bar

      let height = content.scrollHeight - content.clientHeight;
      let scrolled = (content.scrollTop / height) * 100;
      if (this.extended) {
        document.getElementById('bar').style.height=scrolled+'%';
      }else {
        // makes bar go straight to progress point
        clearTimeout(this.scrollTime);
        this.scrollTime = setTimeout(() => {
          document.getElementById('bar').style.height=scrolled+'%';
        }, 1500);

        // is there a better way to do this? 
      }

      // lazy load effect & category filling
      for (let i=this.lazies.length; i-- > 0;){
        if (content.scrollTop + content.clientHeight > this.lazies[i].offset) { // if this thing is visible
          document.getElementById(this.lazies[i].id).style="opacity: 1; padding-top: 0";
        }
      }
      // content.scrollTop + content.clientHeight > el.offsetTop

      // handle side scroll sliding

      if (scrolled > 0 && content.style.left!=='20%'){
        content.style.left='20%';
        bar.style.left='0';
        setTimeout(() => {
          this.extended = true;
        }, 1500);
      } else if (scrolled === 0) {
        setTimeout(() => {
          content.style.left='12.5%';
          bar.style.left='-20%';
        }, 500);
        setTimeout(() => {

          this.extended = false;
        }, 1501);
      }
    }
  },
  async mounted() {
    let bio = 'yes'; // TODO add this
    let lazyEls = document.getElementsByClassName('lazy');

    this.bio = bio.paragraphs;
    // setTimeout(() => {
    document.getElementById('bio').style.opacity=1;
    // })
    this.lazies=[];
    lazyEls.forEach((el) => {
      this.lazies.push({offset: el.offsetTop, id: el.id});
      // todo add categories to progress bar accordingly
    });
		
    (document.getElementsByClassName('content')[0]).addEventListener('scroll', this.onscroll);
  },
  destroyed() {
    (document.getElementsByClassName('content')[0]).removeEventListener('scroll', this.onscroll);
  }
}

</script>

<style lang='scss' scoped>

.about {
	/* width: 100%; */
	height: 100%;
}

.side-scroll {
	top: 5%;
	width: 20%;
	height: 90%;
	left: -20%;
	// background-color: green;
	position: fixed;
	transition: left 2s ease, opacity 2s ease;
}

.bar-container {
	margin: auto;
	height: 100%;
	width: 10px;
	border-radius: 10px;
	border: 1px solid rgba(196, 196, 196, 0.212);

	#bar {
		border-radius: 10px;
		background: var(--primary-text-color);
		height: 0;
		width: 100%;
		transition: height 0.5s ease;
	}
}

.content {
	overflow-y: auto;
	height: 100%;
	width: 75%;
	left: 12.5%;
	position: absolute;
	color: white;
	transition: left 2s ease;


	.title {
		text-align: center;
		width: 100%;
		padding: 60px 0;
		color: var(--primary-text-color);
		font-weight: bold;
		font-size: 40px;
	}

	.medium {
		font-size: 25px;
		font-family: Georgia, Cambria, "Times New Roman", Times, serif;
		letter-spacing: 0.63px;
		line-height: 40px;
		overflow-wrap: break-word;
		word-break: break-word;
		margin-top: 40px;
	}

	#bio {
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden;

		.scroll-down {
			// width: 40px;
			transform: rotate(-90deg);
			position: absolute;
			left: 50%;
			bottom: 60px;
		}
	}
	
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
	// background-color: green;

}

.lazy {
	opacity: 0;
	// margin-top: 10%;
	padding-top: 30%;
	transition: opacity 1.5s cubic-bezier(0.165, 0.84, 0.44, 1), padding-top 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

</style>
