const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "/public", "index.html"),
  //       (err, content) => {
  //         if(err) throw err
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === "/api/users") {
  //     const users = [
  //         {
  //             id:1,
  //             name:'marouane',
  //             age:22
  //         },
  //         {
  //             id:2,
  //             name:'ahmad',
  //             age:22
  //         },
  //     ]
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }



  // Build file path
  let filePath=path.join(__dirname,'/public',req.url==='/'?'index.html':req.url)
  //extension
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
