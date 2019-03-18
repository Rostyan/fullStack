const Admin = require("../model/admin");


module.exports.patch = function (req,res) {

  let updatedOptions = {
    secondEmail : req.body.secondEmail,
    name : req.body.name,
    role: req.body.role
  };

  Admin.findOneAndUpdate({email: req.body.email}, {$set: updatedOptions}, function(error){
    if(error){
      res.send(error);
    }else if(updatedOptions.role === 'recruiter' && req.session.passport.user.email === req.body.email){
      req.logout();
      res.redirect('/login')
    } else {
      res.redirect('/admin')
    }
  });

};