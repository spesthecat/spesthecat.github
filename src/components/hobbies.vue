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
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
}

.vert-line {
  position: absolute;
  height: 50%;
  width: 4px;
}

</style>