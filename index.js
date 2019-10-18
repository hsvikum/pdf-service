const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
var options = { 
    "format" : 'Legal',
    "border": {
        "top": "0.5cm",            // default is 0, units: mm, cm, in, px
        "right": "1cm",
        "bottom": "0.5cm",
        "left": "1.5cm"
      },
    // "zoomFactor": "0.5"
  };
// const fs = require('fs');
(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

const pdfTemplate = require('./documents');
const PresidentialPdfTemplate = require('./documents/presidential_nomination_form_sin.js');

const app = express();

const port = process.env.PORT || 5000;
const FILE_UPLOAD_PATH =   `${__dirname}/`

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    filePath = FILE_UPLOAD_PATH + 'result.pdf'
    try{
    pdf.create(pdfTemplate(req.body), {}).toFile(filePath, (err) => {
        if(err) {
            console.log("=create======= Error : "+ filePath + " === ", err.stack)
            return res.send(Promise.reject());
        }
        console.log("=create======= Success : ", filePath)
        return res.send(Promise.resolve());
    });
}catch(err){
    console.log("ddddddddd",err);
}
});

app.post('/create-pdf/:type', (req, res) => {
    if(req.params.type==='presidential'){
        pdf.create(PresidentialPdfTemplate(req.body), options).toFile('result2.pdf', (err) => {
            if(err) {
                return res.send(Promise.reject());
            }
            return res.send(Promise.resolve());
        });
    }
});

app.get('/fetch-pdf', (req, res) => {
    filePath = FILE_UPLOAD_PATH + 'result.pdf'
     res.sendFile(filePath, (err) =>{
        if(err) {
            console.log("======== Error : " + filePath + " === ", err.stack)
        }
        console.log("======== Success : ", filePath)
    });
})


app.get('/fetch-pdf-presidential', (req, res) => {
    return res.sendFile(`${__dirname}/result2.pdf`);
})

app.listen(port, () => console.log(`Listening on port ${port}`));