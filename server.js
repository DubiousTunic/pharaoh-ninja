const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const publicDirectoryPath = path.join(__dirname, 'static')

app.use(express.static(publicDirectoryPath));

router.get('/',function(req,res){
  res.sendFile(path.join(publicDirectoryPath, '/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);

app.listen(process.env.port || 5000);

console.log('Running at Port 5000', __dirname, publicDirectoryPath);
