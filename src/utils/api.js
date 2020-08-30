const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
import config from './config.js';

firebase.initializeApp(config.firebase);

let db = firebase.firestore();

export default {

	async hasUpdate(collection) {
		try {
			let flag = await db.colleciton(collection).doc('_flag').get();
			return flag.update;
		} catch (e) {
			return false;
		}
	},

	async getCatalog(collection) {
		const catalog = await db.collection(collection).doc('_catalog').get();
		await db.collection(collection).doc('_flag').update({ update: false });
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
		await db.collection(coll).doc('_flag').update({ update: true });
		return await db.collection(coll).doc(docId).update(data);
	},

	async createDoc(coll, data) {
        await db.collection(coll).doc('_flag').update({ update: true });
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
