const moment = require('moment');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const doMongo = require('./dbCalls');

// because overkill
function generateUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  	// eslint-disable-next-line
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
	});
}

// wtf callback hell fuck
const data = undefined;
// depl-resources-db, resources
const MongoQuery = (doQuery) => {
  // console.log(data);
  return data;
}

function doQuery(type, dbName, collectionName) {
  console.log('shit')
  const url = 'mongodb://localhost:27017/' + dbName;

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    const collection = db.collection('resources');

    collection.find({}, (err, result) => {
      data = result;
    })
    db.close();
  });
}

module.exports = MongoQuery;
