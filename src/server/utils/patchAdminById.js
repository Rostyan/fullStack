const Admin = require("../model/admin");

module.exports.patch = function (req,res) {

  if (req.body.password!==req.body.confirmPassword){
    return res.send("passwords doesn't coincidence")
  }

  let updatedOptions = {
    secondEmail : req.body.secondEmail,
    name : req.body.name,
    password : req.body.password
  };

    Admin.findOneAndUpdate({_id: req.params.id}, {$set: updatedOptions}, function(error){
      if(error){
        res.send(error);
      } else {
        res.redirect('back')
      }
    });

};
