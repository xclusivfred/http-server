const http = require('http'); //import the http module
const fs = require('fs'); //import the FileSystem module

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //This checks the url in the browser and renders the pages accordingly
    if (req.url === '/' || req.url === '/home') {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end()
        })
    }
    else if (req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end()
        })
    }
    else if (req.url === '/contact') {
        fs.readFile('contact.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end()
        })
    }
}).listen(8001, '127.0.0.1');
console.log('Server started successfully');