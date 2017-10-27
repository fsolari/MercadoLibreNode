var express = require('express');
var app = express();

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    var credentials = [
        { name: 'App_Id', "meee" },
        { name: 'Secret_Key', "meee2" },
        { name: 'Redirect_URI', "meee3" },
        { name: 'Site_Id', "meee4" },
    ];

    response.render('pages/index', {
      credentials : credentials
    });
});

app.use(express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 5000!');
});
