<template>
  <div>
    <div class='container'>
      <div class='vert-line'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hobbies',
  props: [
    'data',
  ],
}
</script>

<style scoped>

.container {
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
}

.vert-line {
  height: 50%;
  width: 4px;
  background-color: white;
}

</style>