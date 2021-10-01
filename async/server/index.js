const http = require("http");

const server = http.createServer((req,res)=>{

    const url = req.url;
    
    if (url ==='/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("<h1>Index Sayfası</h1>")
    }else if (url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('About Sayfası')
    }else if (url === "/contact") {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("Contact Sayfası")
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write("404")
    }

    
    res.end();
})

const port = 3000;

server.listen(port, ()=>{
    console.log(`Sunucu port ${port}'da başlatıldı.'`);
})

