var express = require ('express');
var bodyParser = require ('body-parser');


var {mongoose} = require ('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc);
  }, (e)   => {
    res.status(400).send(e);
  });
  // console.log(req.body);
});


app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
     res.send({todos});
   }, (e) => {
     res.status(400).send(e);
   })
});

app.listen(3000, () => {
 console.log('Started on Port 3000');

});

module.exports={app};

// var Todo = mongoose.model('Todo', {
//     text: {
//       type: String,
//       required: true,
//       minlength: 1,
//       trim: true
//     },
//     completed: {
//       type: Boolean,
//       default: false
//           },
//     completedAt: {
//       type: Number,
//       default: null
//     }
//
// });

// var newTodo = new Todo({
//   text: 'rrttzz'
// });

// var newTodo = new Todo({
//   text: 'Uli Special',
//   completed: true,
//   completedAt: 10
// });

// newTodo.save().then((doc) => {
//    console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });


//
//
// var user = new User({
//  email: 'a.b@c.com'
// });
//
// user.save().then((doc) => {
//    console.log('Saved User', doc);
// }, (e) => {
//   console.log('Unable to save User')
// });
