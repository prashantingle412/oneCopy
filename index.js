var nodemailer = require('nodemailer');
var http = require('http');
// var mf = require('myFunction');
// var dt = require('./myfirstmodule');



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'prashantingle412@gmail.com',
           pass: 'rprashant123'
       }
   });
   const mailOptions = {
    from: 'prashantingle412@gmail.com', // sender address
    to: 'parbhani_mi1@mkcl.org', // list of receivers
    subject: 'Subject of your email', // Subject line
    // html: '<p>Your html here</p>'// plain text body,
    // html: {
    //     path : './index.html'
    //   },
    //   attachments: [{
    //     filename : "khan.jpg",
    //     path : './khan.jpg'
    //   }]
    // html: 'Embedded image: <img src="D:\node\one\tr.png"/>',
    html: {
      path : 'index.html'
    }
    // attachments: [{
    //     filename: 'tr.png',
    //     // path: './tr.png',
    //     cid: 'unique@kreata.ee' //same cid value as in the html img src
    // }]
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
     
 });
 

//  var dt = require('./app');

// http.createServer(function (req, res) {
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     // res.write("The date and time are currently: " + dt.myDateTime());
//     // res.end();
//     console.log(dt.myDateTime());
// }).listen(8080);