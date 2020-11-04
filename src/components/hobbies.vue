<template>
  <div>
    <div class='container'>
      <div 
        class='vert-line'
        :style="{height: `${vertHeight}vh`}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hobbies',
  props: [
    'data',
  ],
  data() {
    return {
      cardHeight: 10,
      vertHeight: 0,
    }
  },
  mounted() {
    this.vertHeight = this.cardHeight * this.data.length;
  },
}
</script>

<style scoped>

.container {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.vert-line {
  width: 6px;
  border-radius: 4px;
  background-color: var(--tertiary-bg-color);
}

</style>