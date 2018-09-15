var express = require('express')
var bodyParser = require('body-parser');
var path = require('path');
const app = express();
const PORT = process.env.PORT || 5000

/*
var logger = function(req, res, next){
  console.log('Logging...');
}
app.use(logger);
*/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/website/views'))


//Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Path
app.use(express.static('website'));

app.get('/', function (req, res) {
  res.render('index',{ title: 'CobraPeak'})
})
  .listen(PORT, () => console.log(`Listening on ${PORT}`))