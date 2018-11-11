'use strict';
const fs = require('fs');

module.exports = (app, db) => {

  app.get('/', function(req, res){
    var path = require('path');
    res.sendFile(path.resolve('public/index.html'));
    app.settings.socketIo.emit('update1', 'update1!');
  });

  app.post('/json', (req, res) => {
    var dataPath = require('path');
    dataPath = String(dataPath.resolve('public/data.json'));
    let data = JSON.stringify(req.body);
    let rawdata;
    if (fs.existsSync(dataPath)){
      try {
        fs.writeFileSync(dataPath, data);
      } catch (err) {
        throw err;
      }
      try {
        rawdata = fs.readFileSync(dataPath);
      } catch (err) {
        throw err;
      }
    } else {
      let err = {msg: dataPath + ' not found!'};
      res.status(500).json(err);
      console.log(dataPath + ' not found!');
      return;
    }

    let response = JSON.parse(rawdata);
    app.settings.socketIo.emit('update', String(rawdata));
    res.send(response);
  });

};


