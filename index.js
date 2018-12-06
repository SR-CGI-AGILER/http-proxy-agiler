const express = require('express');
const httpProxy = require('http-proxy');

const app = express();

const proxy = httpProxy.createProxyServer({});

app.use('/backend', (req, res) => {
    proxy.web(req, res, { target: 'http://app:4000' });
});

app.use('/', (req, res) => {
    proxy.web(req, res, { target: 'http://frontend:8080' });
});


app.listen(8080, () => {
    console.log("Proxy listening on 8080");
});


