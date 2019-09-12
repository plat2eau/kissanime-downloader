const puppeteer = require('puppeteer')
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.get('/:url/:start/:end', function(req, res) {
    const kissUrl = req.params.url;
    const start = req.params.start;
    const end = req.params.end;
    (async() => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(kissUrl);

        // await browser.close();
    })();
    res.send(kissUrl + start + end);
});

app.get('/', function(req, res) {
    res.send("Server running!!!");
});


var server = app.listen(8045, "localhost", function() {
    // @ts-ignore
    var host = server.address().address;
    // @ts-ignore
    var port = server.address().port;
    console.log("Listening at http://%s:%s", host, port)
});