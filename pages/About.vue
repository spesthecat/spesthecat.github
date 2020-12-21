<template>
  <div class="about">
    <div class="side-scroll">
      <div id="bar" />
    </div>

    <div class="content">
      <bio
        v-if="!loading"
        id="bio"
        class="lazy"
        :data="about.bio"
      />

      <lazy-hobbies
        v-if="!loading"
        id="hobbies"
        class="lazy bottom"
        :scrolled="scrolled"
        :data="about.hobbies"
      />

      <div v-if="false">
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

      <contact class="footer" />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      about: [],
      loading: true,
      scrolled: 0,
      els: {},
    };
  },
  mounted() {
    this.about = require('~/assets/about.json');
    this.loading = false;

    this.els.doc = document.documentElement;
    this.els.bar = document.getElementById('bar');

    setTimeout(() => {
      this.els.lazies = document.getElementsByClassName('lazy'); 
      document.getElementById('bio').style.opacity=1;

      this.handleLazyComponents();
      this.handleProgressBar();
    });

    window.addEventListener('scroll', this.onscroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onscroll);
  },
  methods: {
    handleLazyComponents() {
      for (let i=this.els.lazies?.length; i-- > 0;){
        if (this.scrolled > this.els.lazies[i].offsetTop + 50) { // if this thing is visible
          this.els.lazies[i].style='opacity: 1; transform: none;';
        }
      }
    },
    handleProgressBar() {
      let height = this.els.doc.scrollHeight - this.els.doc.clientHeight;
      let scrolled = (this.els.doc.scrollTop / height) * 100;

      this.els.bar.style.height=scrolled+'%';
    },
    async onscroll() {
      this.scrolled = this.els.doc.scrollTop + this.els.doc.clientHeight;

      this.handleProgressBar();

      this.handleLazyComponents();
    },
  },
};

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
