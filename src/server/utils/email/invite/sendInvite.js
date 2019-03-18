let mailjet = require ('node-mailjet')
    .connect("fdb90e13a21b848f78b89cf6be1e0cb9","54a218785e95f731ff363b90b278eb2f");
let saveInvite = require("./saveInvite");

module.exports.send = function (req, res) {

  let token = saveInvite.save(req,res);

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
        'Subject': 'Invite to recruiter-app!!!!',
        'TextPart': 'NetLS Andrew',
        'HTMLPart': '<h3>NetLS Andrew</h3>' +
            '<p>You are invited to register in the recruiter-app from NetLS company.' +
            'Please confirm the registration! </p>' + 'http://' + "localhost:3000" + '/signup/'
            + token + '\n\n'
      }
    ]
  };

  let request = mailjet.post('send', {'version': 'v3.1'}).request(options);
  request
      .then(function (response, body) {
        // Render the index route on success
        if (res.headersSent) {
        } else {
          req.session.messageOnSubmit = "Користувач успішно створений!";
          return res.redirect("back");
        }
      })
      .catch(function (error) {
        if (res.headersSent) {
        } else {
          req.session.errorOnSubmit = "Неправильний пароль або паролі не співпадають";
          res.send({errorOnSubmit: req.session.errorOnSubmit });
        }

      });
};

