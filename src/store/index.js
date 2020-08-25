import Vue from 'vue'
import Vuex from 'vuex'
import api from '../utils/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		auth: false,
		auth_status: ''
	},
	mutations: {
		deauth (state) {
			state.auth = false;
			state.auth_status = '';
		},
		auth_request (state) {
			state.auth_status = 'loading';
		},
		auth_success (state) {
			state.auth_status= 'success';
			state.auth = true;
		},
		auth_error (state, err) {
			state.auth_status = err;
		}
	},
	actions: {
		async login ({commit}, password) {
			commit('auth_request');

			try {
				await api.authRequest(password);
				commit('auth_success');
				return true;
			} catch (err) {
				commit('auth_error', err);
				return false;
			}
		},
		async logout ({commit}) {
			let resp = await api.logout();
			if (resp.success) {
				commit('deauth');
			} else {
				commit('auth_error', resp);
				return resp;
			}
		}
	},
	getters: {
		authenticated: state => {
			return state.auth;
		},
		authStatus: state => {
			return state.auth_status;
		}
	}
})
