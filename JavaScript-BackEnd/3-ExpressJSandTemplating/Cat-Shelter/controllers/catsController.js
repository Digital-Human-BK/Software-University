const express = require('express');
const router = express.Router();
const reqLogger = require('../middlewares/requestLogger.js');

router.get('/lucky', (req, res)=> {
  res.write('<h1>Lucky is strange!!!</h1>');
  res.end();
})

//action level middleware imported from middlewares
router.get('/:catName', reqLogger, (req, res)=> {
  if(req.params.catName == 'LuckyCat'){
    return res.redirect('/cats/lucky');    
  }

  res.header({
    'Content-type': 'text/html'
  });
  res.write(`<h1>Cat Profile</h1><h2>${req.params.catName}</h2>`);
  res.end();
});

module.exports = router;