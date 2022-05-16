const housingServise = require('../services/housingService');

function preload(populate) {
  return async function (req, res, next) {
    const id = req.params.id;
    if (populate) {
      res.locals.listing = await housingServise.getListingAndTenats(id);
    } else {
      res.locals.listing = await housingServise.getById(id);
    }
    next();
  };
};

module.exports = preload;