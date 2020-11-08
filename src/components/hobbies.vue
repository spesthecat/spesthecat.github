<template>
  <div>
    <div class='container'>

      <div
      class='title'>
        hobbies
      </div>


      <div
      v-if="loaded" 
      class="hobby-container">
      <!-- :style="{height: `${vertHeight}vh`}"> -->
      
        <div
        v-if="loaded" 
        class='vert-line'>
        <!-- :style="{height: `${vertHeight}vh`}"> -->
        </div>
        
        <div
        v-for="(item, index) in data"
        :key="index"
        class='item'
        :class="{right: index%2===1, left: index%2===0}">
        <!-- :style="{'grid-row': `${index+1} / span 2`}"> -->

          <div 
          class='bg' 
          :style="{'background-image': `url(./static/${item.name}.jpg)`}" 
          loading="lazy"/>

          <div class='stem'></div>

          <div class='text medium' v-html="item.desc"></div>

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
  justify-content: center;
}

.hobby-container {
  margin: 50px 0;
  position: relative;
  width: 75%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;
}

.item {
  position: relative;
  width: 40%;
  flex: 0 1 auto;
  margin: 20px 0;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  transition: all 1s ease;

  .bg {
    transition: inherit;
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .text {
    opacity: 0;
    transition: opacity 2s ease;
    position: relative;
    transition: inherit;
    width: 60%;
    font-size: 16px !important;
    margin: 1em 0;
  }

  &.reveal {
    .bg {
      width: 35%;
    }

    .text {
      opacity: 1;
    }
  }
}

// .hobby-container {
//   top: 50px;
//   margin: 50px 0;
//   position: absolute;
//   width: 75%;
//   display: grid;
//   // grid-auto-rows: 5vh;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 20% 20%;
//   justify-items: center;
//   // align-items: center;
// }

// .item {
//   width: 100%;
//   height: 100%;
//   border-radius: 6px;
//   background-color: var(--secondary-bg-color);
//   position: relative;
//   top: 0;
//   transition: all 0.7s ease;
//   display: flex;
//   flex-flow: row nowrap;
//   align-items: center;

//   .bg {
//     transition: inherit;
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     background-size: cover;
//     background-position: center;
//   }

//   .text {
//     opacity: 0;
//     transition: opacity 3s ease;
//     position: absolute;
//     transition: inherit;
//     width: 59%;
//     // margin: 0 10px;
//     font-size: 16px !important;
//   }

//   &.reveal {
//     height: 180%;
//     top: -40%;

//     .bg {
//       width: 35%;
//     }

//     .text {
//       opacity: 1;
//     }
//   }
// }

.stem {
  background-color: var(--tertiary-bg-color);
  position: absolute;
  top: calc(50% - 2px);
  height: 4px;
  width: 20%;
  border-radius: 2px;
}

.left {
  // grid-column: 1 / 1;
  margin-bottom: 10%;

  .bg {
    left: 0;
  }

  .stem {
    right: -22%;
  }

  .text {
    right: 3%;
    margin-left: auto;
  }
}

.right {
  // grid-column: 2 / 2;
  margin-top: 10%;

  .bg {
    right: 0;
  }

  .stem {
    left: -22%;
  }

  .text {
    left: 3%;
  }

}

.vert-line {
  position: absolute;
  left: calc(50% - 3px);
  // top: -5%;
  width: 6px;
  height: 100%;
  border-radius: 4px;
  background-color: var(--tertiary-bg-color);
}

</style>