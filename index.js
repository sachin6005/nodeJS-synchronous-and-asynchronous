const fs = require('fs')

console.log("Hello world")

const readTxt = fs.readFileSync('/home/sachin/Documents/CGCS phase2/NodeJS/NodeJS-Reading-and-Writing-files/Running js outside the browser/read.txt', 'utf-8')
console.log(readTxt)

const writeTxt = `${readTxt}.\nCreated on ${Date.now()}`
fs.writeFileSync('/home/sachin/Documents/CGCS phase2/NodeJS/NodeJS-Reading-and-Writing-files/Running js outside the browser/read.txt', writeTxt)
