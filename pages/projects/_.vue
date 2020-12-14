<template>
  <div>
    Redirecting...
  </div>
</template>
<script>
export default {
  // basically 404 for /projects -- need to add more friendly redirect notice
  mounted() {
    console.log('hi');
    this.$router.push('projects/home');
  },
  middleware({ redirect }) {
    return redirect('projects/home');
  }
}
</script>