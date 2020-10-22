<template>
  <div> 
    <div v-if="acceptPaths.includes(scope)">
      <file-viewer
      src='cac.json'
      @data="meta=$event"/>
      <file-viewer
      class='file'
      src='cac.html'
      @data="content=$event"/>

      <sidebar class='sidebar' :options="{ title: scope}"/>

      <div class='content-display'>
        <!-- <div class='title'> 
          {{ data.name }}
          <div class='date'> {{ data.timestamp }} </div>
        </div> -->

        <div class='header'>
          <div class='meta'>
            <div class='type'> {{ scope.slice(0, -1) }} </div>
            <div class='title'> {{ meta.title }} </div>
            <div class='updated'> Last Updated </div>
            <div class='date'> {{ meta.date }} </div>
          </div>

          <img :src="meta.image"/>
        </div>

        <div class='content'>
          <div @onload="showFooter=true" v-html="content"/>
          <contact v-if="showFooter" class='footer'/>	
        </div>
        <!-- <div ref='background' class='background'>
          <backgroundShapes :amount="50"/>
        </div> -->

      </div>

    </div>
    <not-found v-else/>
  </div>
</template>

<script>

import sidebar from '../components/sidebar.vue';
import NotFound from '../components/notfound.vue';
import FileViewer from '../components/fileviewer.vue';
import Contact from '../components/contact.vue';
// import backgroundShapes from '../components/backgroundShapes.vue';

// temporary import

export default {
  name: 'project-blog',
  data() {
    return {
      showFooter: false,
      meta: {},
      content: '',
      acceptPaths: ['projects', 'blogs']
    }
  },
  computed: {
    scope() {
      return this.$route.params.scope.toLowerCase();
    },
    contentHeight() {
      return this.$refs.content.clientHeight;
    }
  },
  components: {
    sidebar,
    NotFound,
    FileViewer,
    Contact,
    // backgroundShapes
  },
}

</script>

<style lang='scss' scoped>

.sidebar {
  z-index: 5;
}

.header {
  width: 100%;
  height: 30%;
  
  .meta {
    z-index: 3;
    width: 100%;
    height: 30%;
    position: absolute;
    background: radial-gradient(ellipse closest-side, rgba(15, 14, 22, 0.308), #100f13d2);
    padding: 50px 50px;
    box-sizing: border-box;

    color: white;
    font-family: Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;

    .type, .updated {
      // margin-bottom: 10px;
      font-weight: 700;
      // color: #7a7a8c;
      color: var(--primary-text-color);
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
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

}

.content-display {
  position: absolute;
  left: 250px;
  width: calc(100% - 250px);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.content, .background {
  width: 60%;
  position: absolute;
  left: 20%;
  margin-top: 100px;
  white-space: pre-wrap;
}

.background {
  position: absolute;
  left: 0;
  width: 100%;
  // height: 100%;
  z-index: 1;
  overflow: hidden;
}

.footer {
  z-index: 1;
  margin-top: 70px;
  // left: -30%;
  // width: 160%;
  position: absolute;
  left: -35%;
  right: -35%;
  overflow: hidden;
  height: 70px;
}

.content {
  &::v-deep {

    z-index: 2;
    color: white;
    
    p {

      a {
        text-decoration: underline;
        color: var(--primary-text-color);
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

    h1 {
      // cursor: pointer;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.247);
      &::before {
        content: '#';
        position: absolute;
        left: -25px;
        font-weight: normal;
        color: var(--primary-text-color);
      }
    }
  }

}

</style>