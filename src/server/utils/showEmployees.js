const Employee = require('../model/employee');
const url = require('url');  
const querystring = require('querystring');

module.exports.get = (req, res) => {

  let reqURL = req.headers.referer;
  let parsedUrl = url.parse(reqURL);
  let parsedQs = querystring.parse(parsedUrl.query);

  Employee.find({})
    .then(user => {
      let userDevType = user.map((user) => {
        return user.devType
      });
      let userDevTypeStr = userDevType.toString();
      if(userDevTypeStr.indexOf(parsedQs.devType) === -1) {
        res.send({message: 'Не має працівника по даному напрямку!'});
        return false;
      }
      res.send({user: user});
    })
    .catch(err => res.send(err)); 

}