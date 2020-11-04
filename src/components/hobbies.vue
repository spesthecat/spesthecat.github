<template>
  <div>
    <div class='container'>

      <div
      class='title'>
        hobbies
      </div>

      <div
      v-if="loaded" 
      class='vert-line'
      :style="{height: `${vertHeight}vh`}">
      </div>

      <div
      v-if="loaded" 
      class="hobby-container"
      :style="{height: `${vertHeight}vh`}">
        <div
        v-for="(item, index) in data"
        :key="index"
        class='item'
        :class="{right: index%2===1}"
        :style="{'grid-row': `${index+1} / span 2`}">

          <div 
          class='bg' 
          :style="{'background-image': `url(./static/${item.name}.jpg)`}" 
          loading="lazy"/>

          <div>
            {{ item.name }}
          </div>

        </div>
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
      loaded: false,
      cardHeight: 30,
      vertHeight: 0,
    }
  },
  mounted() {
    this.vertHeight = this.cardHeight * this.data.length;
    this.loaded = true;
  },
}
</script>

<style lang="scss" scoped>

.container {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.hobby-container {
  top: 50px;
  margin: 50px 0;
  position: absolute;
  width: 75%;
  display: grid;
  // grid-auto-rows: 5vh;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10% 20%;
  justify-items: center;
  // align-items: center;
}

.item {
  width: 100%;
  border-radius: 6px;
  grid-column: 1 /  1;

  .bg {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-color: var(--secondary-bg-color);
    
    // filter: blur(8px);
    // -webkit-filter: blur(8px);
  }

  &.right {
    grid-column: 2 / 2;
  }

}

.vert-line {
  margin: 50px 0;
  width: 6px;
  border-radius: 4px;
  background-color: var(--tertiary-bg-color);
}

</style>