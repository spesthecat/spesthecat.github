<template>
    <vue-markdown :source="text"/>
</template>

<script>
import axios from 'axios'
import VueMarkdown from 'vue-markdown';

export default {
  name: 'file-viewer',
  props: ["src"],
  components: {
    VueMarkdown,
  },
  data() {
    return {
      text: "",
    }
  },
  mounted()
  {
    axios.get(this.src).then(response => {
      this.text = response.data;
    });
  }
}
</script>
