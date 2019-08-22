const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, './json')));

app.get('/api', (req, res) => {
  fs.readFile(
    path.join(__dirname, './json/todoData.json'),
    (err, data) => {
      if(err) {
        res.send(err);
        return;
      }
      
      res.write(data);
      res.end();
    }
  )
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});