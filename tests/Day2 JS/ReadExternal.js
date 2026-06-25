const fs = require('node:fs');
fs.readFile('E:/JavaScriptTutorial/Day2/Products.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});