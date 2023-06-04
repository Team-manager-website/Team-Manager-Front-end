const express = require('express');
const cors = require('cors');
  
// Creating express app object
const app = express();
  
// CORS is enabled for all origins
app.use(cors());
  
// Example api 
app.get('/gfg-articles', 
    (req, res) => res.json('gfg-articles'));
  
// Port Number
const port = 5000;
  
// Server setup
app.listen(port, () => `Server running on port ${port}`);