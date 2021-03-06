const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.set('view engine','hbs');

app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'src')));

app.get('/',(req,res)=>{
  res.render('index')
});

app.get('/product',(req,res)=>{
  res.render('product')
});

app.get('/technology',(req,res)=>{
  res.render('technology')
});

app.get('/indiegogo',(req,res)=>{
  res.render('indiegogo')
});

app.get('/subscribe',(req,res)=>{
  res.render('subscribe')
});

app.get('/about',(req,res)=>{
  res.render('about')
});

app.get('/faq',(req,res)=>{
  res.render('faq')
});

app.listen(port,(req,res)=>{
  console.log('listening on port ' , port);
})

module.exports = app;
