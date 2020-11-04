<template>
  <div class="about">

    <div class="side-scroll">
      <div class="bar-container">
        <div id="bar" />
      </div>
    </div>

    <div class="content">
      <bio
        v-if="!loading"
        id="bio"
        class="lazy"
        :data="about.bio"
      />

      <hobbies
        v-if="!loading"
        id="hobbies"
        class="lazy bottom"
        :data="about.hobbies"
      />

      <experience
        v-if="!loading"
        id="experience"
        class="lazy bottom"
        :data="about.experience"
      />

      <education
        v-if="!loading"
        id="education"
        class="lazy bottom"
        :data="about.education"
      />
      
      <achievements
        v-if="!loading"
        id="achievements"
        class="lazy bottom"
        :data="about.achievements"
      />
      
      <skills
        v-if="!loading"
        id="skills"
        class="lazy bottom"
        :data="about.skills"
      />

    </div>
  </div>
</template>

<script>

const about = require('../static/about.json');
import Bio from '../components/bio.vue';
import Hobbies from '../components/hobbies.vue';
import Education from '../components/education.vue';
import Experience from '../components/experience.vue';
import Achievements from '../components/achievements.vue';
import Skills from '../components/skills.vue';

export default {
  name: 'About',
  components: {
    Bio,
    Hobbies,
    Education,
    Experience,
    Achievements,
    Skills,
  },
  data() {
    return {
      about: [],
      lazies: [],
      loading: true,
    }
  },
  methods: {
    wait(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(ms);
        }, ms )
      });
    },
    handleLazyComponents(about) {
      for (let i=this.lazies.length; i-- > 0;){
        if (about.scrollTop + about.clientHeight > this.lazies[i].offset + 50) { // if this thing is visible
          document.getElementById(this.lazies[i].id).style="opacity: 1; transform: none;";
        }
      }
    },
    handleProgressBar(about) {
      let content = document.getElementsByClassName('content')[0];
      let bar = document.getElementsByClassName('side-scroll')[0];
      let height = about.scrollHeight - about.clientHeight;
      let scrolled = (about.scrollTop / height) * 100;
      let barEl = document.getElementById('bar');

      if (this.extended) {
        barEl.style.height=scrolled+'%';
      }else {
        // makes bar go straight to progress point
        clearTimeout(this.scrollTime);
        this.scrollTime = setTimeout(() => {
          barEl.style.height=scrolled+'%';
        }, 1500);

        // is there a better way to do this? 
      }
      
      // handle side scroll sliding
      if (scrolled > 0 && content.style.left!=='15%'){
        content.style.left='15%';
        bar.style.left='0';
        setTimeout(() => {
          this.extended = true;
        }, 1500);
      } else if (scrolled === 0) {
        setTimeout(() => {
          content.style.left='10%';
          bar.style.left='-15%';
        }, 500);
        
        setTimeout(() => {
          this.extended = false;
        }, 1501);
      }
    },
    async onscroll() {
      let aboutEl = document.getElementsByClassName('about')[0];

      this.handleProgressBar(aboutEl);

      this.handleLazyComponents(aboutEl);
    },
  },
  mounted() {
    this.about = about;
    this.loading = false;
    let aboutEl = document.getElementsByClassName('about')[0];

    setTimeout(() => {
      let lazyEls = document.getElementsByClassName('lazy');
      document.getElementById('bio').style.opacity=1;
      this.lazies=[];
      lazyEls.forEach((el) => {
        console.log(el.offsetTop);
        this.lazies.push({offset: el.offsetTop, id: el.id});
        // todo add categories to progress bar accordingly
      });

      this.handleLazyComponents(aboutEl);
      this.handleProgressBar(aboutEl);
    });

    aboutEl.addEventListener('scroll', this.onscroll);
  },
  destroyed() {
    (document.getElementsByClassName('about')[0]).removeEventListener('scroll', this.onscroll);
  },
}

</script>

<style lang='scss' scoped>

#bio, #hobbies, #education, #experience, #achievements, #skills {
  position: relative;
  flex: 0 0 auto;
  margin-bottom: 5vh;
}

#bio {
  flex: 0 0 100vh;
  transition: opacity 1s ease;
}

.side-scroll {
	top: 5%;
	width: 15%;
	height: 90%;
	left: -15%;
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
		background: var(--accent-text-color);
		height: 0;
		width: 100%;
		transition: height 0.5s ease;
	}
}

.content {
	width: 80%;
	left: 10%;
	position: relative;
	transition: left 2s ease;
  display: flex;
  flex-flow: column nowrap;

  &::v-deep {

    .title {
      color: var(--accent-text-color);
      font-weight: bold;
      font-size: 40px;
    }

    .medium {
      font-size: 20px;
      font-family: Georgia, Cambria, "Times New Roman", Times, serif;
      // letter-spacing: 0.63px;
      letter-spacing: 0.03em;
      line-height: 1.5em;
      overflow-wrap: break-word;
      word-break: break-word;
      padding-bottom: 1.2em;
      // margin-top: 10px;
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
}

.bottom {
	// padding-top: 15vh;
	// margin-top: 15vh;
  transform: translateY(-15vh);
  transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
	// transition: opacity 1.5s cubic-bezier(0.165, 0.84, 0.44, 1), padding-top 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

</style>
