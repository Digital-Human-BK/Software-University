function isUser() {
  return (req, res, next) => {
    if(req.session.user){
      next();
    } else {
      res.redirect('/login');
    }
  }
}

function isGuest(){
  return (req, res, next) => {
    if(req.session.user){
      res.redirect('/');
    } else {
      next();
    }
  }
}

function isOwner(){
  return (req, res, next) => {
    const userId = req.session.user?._id;
    //TODO change property name to match collection
    if(res.locals.trip.owner == userId){
      next();
    } else {
      res.redirect('/login');
    }
  }
}
module.exports = {
  isGuest,
  isUser,
  isOwner
};