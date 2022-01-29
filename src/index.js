const path = require('path');
const express = require('express');
const { loadDb, saveDb } = require('./db');

const app = express();

// Constants
const port = process.env.PORT || 8000; // process.env.PORT is set by heroku
const dbFilename = 'database.json';
const templatesDir = path.join(__dirname, 'templates');

// App settings
app.set('view engine', 'ejs');
app.set('views', templatesDir);

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  const db = loadDb(dbFilename);

  return res.render('index.ejs', {
    entries: db.data
  });
});

app.post('/form', (req, res) => {
  const db = loadDb(dbFilename);

  db.data.unshift({
    text: req.body.text
  });

  saveDb(db);

  return res.redirect('/');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
