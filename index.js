const express = require('express');
const path = require('path');
require('dotenv').config();

let app = express();
let port = process.env.PORT || 3004;
let host = process.env.HOST || "http://localhost";

// Load static files
app.use(express.static('.'));

//Routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/", "index.html"))
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "/", "/index.html"));
})

app.listen(port, (err) => {
    console.log(`[Server] Live on ${host}:${port}`)
    if (err) throw err
})