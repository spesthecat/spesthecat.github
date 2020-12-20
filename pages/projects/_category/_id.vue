<template>
  <div> 

    <lazy-sidebar id="sidebar"> </lazy-sidebar>

    <div class='project-container'>

      <div class="header">
        <!-- :style="{'background-image': `url(~assets/projects/${project.slug}.png)`}"> -->
        <div class="meta">
          <div class="type">
            {{ project.category }}
          </div>
          <div class="title">
            {{ project.title }}
          </div>
          <div class="updated">
            Last Updated
          </div>
          <div class="date">
            {{ project.updatedAt.slice(0, 10) }}
          </div>
        </div>

        <img 
        :src="require(`~/assets/projects/${project.slug}.png`)"/>
      </div>

      <nuxt-content 
      :document="project">
      </nuxt-content>
      
      <contact class="footer"> </contact>

    </div>

  </div>
</template>

<script>

export default {

  async asyncData({ $content, params, redirect }) {

    const project = await $content(
      'projects',
      params.category,
      params.id)
      .fetch()
      .catch(() => {
        return redirect('/projects/home');
      });

    return { project };
  },
};
</script>

<style lang='scss' scoped>

#sidebar {
  position: fixed;
  z-index: 5;
  width: 250px;
  height: 100%;
  left: 0;
}

.header {
  display: block;
  width: 100%;
  height: 30vh;
  
  .meta {
    z-index: 3;
    width: 100%;
    height: 100%;
    position: relative;
    background: radial-gradient(ellipse closest-side, rgba(15, 14, 22, 0.308), #100f13d2);
    padding: 50px 50px;
    box-sizing: border-box;

    color: white;
    font-family: Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;

    .type, .updated {
      // margin-bottom: 10px;
      font-weight: 700;
      // color: #7a7a8c;
      color: var(--accent-text-color);
    }

    .title {
      width: 100%;
      font-weight: bold;
      font-size: 34px;
      color: white;
      margin-bottom: 20px;
    }

  }

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: -100%;
  }

}

.project-container {
  position: relative;
  left: 250px;
  width: calc(100% - 250px);
}

.nuxt-content-container {
  min-height: 70vh;
}

.nuxt-content, .background {
  width: 60%;
  position: relative;
  left: 20%;
  margin-top: 100px;
  white-space: pre-wrap;
}

.background {
  left: 0;
  width: 100%;
  // height: 100%;
  z-index: 1;
  overflow: hidden;
}

.footer {
  z-index: 1;
  margin-top: 70px;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 70px;
  background-color: white;
}

</style>

<style lang='scss'>

.nuxt-content {

    z-index: 2;
    color: var(--primary-text-color);
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    width: 60%;
    position: relative;
    left: 20%;
    margin-top: 100px;
    white-space: pre-wrap;

    p {

      a {
        text-decoration: none;
        color: var(--accent-text-color);
      }

      img {
        position: relative;
        max-width: 100%;
        height: auto;
        margin: auto;
        display: block;
      }

      &.img-wrapper {
        width: 140%;
        left: -20%;
        position: relative;
      }

    }

    iframe {
      position: relative;
      height: 30vh;
      width: 100%;
      display: block;
    }

    pre {
      overflow-x: scroll;
    }

    h1, h2 {
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.247);
      a::before {
        content: '#';
        cursor: pointer;
        position: absolute;
        left: -25px;
        font-weight: normal;
        color: var(--accent-text-color);
      }
    }

}

</style>
