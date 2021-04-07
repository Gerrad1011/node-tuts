const fs=require('fs')
console.log('start')
const firstfile=fs.readFileSync('./content/first.txt','utf-8')
const secondfile=fs.readFileSync('./content/second.txt','utf-8')

fs.writeFileSync('./content/first-sync.txt',`Here is the result :${firstfile} ,${secondfile}`,{flag:'a'}) //flag to append

console.log('Done with this task')