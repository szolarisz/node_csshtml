const http = require('http');
const fs = require('fs');
const port = 4444; //standard port

const server = http.createServer(function (req, res) {

    // Router
    switch (true) {
        case req.url === '/' && req.method === 'GET':
            fs.readFile('./views/home.html', (err, file) => {
                res.setHeader('content-type', 'text/html');
                res.end(file);
            });
            break;
            case req.url === '/udvozles.html' && req.method === 'GET':
                fs.readFile('./views/udvozles.html', (err, file) => {
                    res.setHeader('content-type', 'text/html');
                    res.end(file);
                });
                break;    
        case req.url === '/forma.css' && req.method === 'GET':
            fs.readFile('./views/formas.css', (err, file) => {
                res.setHeader('content-type', 'text/css');
                res.end(file);
            });
            break;

        case req.url === '/phones' && req.method === 'GET':
            fs.readFile('./phones.json', (err, file) => {
                res.setHeader('content-type', 'application/json');
                res.end(file);
            });
            break;
        default:
            res.end('404');
    }


});

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
// 

server.listen(port);