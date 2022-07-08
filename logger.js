const EventEmitter = require("events");
const uuid = require("uuid");
console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    //Call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}
// module.exports=Logger;
const Logger = require('./logger')
const Logger1=new Logger()
Logger1.on('message',(data)=>console.log('Called Listener',data))
Logger1.log('Hello world')
