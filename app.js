const express = require('express')
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname})
});

app.listen(8000, () => {
  console.log('Video Revue Firebase App listening on port 8000!')
})