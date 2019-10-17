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

const pdfTemplate = require('./documents');
const PresidentialPdfTemplate = require('./documents/presidential_nomination_form_sin.js');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            console.log("=create======= Error : ", err.stack)
        }
        console.log("=create======= Success : ")
    });
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
     res.sendFile(`${__dirname}/result.pdf`, (err) =>{
        if(err) {
            console.log("======== Error : ", err.stack)
        }
        console.log("======== Success : ")
    });
})


app.get('/fetch-pdf-presidential', (req, res) => {
    return res.sendFile(`${__dirname}/result2.pdf`);
})

app.listen(port, () => console.log(`Listening on port ${port}`));