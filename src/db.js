const fs = require('fs');

function loadDb(filename) {
  let plaintextData;

  try {
    plaintextData = fs.readFileSync(filename, 'utf-8');
  } catch (err) {
    plaintextData = '[]';
  }

  return {
    filename, // same as filename: filename
    data: JSON.parse(plaintextData)
  };
}

function saveDb(db) {
  const plaintextData = JSON.stringify(db.data);

  fs.writeFileSync(db.filename, plaintextData, 'utf-8');
}

module.exports = {
  loadDb,
  saveDb
};
