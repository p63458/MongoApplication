//create a directory 

var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('C:\Users\haris\Desktop\MindMajix',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});