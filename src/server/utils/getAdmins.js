Admin = require("../model/admin");

module.exports.get = function (req,res) {

  if(req.session.passport === undefined) {
    res.send("This data is for admins");
  } else if(req.session.passport.user.role === 'admin'||req.session.passport.user.role === 'superAdmin') {
      Admin.find({})
        .then(user => {
          let usersMails = user.map((user) => {
            return {email: user.email, secondEmail: user.secondEmail, name: user.name, role:user.role, password: user.password};
          });
          res.send(usersMails);
        })
        .catch(err => res.send(err));          
    } else {
      res.send({message:"This data is for adminstrators!"});
    };
     
};