const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const moment = require('moment');

const dbName = 'depl-resources-db';
const url = 'mongodb://localhost:27017/' + dbName;

const command = process.argv[2];

// because overkill
function generateId(){
  return 'xxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  	// eslint-disable-next-line
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
	});
}
function run() {
  if (command === 'findAll') return findAll();
  if (command === 'findCustom') return findCustom();
  if (command === 'removeAll') return removeAll();
  if (command === 'insert') return insert();
  return console.log('enter a valid command, stupid')
}

run()

function insert() {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    const collection = db.collection('resources');

    collection.insert({
      id: generateId(),
      lastEdited: moment().format(),
      type: 'siteBuild',
      title: '<h1>advanced config entry</h1>',
      entry: 'this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.'
    });
    db.close();
  });
}

function findAll() {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    const collection = db.collection('resources');
    collection.find().toArray((err, data) => {
      console.log(data);
    });

    db.close();
  });
}

function findCustom() {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    const collection = db.collection('resources');
    collection.find({_id: 'f4fa0d73d4acfb1ace40'}).toArray((err, data) => {
      console.log(data);
    });

    db.close();
  });
}

function removeAll() {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    const collection = db.collection('resources');
    collection.remove({})

    db.close();
  });
}
