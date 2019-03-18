let Admin = require("../model/admin");

module.exports.get = function (req, res) {

  let id = req.params.id;

  Admin.findOne({_id: id})
    .then(admin => res.send(admin))
    .catch(err => res.send(err)); 
    
};