const express = require('express');
const path = require('path');
const connect = require('connect');
const serveStatic = require('serve-static')

let app = express();
let port = process.env.PORT || 3004;
let host = process.env.HOST || "localhost";

app.use(express.static('.'));
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, "/", "index.html"))
})


app.listen(port, (err) =>{
    console.log(`[Server] Live on ${host}:${port}`)
    if (err) throw err
})