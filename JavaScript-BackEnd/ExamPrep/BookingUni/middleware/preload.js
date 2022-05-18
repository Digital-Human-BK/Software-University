const { getHotelAndUsers, getById } = require("../services/hotelService");

function preload(populate) {
  return async function (req, res, next) {
    const id = req.params.id;
    if (populate) {
      res.locals.hotel = await getHotelAndUsers(id);
    } else {
      res.locals.hotel = await getById(id);
    }
    next();
  }
}

module.exports = preload;