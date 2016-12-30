// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/testTodoApp', (err, db) => {
 if (err) {
  return console.log('unable to connect to db');
 }
  console.log('connected to Mongo-DB-Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58652e2c36ac203c8e06cae8')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //
  // console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Uli2'}).toArray().then((docs) => {
console.log(JSON.stringify(docs, undefined, 2));

  });

  // db.close();
});
