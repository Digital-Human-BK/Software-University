const publicationService = require('../services/publicationService');

function preload(populate) {
  return async function (req, res, next) {
    const id = req.params.id;
    if(populate){
      res.locals.publication = await publicationService.getPubAndSubscribers(id);
    } else {
      res.locals.publication = await publicationService.getById(id);
    }
    next();
  }
}

module.exports = preload;