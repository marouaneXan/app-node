const url = require('url')

const myUrl=new URL('http://site.com/hello.html?id=100&status=active')

//serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

//host url domaine name    
console.log(myUrl.host)

//Path name
console.log(myUrl.pathname)

//serialized query
console.log(myUrl.search)

//Params object
console.log(myUrl.searchParams)

//Add param
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)