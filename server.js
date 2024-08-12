const express = require("express");
const cors = require('cors')
const mongodb = require('./db/connect')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()).use('/', require('./routes'));

mongodb.initDb((err) =>{
app.listen(PORT, () => {
  if(err){
    console.log(err)
  } else {
  console.log(
    "\x1b[34m%s\x1b[0m",
    `Test server running on port ${PORT}`);
  }
})
})