<template>
  <div>
    <nuxt-link
      v-if="!disabled"
      class="link"
      :to="link"
    >
      <div class="arrow-left" />
    </nuxt-link>
    <div
      v-if="disabled"
      class="arrow-left"
    />
  </div>
</template>

<script>

export default {
  name: 'BackArrow',
  props: {
    link: {
      required: false,
    },
    disabled: {
      required: false,
      default: false,
    },
  },
};

</script>

<style scoped>

.arrow-left {
  width: 20px;
  height: 20px;
  border-left: 2px var(--accent-text-color) solid;
  border-bottom: 2px var(--accent-text-color) solid;
  transform: rotate(45deg);
  cursor: pointer;
  transition: transform 1s ease;
  opacity: 0.7;
}

.link:hover .arrow-left, .arrow-left:hover {
  opacity: 1;
  transform: rotate(45deg) translate(-10px, 10px);
}

</style>
