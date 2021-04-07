const http=require('http')

const server=http.createServer((req,res)=>{
if(req.url==='/'){
//res.write('welcome to our world')
res.end('Welcome to the new world!!')
}
if(req.url==='/about'){
    res.end('Story of my life')
}
res.end(`<h1>Oops!!</h1><p>PAGE NOT FOUND </p><a href="/">Back home</a>`)
})

server.listen(3000)