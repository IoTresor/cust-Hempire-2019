const express = require('express');
const path = require('path');

let app = express();
let port = process.env.PORT || 3004;
let host = process.env.HOST || "http://localhost";

app.use(express.static('.'));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, "/", "index.html"))
})

app.get('/blog', (req, res) => {
    //Send link redirect for blog
    res.send("google.com");
})

app.listen(port, (err) =>{
    console.log(`[Server] Live on ${host}:${port}`)
    if (err) throw err
})