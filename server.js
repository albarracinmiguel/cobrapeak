const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


app.use(express.static('website'));

app
  .get('/', (req, res) => res.render('website/views/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))