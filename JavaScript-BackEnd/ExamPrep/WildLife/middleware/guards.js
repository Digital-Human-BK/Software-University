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
module.exports = {
  isGuest,
  isUser
};