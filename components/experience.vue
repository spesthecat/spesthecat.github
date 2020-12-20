<template>
  <div class="container">
    <div class="title">
      experience
    </div>


    <div class="items">
      <div class="vert-line" />

      <div
        v-for="(item, ind) in data"
        :key="ind"
        class="item"
      >
        <img
          class="logo"
          :src="item.image" 
          loading="lazy"
        >
      </div>
    </div>

    {{ data }}
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: [
    'data',
  ],
};
</script>

<style lang='scss' scoped>

.title {
  font-size: 28px !important;
  text-align: center;
}

.items {
  display: flex;
  flex-flow: column nowrap;
  position: relative;
}

.vert-line {
  position: absolute;
  left: calc(50% - 3px);
  width: 6px;
  height: 100%;
  border-radius: 4px;
  background-color: var(--tertiary-bg-color);
}

.logo {
  height: 40px;
}

</style>