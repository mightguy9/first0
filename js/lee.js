var http=require("http") ;
var fs= require("fs") ;


var server = http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type":"Text/html" 
    }) ; 
    var stuff=fs.createReadStream(__dirname+'/jiren.html','utf8') ;
    stuff.pipe(res) ;
})

server.listen(3000,'127.0.0.1') ;