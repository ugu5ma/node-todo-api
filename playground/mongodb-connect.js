// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'ui', age: 49};
// var {name}=  user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/testTodoApp', (err, db) => {
 if (err) {
  return console.log('unable to connect to db');
 }
  console.log('connected to Mongo-DB-Server');

  // db.collection('Todos').insertOne({
  //   text: 'DB entry number one',
  //   completed: false
  //
  //
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert data to todo', err);
  //         }
  //
  //         console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   text: 'DB entry number two',
  //   age: '9',
  //   location: 'ffm'
  //
  //
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert data to todo', err);
  //         }
  //
  //         console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  //

  db.close();
});
