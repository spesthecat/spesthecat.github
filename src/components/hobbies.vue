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
        :class="{right: index%2===1, left: index%2===0}"
        :style="{'grid-row': `${index+1} / span 2`}">

          <div 
          class='bg' 
          :style="{'background-image': `url(./static/${item.name}.jpg)`}" 
          loading="lazy"/>

          <div class='stem'></div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Hobbies',
  props: [
    'scrolled',
    'data',
  ],
  data() {
    return {
      loaded: false,
      cardHeight: 20,
      vertHeight: 0,
      offset: 400,
      els: {},
    }
  },
  methods: {
    handleLazy() {
      for (let i=this.els.lazies.length;  i-- > 0; ) {
        if (this.scrolled - this.els.hobby.offsetTop > this.els.lazies[i].offsetTop + this.offset) {
          this.els.lazies[i].classList.add('reveal');
        }
      }
    },
  },
  mounted() {
    this.vertHeight = this.cardHeight * this.data.length;
    this.loaded = true;
    this.els.hobby = document.getElementById('hobbies');

    setTimeout(() => {
      this.els.lazies = this.els.hobby.getElementsByClassName('item');
      this.handleLazy();
    });
  },
  watch: {
    scrolled() {
      this.handleLazy();
    }
  }
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
  grid-gap: 20% 20%;
  justify-items: center;
  // align-items: center;
}

.item {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: var(--secondary-bg-color);
  position: relative;
  top: 0;
  transition: all 0.7s ease;

  .bg {
    transition: inherit;
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  &.reveal {
    height: 180%;
    top: -40%;

    .bg {
      width: 35%;
    }
  }
}

.stem {
  background-color: var(--tertiary-bg-color);
  position: absolute;
  top: calc(50% - 2px);
  height: 4px;
  width: 20%;
  border-radius: 2px;
}

.left {
  grid-column: 1 / 1;

  .bg {
    left: 0;
  }

  .stem {
    right: -22%;
  }
}

.right {
  grid-column: 2 / 2;

  .bg {
    right: 0;
  }

  .stem {
    left: -22%;
  }
}

.vert-line {
  margin: 50px 0;
  width: 6px;
  border-radius: 4px;
  background-color: var(--tertiary-bg-color);
}

</style>