let Admin = require("../../../model/admin");
let generateToken = require("../../generateToken");

module.exports.generate = function (req,res) {

    let actualDate = new Date();
    actualDate.setDate(actualDate.getDate() + 1);

  let resetData = {
    resetPasswordToken: generateToken.generate(),
    resetPasswordExpires:  actualDate
  };

  Admin.findOneAndUpdate({email: req.body.email}, {
    $set: resetData}, function(err, user) {

      if (!user) {
          if(!res.headersSent){
            req.session.resetPasswordError = 
            `Не знайдено користувача з такою поштою ${req.body.email}`
           res.redirect("back");
          }
      }
    });

  return resetData.resetPasswordToken;
};