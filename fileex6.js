//update a existing file
var fs = require('fs');

fs.appendFile('input.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});