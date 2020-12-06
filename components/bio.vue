<template>
  <div>
    <div class='content'>
      <div class='title container'>
        <p>
          bio
        </p>
      </div>

      <div class='paragraphs'>
        <p
          v-for="para of data"
          :key="para.slice(3)"
          class="medium"
          v-html="para"
        />
      </div>

      <div 
      class='scroll-down container'
      @click="next">
        <div>
          <!-- add jump to the below element with nuxt -->
          <back-arrow :disabled="true" /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Bio',
  props: [
    'data',
  ],
  methods: {
    next() {
      document.getElementById('hobbies').scrollIntoView({
        behavior: 'smooth',
      });
    },
  },
}
</script>

<style lang='scss' scoped>

.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;

  .container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-self: center;
    flex: 0 1 200px;
  }
}

.scroll-down {
  transform: rotate(-90deg);
}

.medium {
  &::v-deep {
    .underline {
      padding-bottom: 2px;
      border-bottom: 2px solid var(--primary-text-color);
    }
    
    .link {
      text-decoration: underline;
      color: var(--accent-text-color);
    }

    .external::after {
      content: '';
      display: inline-block;
      position: relative;
      left: 2px;
      height: 0.7em;
      width: 0.7em;
      background-image: url(~assets/external-link.svg);
      filter: invert(54%) sepia(64%) saturate(3933%) hue-rotate(172deg) brightness(96%) contrast(81%);
    }
  }
}

</style>
