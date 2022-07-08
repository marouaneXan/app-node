const fs = require("fs");
const path = require("path");

//Create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err => {
//     if (err) throw err;
//     console.log('folder created successfully');
// });

//Create and write into the file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello world!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to...");
//append file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "I love nodejs",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

//Read File
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
//     if (err) throw err;
//     console.log(data);
// });

//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloW.txt"),
  (err) => {
    if (err) throw err;
    console.log('File renamed...');
  }
);
