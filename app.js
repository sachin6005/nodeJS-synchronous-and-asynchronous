const fs = require("fs");

fs.readFile('/home/sachin/Documents/CGCS phase2/NodeJS/nodeJS-synchronous-and-asynchronous/app.txt', 'utf-8', (err,data)=>{
      console.log(data)

const writeTxt = `${data}.\nCreated on ${Date.now()}`
fs.writeFileSync('/home/sachin/Documents/CGCS phase2/NodeJS/nodeJS-synchronous-and-asynchronous/app.txt', writeTxt, (err,data)=>{
      console.log('overwrite done on previous file')
})

});