const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const moment = require('moment');

const dbName = 'depl-resources-db';
const url = 'mongodb://localhost:27017/' + dbName;

// because overkill
function generateUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  	// eslint-disable-next-line
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
	});
}

const data = {
  _id: generateUUID(),
  lastEdited: moment().format(),
  title: 'Sample Entry',
  entry: 'this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.'
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  const collection = db.collection('resources');

  collection.insert({
    _id: generateUUID(),
    lastEdited: moment().format(),
    title: 'Sample Entry',
    entry: 'this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.'
  })

  db.close();
});
