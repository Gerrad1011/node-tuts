const {readFile,writeFile}=require('fs')

console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
       const firsttext=result;
       readFile('./content/second.txt','utf-8',(err,result)=>{
           if(err){
           console.log(err)
           return
           }
           const secondtext=result;
           writeFile('./content/result-async.txt',`Here is the result ${firsttext} ,${secondtext}`,(err,res)=>{
               if(err){
                   console.log(err)
               }
               else{
                   console.log('Done with this task')
               }
           })       
       })
})

console.log('Starting next task')