let Invitation = require("../../../model/invitation");
let token = require("../../generateToken");

module.exports.save = function (req,res) {

  let invitationToken = token.generate();
  let expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);

  let invitation = new Invitation({
    invitationToken: invitationToken,
    invitationExpires: expirationDate,
    role: req.body.role,
    email: req.body.email
  });

  Invitation.remove({email: req.body.email},(error)=>{
    if (error){
      if (!res.headersSent){
        res.redirect("back");
      }
    }
  });

  invitation.save((error)=>{
      if (error){
        if (!res.headersSent){
          res.redirect("back");
        }
      }
  });
  return invitationToken;
};