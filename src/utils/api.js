const MongoClient = require('mongodb').MongoClient;
import uri from './uri.js';
const client = new MongoClient(uri, { useNewUrlParser: true });

async function getItemsInCat(database, collection, id) {
	await client.connect();

	const db = client.db(database);
	const coll = db.collection(collection);

	// get catalog of all categories and items they contain
	const catalog = await coll.findOne({ _catalog: { $exists: true } });

	// query items based on catalog and return only _id and title
	let itemsCursor = coll.find(
		{ _id: { $in: catalog[id].items } },
		{ projection: { _id: 1, title: 1 } }
	);
	
	const items = [];
	await itemsCursor.forEach(items.push);

	return items;
}

async function getCatalog(database, collection) {
	await client.connect();

	return await client.db(database)
	.collection(collection)
	.findOne({_catalog: {$exists: true}});
}

export default {
	getItemsInCat,
	getCatalog
}