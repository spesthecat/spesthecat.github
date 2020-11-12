<template>
  <div class="about">

    <div class="side-scroll">
      <div id="bar"></div>
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
        :scrolled="scrolled"
        :data="about.hobbies"
      />

        <div v-if='false'>
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

      <contact class='footer'>
      </contact>

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
import Contact from '../components/contact.vue';

export default {
  name: 'About',
  components: {
    Bio,
    Hobbies,
    Education,
    Experience,
    Achievements,
    Skills,
    Contact,
  },
  data() {
    return {
      about: [],
      loading: true,
      scrolled: 0,
      els: {},
    }
  },
  methods: {
    handleLazyComponents() {
      for (let i=this.els.lazies?.length; i-- > 0;){
        if (this.scrolled > this.els.lazies[i].offsetTop + 50) { // if this thing is visible
          this.els.lazies[i].style="opacity: 1; transform: none;";
        }
      }
    },
    handleProgressBar() {
      let height = this.els.about.scrollHeight - this.els.about.clientHeight;
      let scrolled = (this.els.about.scrollTop / height) * 100;

      this.els.bar.style.height=scrolled+'%';
    },
    async onscroll() {
      this.scrolled = this.els.about.scrollTop + this.els.about.clientHeight;

      this.handleProgressBar();

      this.handleLazyComponents();
    },
  },
  mounted() {
    this.about = about;
    this.loading = false;
    this.els.about = document.getElementsByClassName('about')[0];
    this.els.bar = document.getElementById('bar');
    this.els.content = document.getElementsByClassName('content')[0];

    setTimeout(() => {
      this.els.lazies = document.getElementsByClassName('lazy'); 
      document.getElementById('bio').style.opacity=1;

      this.handleLazyComponents();
      this.handleProgressBar();
    });

    this.els.about.addEventListener('scroll', this.onscroll);
  },
  destroyed() {
    this.els.about.removeEventListener('scroll', this.onscroll);
  },
}

</script>

<style lang='scss' scoped>

#bio, #hobbies, #education, #experience, #achievements, #skills {
  flex: 0 0 auto;
  margin-bottom: 5vh;
}

#bio {
  flex: 0 0 100vh;
  transition: opacity 1s ease;
}

.side-scroll {
  z-index: 5;
	width: 6px;
	height: 100%;
	position: fixed;
}

#bar {
  border-radius: 4px;
  background: var(--accent-text-color);
  height: 0;
  width: 100%;
  transition: height 0.5s ease 0.3s;
}

.content {
	width: 80%;
	left: 10%;
	position: relative;
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
  transform: translateY(-15vh);
  transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.footer {
  margin-top: 70px;
  left: -35%;
  width: 170%;
  position: relative;
  overflow: hidden;
  height: 70px;
  background-color: white;
}

</style>
