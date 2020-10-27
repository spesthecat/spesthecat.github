<template>
  <div id="admin">
    <div class="login wrapper">
      <input
        ref="input"
        @keyup.enter="submit"
        class="password"
        v-model="password"
        type="password"
      >
      <div
        class="error"
        v-show="error"
      >
        {{ error }}
      </div>
      <backarrow
        @click.native="submit"
        :link="'/admin'"
        class="submit"
      />
    </div>
  </div>
</template>

<script>
import backarrow from '../components/backarrow.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Admin',
  data() {
    return {
      password: ''
    }
  },
  components: {
    backarrow
  },
  computed: {
    ...mapGetters(['authenticated', 'authStatus']),
    error() {
      if (this.authStatus.code === 'auth/wrong-password') {
        return 'Incorrect Password';
      }
      if (this.authStatus.code === 'auth/too-many-requests') {
        return 'Try again later';
      }
      return ''
    }
  },
  methods: {
    ...mapActions(['login', 'logout']),
    async submit() {
      let resp = await this.$store.dispatch('login', this.password);
      if (resp) {
        this.$router.replace('/');
      }
    }
  },
  mounted() {
    this.$refs.input.focus();
  }
}

</script>

<style scoped>

.wrapper {
	position: relative;
	margin: auto;
	width: 200px;
	top: 50%;
	height: 40px;
}

.login .error {
	color: rgb(243, 60, 60);
	margin: auto;
	text-align: center;
}

.password {
	padding: 10px;
	width: 100%;
	height: 80%;
	transition: box-shadow 0.3s ease;
	border-radius: 14px;
}

.password:focus {
	box-shadow: 5px 5px 12px #4392c0, -5px -5px 12px #67e0ff;
}

.submit {
	position: relative;
	width: 50px;
	margin: auto;
	top: 50%;
	transform: rotate(180deg);
}

</style>