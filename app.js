var express = require('express');
var app = express();

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  var App_Id = 'uno';
  var Secret_Key = 'test2';
  var Redirect_URI = 'test3';
  var Site_Id = 'test4';

  res.render('pages/index', {
      App_Id : App_Id,
      Secret_Key : Secret_Key,
      Redirect_URI : Redirect_URI,
      Site_Id : Site_Id
  });
});

app.use(express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 5000!');
});


