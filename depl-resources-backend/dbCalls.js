const dbCalls = {
  get: (collection) => {
    // console.log(collection.find());
    return collection.find().toArray();
  },

  insert: (collection) => {
    console.log('inserted');
    // collection.insert({
    //   _id: generateUUID(),
    //   lastEdited: moment().format(),
    //   title: 'Sample Entry'
    //   entry: 'this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.  this is sample entry text.'
    // });
  },

  delete: (collection) => {
    console.log('deleted');
  },

  edit: (collection, id) => {
    console.log('edited');
  }
};

module.exports = dbCalls;
