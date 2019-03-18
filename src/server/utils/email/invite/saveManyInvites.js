let sendInvite = require("./sendInvite");

module.exports.saveAndSend = function (req,res) {
  let emails = req.body.email;
  let roles = req.body.role;
  console.log("req body", req.body);

  if (!Array.isArray(emails)&&!Array.isArray(roles)){
    sendInvite.send(req,res);
  } else {
    for (let i=0;i<emails.length;i++){
      req.body.email = emails[i];
      req.body.role = roles[i];
      
      if(!res.headersSent){
        sendInvite.send(req,res);
      }
    }
  }
};