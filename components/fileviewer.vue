<template>
  <div/>
</template>
<script>
import axios from 'axios';
// import VueMarkdown from 'vue-markdown';

export default {
  name: 'FileViewer',
  props: ['src'],
  data() {
    return {
      data: '',
    };
  },
  methods: {
    fetchFile(src) {
      axios.get(src).then(response => {
        this.$emit('data', response.data);
        this.data = response.data;
        // document.getElementsByClassName('file')[0].innerHTML = this.text;
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.fetchFile(this.src);
    }, 0);
  },
  watch: {
    src() {
      this.fetchFile(this.src);
    },
  },
};
</script>
