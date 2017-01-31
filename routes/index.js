var express = require('express');
var router = express.Router();
var expressMail = require('express-mailer');
var app = require('express')(), mailer = require('express-mailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EXPRESS MAILER' });
  //app.mailer.render('index');
});

router.post('/',function(req,res){
       var oldurl = req.body.mail1;
       var messege = req.body.text;
      // console.log(oldurl);
       //res.send();
       //console.log(messege);
       console.log('ON SERVER');
      //res.render('email')
    res.mailer.send('email',{
           to : oldurl,
      subject : "Express Mailer",
      content : messege

      //otherPropery: additional property   ,
    }, function(err, suc){
      console.log(err, suc);
       if(err){
         res.send('Error in sending the E-mail');
         return;
       }
       else{
         res.send('E-Mail sent successfully.');
       }
    });
});

module.exports = router;
