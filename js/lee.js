var http=require("http") ;

var server = http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type":"Text/plain" 
    }) ; 
    res.end("DALY_SERVER") ;
})

server.listen(3000,'127.0.0.1') ;