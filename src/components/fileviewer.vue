<template>
  <!-- <vue-markdown :source="text"/> -->
  <div/>
</template>

<script>
import axios from 'axios'
// import VueMarkdown from 'vue-markdown';

export default {
  name: 'file-viewer',
  props: ["src"],
  // components: {
  //   VueMarkdown,
  // },
  data() {
    return {
      text: "",
    }
  },
  mounted()
  {
    setTimeout(() => {
      axios.get(this.src).then(response => {
        this.text = response.data;
        document.getElementsByClassName('file')[0].innerHTML = this.text;
      });
    }, 0)
  }
}
</script>
