const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const MongoQuery = require('./mongo');

app.use('/*', function (req, res, next) {

  // var allowedOrigins = ['http://bewildered-eye.surge.sh'];
  // var origin = req.headers.origin;
  // if(allowedOrigins.indexOf(origin) > -1){
  //      res.setHeader('Access-Control-Allow-Origin', origin);
  // }
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
      id: generateId(),
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

app.post('/api/data/deployment/update', function(req, res, next) {
  const id = req.body.id;
  const title = req.body.title;
  const entry = req.body.entry;

  console.log({id, title, entry})
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('resources');
    // something like this...
    collection.update({_id: id}, {$set: {title: title, entry: entry}}, (err, result) => {
      if (err) return err;
      console.log('post success');
      res.send(result)
    });
  })
});

app.listen(process.env.PORT || 3001);
