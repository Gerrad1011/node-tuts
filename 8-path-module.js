const path=require('path')


//path seperator
console.log(path.sep)

//join paths
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath)

//base file
const base=path.basename(filePath)
console.log(base)

//resolve absolute path
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

//get extension
const extension=path.extname(absolute)
console.log(extension)