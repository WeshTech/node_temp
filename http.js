const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end("You are in the about page")
    }
    res.end(`<h1>Ooops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/"> go back home</a>`)
})

server.listen(port, () => {
    console.log(`server is listening from port ${port}`)
})