const firebase = require('firebase');
require('firebase/auth');
require('firebase/firestore');
import firebaseConfig from './config.js';

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

export default {
	getCatalog,
	getDocByID,
}
