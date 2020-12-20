<template>
  <div>
    <sidebar id="sidebar"> </sidebar>
  </div>
</template>

<script>
export default {
  mounted () {
    if (!this.$route.params.category && !this.$route.params.id) {
      this.home();
    }
  },
  methods: {
    home () {
      this.$router.replace('/projects/home');
    },
  }, 
};
</script>

<style>

#sidebar {
  position: absolute;
  z-index: 5;
  width: 250px;
  height: 100%;
  left: 0;
}

</style>