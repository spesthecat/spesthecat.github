const firebase = require('firebase');
require('firebase/auth');
require('firebase/firestore');
import firebaseConfig from './config.js';
import authConfig from './authConfig.js';

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

async function getCatalog(collection) {
	const catalog = await db.collection(collection).doc('_catalog').get();
	return catalog.data();
}

async function getDocByID(coll, id) {
	let doc = await db.collection(coll).doc(id).get();
	return doc.data();
}

async function authRequest(password) {
	await firebase.auth().signInWithEmailAndPassword(authConfig.email, password);
}

async function logout() {
	firebase.auth().signOut().then(() => {
		return true;
	}).catch(err => {
		return err;
	})
}

export default {
	getCatalog,
	getDocByID,
	authRequest,
	logout
}
