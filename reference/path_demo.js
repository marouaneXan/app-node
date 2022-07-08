const path=require('path')
//Base file name
// console.log(path.basename(__filename))---->path_demo.js

//Directory name
// console.log(path.dirname(__filename))---->C:\Users\youcode\Desktop\simple-app-with-node\reference

//File extension
// console.log(path.extname(__filename))-------->.js

//Create path object 
// console.log(path.parse(__filename))------->
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\youcode\\Desktop\\simple-app-with-node\\reference',
//     base: 'path_demo.js',
//     ext: '.js',
//     name: 'path_demo'
//  }

//concate path
// console.log(path.join(__dirname,'test','hello.html'))---------->C:\Users\youcode\Desktop\simple-app-with-node\reference\test\hello.html
