const express = require('express');
const port = 4000;

const app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log(req.query.data);

});

app.listen(port, () => console.log(`Attacker  listening at localhost:${port}`));