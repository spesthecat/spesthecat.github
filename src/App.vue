<template>
  <div id="app">
    <router-view id="main-view" />
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style lang="scss">

:root {
  --primary-text-color: #ddd;
  // --accent-text-color: #1f98b1;
  --accent-text-color: #1998DB;
  --secondary-text-color: rgb(92, 108, 255);
  --primary-bg-color: #171717;
  --secondary-bg-color: rgba(88,88,88,0.601);
  --tertiary-bg-color: rgba(255, 250, 240, 0.911);
}

* {
  margin: 0;	
}

html, body {
  height: 100%;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--primary-bg-color);
  color: var(--primary-text-color);
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#main-view {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-scrollbar: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

</style>
