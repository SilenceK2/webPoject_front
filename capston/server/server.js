const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let id = 1;
const todoList = [{
}];
app.get('/',function (req,res){
  res.send('Hello World');
});

app.get('/api/todo', (req,res) => {
  res.json(todoList);
})

app.get('/api/todo/lastId', (req, res) => {
  const lastId = todoList.length > 0 ? todoList[todoList.length - 1].id : 0;
  res.json({ lastId });
});


app.post('/api/todo', (req,res) => {
  const {text,done} = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send('success');
});

app.listen(8081,() =>{
  console.log('server start!!')
});