//rename the file of existing file
var fs = require('fs');

fs.rename('input.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});