const path = require('path');
const express = require('express');

const app = express();
const port = 8000;

const templatesDir = path.join(__dirname, 'templates');

app.set('view engine', 'ejs');
app.set('views', templatesDir);

app.get('/', (req, res) => {
  return res.render('index.ejs', {
    entries: [
      { text: 'test entry abc' },
      { text: 'test entry def' },
      { text: 'xyz' }
    ]
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
