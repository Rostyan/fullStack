let generateToken = require("./generatePasswordResetLink");
let mailjet = require ('node-mailjet')
    .connect("fdb90e13a21b848f78b89cf6be1e0cb9","54a218785e95f731ff363b90b278eb2f");

module.exports.send = function (req, res, next) {
  let options = {
    'Messages': [
      {
        'From': {
          'Email': 'serafimsanvol@gmail.com',
          'Name': 'NetLS HR'
        },
        'To': [
          {
            'Email': req.body.email
          }
        ],
        'Subject': 'Reset password',
        'TextPart': 'NetLS Andrew',
        'HTMLPart': '<h3>NetLS Andrew</h3>' +
            '<p>You can reset password by going throught link below </p>'
            + 'http://' + "localhost:3000" + '/reset/' + generateToken.generate(req,res) + '\n\n'
      }
    ]
  };

  let request = mailjet.post('send', {'version': 'v3.1'}).request(options);
  request
      .then(function () {
        req.session.resetPasswordMessage = `Запит на відновлення паролю успішно надіслано на ${req.body.email}, перевірте вашу пошту`
        return res.redirect("back");
      })
      .catch(function (err) {
      });
};

module.exports.get = function(req,res){
if(req.session.resetPasswordMessage){
  res.send({
    "message": req.session.resetPasswordMessage});
    req.session.destroy();
} else {
  res.send({ "error": req.session.resetPasswordError});
  req.session.destroy();
}
}