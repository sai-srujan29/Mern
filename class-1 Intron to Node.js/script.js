
const FS = require('fs')

//const read = FS.readFileSync('f1.txt')
//console.log("data in file 1 is: " + read)
console.log('Hello')
const data = FS.readFile('f5.txt', (err, data)=> {
    if(err) {
        comsole.log('error found')
    }
    console.log("" + data)
});

console.log('Bye')

