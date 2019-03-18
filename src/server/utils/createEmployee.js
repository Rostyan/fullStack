const Employee = require('../model/employee');

module.exports.post = (req, res) => {
  Employee.create({name: req.body.name,
                  lastName: req.body.lastName,
                  expirienceFrom: req.body.expirienceFrom,
                  expirienceTo: req.body.expirienceTo,
                  devType: req.body.devType,
                  location: req.body.location,
                  workType: req.body.workType,
                  workTime: req.body.workTime,
                  email: req.body.email,
                  lastPosition: req.body.lastPosition,
                  commentAboutPerson: req.body.commentAboutPerson,
                  commentAboutComunication: req.body.commentAboutComunication,
                  facebook: req.body.facebook,
                  twitter: req.body.twitter,
                  linkedin: req.body.linkedin,
                  cvFile: req.body.cvFile
                })
  .then(user => res.send('Кандидат успішно доданий до бази даних!'))
  .catch(err => res.send(err));
}