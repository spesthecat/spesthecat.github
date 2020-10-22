<script>
import axios from 'axios'
// import VueMarkdown from 'vue-markdown';

export default {
  name: 'file-viewer',
  props: ["src"],
  mounted()
  {
      axios.get(this.src).then(response => {
        this.$emit('data', response.data);
        // document.getElementsByClassName('file')[0].innerHTML = this.text;
      });
  }
}
</script>
