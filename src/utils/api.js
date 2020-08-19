const MongoClient = require('mongodb').MongoClient;
import uri from './uri.js';
const client = new MongoClient(uri, { useNewUrlParser: true });

async function getItemsInCat(database, collection, id) {
	await client.connect();

	const db = client.db(database);
	const coll = db.collection(collection);

	// get catalog of all categories and items they contain
	const catalog = await coll.findOne({ _catalog: { $exists: true } });

	// query items based on catalog and return only title
	let itemsCursor = coll.find(
		{ _id: { $in: catalog[id].items } },
		{ projection: { title: 1 } }
	);
	
	const items = [];
	await itemsCursor.forEach(items.push);

	return items;
}

async function getCats(database, collection) {
	await client.connect();

	const db = client.db(database);
	const coll = db.collection(collection);
	const catalog = await coll.findOne({_catalog: {$exists: true}});

	return catalog;
}

export default {
	getItemsInCat,
	getCats
}