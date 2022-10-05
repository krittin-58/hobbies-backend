var express = require('express');
var router = express.Router();

var https = require('https')
var fs = require('fs')

let bufferToBinary = null

function generateInvoice (invoice, filename, success, error) {

    var postData = JSON.stringify(invoice);

    var option = {
        hostname: "invoice-generator.com",
        port: 443,
        path: "/",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData),
            "Accept-Language": "th-TH"
        }
    };

    var flie = fs.createWriteStream(filename)

    var req = https.request(option, function (res) {
        var data = []
        
        res.on('data',async function (chunk) {
            if (chunk) {

                data.push(chunk)
                flie.write(chunk)
                let buffer = Buffer.concat(data).toString('binary');

                await getBinaryBuffer(buffer)
            }

        }).on('end', function () {
            flie.end()
            if (typeof success === 'function') {
                success()
            };
        });
    });

    req.write(postData)
    req.end();

    if (typeof error === 'function') {
        req.on('error', error)
    }
}

async function getBinaryBuffer (binary) {
    bufferToBinary = await binary
    return bufferToBinary
}

router.post('/create', async function (req, res) {
    try {
        generateInvoice(req.body, 'invoice.pdf')
        if (bufferToBinary) {
            res.send({ binary: bufferToBinary }).status(200)
        } 
    } catch (error) {
        res.send(error).status(500)
    }
});

module.exports = router