import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';


const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan('dev'));

const db = [];

app.post('/todos', (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text
  };

  db.push(todo);

  res.status(201).json(todo);
});

app.get('/todos/:id', (req, res) => {
  const todo = db.find((todo) => todo.id === +req.params.id);
  res.status(203).json({ data: todo });
});

app.get('/todos', (req, res) => {
  res.json(db);
});

app.listen(8000, () => {
  console.log('Server listening on localhost:8000');
});