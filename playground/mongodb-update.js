// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/testTodoApp', (err, db) => {
 if (err) {
  return console.log('unable to connect to db');
 }
  console.log('connected to Mongo-DB-Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5866355bb8aaf18868917ca8')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then ((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58663f8fb8aaf18868917cab')
  }, {
    $set: {
      Name: 'Igor'
    },
    $inc: {
       age: 1
    }
  }, {
    returnOriginal: false
  }).then ((result) => {
    console.log(result);
  });



  // db.close();
});
