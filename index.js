const http = require('http');

// ポート番号
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            res.end('ok');
        });
    } else {
        res.end('ok');
    }
});


server.listen(port);
console.log(`http://localhost:${port}`);