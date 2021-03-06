const { rejects } = require('assert')
var portscanner = require('portscanner')
let fs = require('fs')
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
exports.getVideos = () =>{
  return new Promise(
    (resolve,reject)=>{
      fs.readdir('./download', function(err, items) {
        if(err)
          reject()
        else
          resolve(items)
      });  
    }
  )
}
exports.scanDevices = (ip) =>{
  return new Promise((resolve, reject)=>{
      portscanner.checkPortStatus(8080, ip, function(error, status) {
          // return status
          // Status is 'open' if currently in use or 'closed' if available
          resolve({status:status,ip:ip})
      })
  })
}
exports.saveVideo = (blob,fileName) => {
  var buf = new Buffer(blob, 'base64'); // decode
  fs.writeFile(`./download/${fileName}`, buf, function(err) {
    if(err) {
      console.log("err", err);
    } else {
      console.log("converted 100")
      // return res.json({'status': 'success'});
    }
  }); 
};

