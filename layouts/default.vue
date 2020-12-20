<template>
  <Nuxt id='main-view'></Nuxt>
</template>

<style lang="scss">

:root {
  --primary-text-color: #ddd;
  --accent-text-color: #1998DB;
  --secondary-text-color: rgb(92, 108, 255);
  --primary-bg-color: #171717;
  --secondary-bg-color: rgba(88,88,88,0.601);
  --tertiary-bg-color: rgb(255, 250, 240);
  
  --white: white;
  --black: black;
}

* {
  margin: 0;	
}

// html, body {
//   height: 100%;
// }

#__nuxt {
  overflow-y: auto;
  overflow-x: hidden;
}

#__layout {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--primary-bg-color);
  color: var(--primary-text-color);
  position: relative;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

#main-view {
  position: relative;
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
