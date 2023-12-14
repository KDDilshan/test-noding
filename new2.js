const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    else if(req.url==='/about'){
        res.end('here is short history')
    }else{
    res.end(`
    <h1>Opps!</h1>
    <p>we cnat to locate that page you are lokking</p>
    <a href="/">back home</a>
     `)
    }
})

server.listen(5000)