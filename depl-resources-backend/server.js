const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const MongoQuery = require('./mongo');

app.use('/*', function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const dbName = 'depl-resources-db';
const url = 'mongodb://localhost:27017/' + dbName;

// static for now, but eventually /deployment will be in req.param
// req.param will be name of db
app.get('/api/data/deployment/get', function(req, res, next) {

  // const data = MongoQuery('get', 'depl-resources-db', 'resources');
  // res.send(data);

  MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);

    const collection = db.collection('resources');
    collection.find({}).toArray((err, doc) => {
      if (err) return console.log(err);
      res.json(doc);
      console.log('sent data');
    });

    db.close();
  });
});

function generateId(){
  return 'xxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  	// eslint-disable-next-line
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
	});
}

app.post('/api/insert', function(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    const title = req.body.title;
    const entry = req.body.entry;
    const url = req.body.url;
    const type = req.body.type;

    const collection = db.collection('resources');
    // something like this...
    collection.insert({
      id: generateId(), // don't need this.. should be done automatically with _id
      lastEdited: new Date(),
      type,
      title,
      url,
      entry
    }, (err, result) => {
      if (err) return err;
      console.log('post success');
      res.send(result)
    });
    db.close();
  })
});

app.post('/api/update', function(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    const id = req.body.id;
    const title = req.body.title;
    const entry = req.body.entry;
    const url = req.body.url;
    const type = req.body.type;

    const collection = db.collection('resources');
    console.log({id, type, title, url, entry})
    // something like this...
    collection.update({id}, {$set: {type, title, url, entry, lastEdited: new Date()}}, (err, result) => {
      if (err) return err;
      console.log('update success');
      res.send(result)
    });
  })
});

app.delete('/api/delete', function(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    const id = req.body.id;

    const collection = db.collection('resources');
    console.log({id})
    // something like this...
    collection.remove({id}, (err, result) => {
      if (err) return err;
      console.log('remove success');
      res.send(result)
    });
  })
});

app.listen(process.env.PORT || 3001);
