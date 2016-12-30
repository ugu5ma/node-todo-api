// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/testTodoApp', (err, db) => {
 if (err) {
  return console.log('unable to connect to db');
 }
  console.log('connected to Mongo-DB-Server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });



  // deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });



  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Uli'}).then((result) => {
  //   console.log(result);

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID("1821fe4e89807e1c7c002c39")
    }).then((results) => {
      console.log(JSON.stringify(results, undefined, 2));




  });



  // db.close();
});
