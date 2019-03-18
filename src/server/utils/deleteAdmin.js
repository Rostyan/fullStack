Admin = require("../model/admin");

module.exports.delete = function (req,res) {
  
  let email = req.body.email;

  Admin.remove({email: email})
    .then(() => res.redirect('/admin'))
    .catch(err => res.send(err));

};