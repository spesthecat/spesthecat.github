<template>
  <div>
    <p class="title">
      about
    </p>

    <p
      v-for="para of data"
      :key="para[0]"
      class="medium"
      v-html="para"
    />

    <div class="scroll-down">
      <!-- add jump to the below element with nuxt -->
      <back-arrow :disabled="true" /> 
    </div>
  </div>
</template>

<script>

import BackArrow from '../components/backarrow.vue';

export default {
  name: 'Bio',
  props: [
    'data',
  ],
  components: {
    BackArrow,
  }
}
</script>

<style lang='scss' scoped>

.scroll-down {
  transform: rotate(-90deg);
  height: 40px;
  width: 40px;
  margin: 50px auto;
}

.medium {
  &::v-deep {
    .underline {
      padding-bottom: 2px;
      border-bottom: 2px solid var(--primary-text-color);
    }
  }
}

</style>
