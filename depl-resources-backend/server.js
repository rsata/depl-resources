const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const request = require('request');

const MongoQuery = require('./mongo');

app.use('/*', function (req, res, next) {

  // Website you wish to allow to connect
  // Change for prod
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

// DB info
const dbName = 'depl-resources-db';
const url = 'mongodb://localhost:27017/' + dbName;

// Helper
function generateId(){
  return 'xxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  	// eslint-disable-next-line
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
	});
}

// Endpoints
app.get('/api/data/deployment/get', function(req, res, next) {
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

app.get('/api/data/nav', function(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);

    const collection = db.collection('nav');
    collection.find({}).toArray((err, doc) => {
      if (err) return console.log(err);
      res.json(doc);
      console.log('sent nav data');
    });

    db.close();
  });
});

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
      res.send(result);
    });
    db.close();
  });
});

app.post('/api/insert/insert-nav', function(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    const title = req.body.title;
    const entry = req.body.entry;
    const url = req.body.url;
    const type = req.body.type;

    const collection = db.collection('nav');
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
      res.send(result);
    });
    db.close();
  });
});

app.post('/api/update', function(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    const id = req.body.id;
    const title = req.body.title;
    const entry = req.body.entry;
    const url = req.body.url;
    const type = req.body.type;

    const collection = db.collection('resources');
    console.log({id, type, title, url, entry});
    // something like this...
    collection.update({id}, {$set: {type, title, url, entry, lastEdited: new Date()}}, (err, result) => {
      if (err) return err;
      console.log('update success');
      res.send(result);
    });
  });
});

app.post('/api/updateNavSidebar', function(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    const id = req.body.id;
    const title = req.body.title;
    const url = req.body.url;
    const type = req.body.type;
    const entry = req.body.entry;

    const collection = db.collection('nav');
    console.log({id, type, title, url, entry});
    // something like this...
    collection.update({id}, {$set: {type, title, url, entry, lastEdited: new Date()}}, (err, result) => {
      if (err) return err;
      console.log('update success');
      res.send(result);
    });
  });
});


app.post('/api/jira', function(req, res, next) {
  const username = req.body.username;
  const query = encodeURIComponent('project = DEP AND resolution = unresolved AND assignee = ' + username);

  request.get('http://jira.rubicon.com/rest/api/2/search?jql='+ query +'&maxResults=100', (err, response, body) => {
    if (!err && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.delete('/api/delete', function(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    const id = req.body.id;

    const collection = db.collection('resources');
    console.log({id});
    collection.remove({id}, (err, result) => {
      if (err) return err;
      console.log('remove success');
      res.send(result);
    });
  });
});

app.delete('/api/nav/delete', function(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    const id = req.body.id;

    const collection = db.collection('nav');
    console.log({id});
    collection.remove({id}, (err, result) => {
      if (err) return err;
      console.log('remove success');
      res.send(result);
    });
  });
});

app.listen(process.env.PORT || 3001);
