const firebase = require('firebase');
require('firebase/auth');
require('firebase/firestore');
import firebaseConfig from './config.js';
import authConfig from './authConfig.js';

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default {

	async getCatalog(collection) {
		const catalog = await db.collection(collection).doc('_catalog').get();
		return catalog.data();
	},

	async getDocByID(coll, id) {
		let doc = await db.collection(coll).doc(id).get();
		return doc.data();
	},

	async authRequest(password) {
		await firebase.auth().signInWithEmailAndPassword(authConfig.email, password);
	},

	async editDoc(coll, docId, data) {
		return await db.collection(coll).doc(docId).set(data);
	},

	async addToDoc(coll, docId, data) {
		return await db.collection(coll).doc(docId).set({ ...data, merge: true });
	},

	async createDoc(coll, data) {
		return await db.collection(coll).add(data);
	},

	async logout() {
		firebase.auth().signOut().then(() => {
			return true;
		}).catch(err => {
			return err;
		})
	}

}
