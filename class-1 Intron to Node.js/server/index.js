const http = require('http')

const MyServer = http.createServer((req, res) => {
    console.log(req.url)
    switch(req.url) {
        case '/' :
        res.end("This is my home page")
        break;

        case '/about' :
        res.end("This is my about page")
        break;

        case '/contact' :
        res.end("This is my contact page")
        break;
        
    }
})

MyServer.listen(5008, ()=> {
    console.log('Server is runing at port 5008')
})