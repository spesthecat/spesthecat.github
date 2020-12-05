<script>
export default {
  // basically 404 for /projects -- need to add more friendly redirect notice
  async asyncData({ redirect }) {
    redirect('/projects/home');
  }
}
</script>