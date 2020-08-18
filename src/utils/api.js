const MongoClient = require('mongodb').MongoClient;
import uri from './uri.js';
const client = new MongoClient(uri, { useNewUrlParser: true });

async function retrieve() {
	client.connect(err => {
		
	})
}

export default {
	retrieve,
}