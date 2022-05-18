const { getAdAndCandidates, getAdById } = require("../services/adService");

function preload(populate) {
  return async function (req, res, next) {
    const id = req.params.id;
    if(populate){
      res.locals.ad = await getAdAndCandidates(id);
    } else {
      res.locals.ad = await getAdById(id);
    }
    next();
  }
}

module.exports = preload;