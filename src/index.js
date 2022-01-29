const path = require('path');
const express = require('express');
const { loadDb } = require('./db');

const app = express();

// Constants
const port = process.env.PORT || 8000; // process.env.PORT is set by heroku
const dbFilename = 'database.json';
const templatesDir = path.join(__dirname, 'templates');

// App settings
app.set('view engine', 'ejs');
app.set('views', templatesDir);

// Routes
app.get('/', (req, res) => {
  const db = loadDb(dbFilename);

  return res.render('index.ejs', {
    entries: db.data
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
