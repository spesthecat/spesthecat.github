const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
import config from './config.js';

firebase.initializeApp(config.firebase);

let db = firebase.firestore();

export default {

	async hasUpdate(scope, v) {
		try {
			let flag = await db.collection(scope).doc('_flag').get();
			return flag.version > v;
		} catch (e) {
			return false;
		}
	},

	async getCatalog(collection) {
		const catalog = await db.collection(collection).doc('_catalog').get();
		return catalog.data();
	},

	async getDocByID(coll, id) {
		let doc = await db.collection(coll).doc(id).get();
		return doc.data();
	},

	async getItemData(scope, id) {
		let coll = await db.collection(scope).doc(id).collection('data').get();
		return coll.data();
	},

	async authRequest(password) {
		await firebase.auth().signInWithEmailAndPassword(config.email, password);
	},

	async editDoc(coll, docId, data) {
		await this.newVersion(coll);
		return await db.collection(coll).doc(docId).update(data);
	},

	async createDoc(coll, data) {
		await this.newVersion(coll);
		return await db.collection(coll).add(data);
	},

	async deleteDoc(coll, id) {
		await this.newVersion(coll);
		await db.collection(coll).doc(id).delete();
	},

	async newVersion(coll) {
        await db.collection(coll).doc('_flag').update({ 
			version: firebase.firestore.FieldValue.increment(1)
		});
	},

	async logout() {
		firebase.auth().signOut().then(() => {
			return true;
		}).catch(err => {
			return err;
		})
	}

}
