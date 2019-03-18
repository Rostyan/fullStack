const Admin = require("../../../model/admin");

module.exports.get = function (req, res) {
  let sliced = req.headers.referer.slice(-40);
  Admin.findOne({
    resetPasswordToken: sliced,
    resetPasswordExpires: { $gt: Date.now() }
  }, function (err, admin) {
    if (!admin) {
      res.send({ errorMessage: 'Некоректний токен для відновлення даних або вийшов строк його дії' })
      req.session.destroy();
    } else if (req.session.error) {
      res.send({ error: req.session.error });
      req.session.destroy();
    } else {
      res.redirect('/reset/:token')
      req.session.destroy();
    }
  });
};



module.exports.set = function (req, res) {
  if (req.body.password !== req.body.confirmPassword) {

    req.session.error = "Паролі не співпадають"
    res.redirect('back')
  } else {
    Admin.findOneAndUpdate({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    },
      {
        $set: {
          password: req.body.password,
          resetPasswordToken: undefined,
          resetPasswordExpires: undefined
        }
      }, function (err, admin) {
        if (err) {
          req.session.error = "Паролі повинні мати мінімум 6 і максимум 50 символів"
          res.redirect('back');
        
        } else if (!admin) {
          req.session.error = 'Некоректний токен для відновлення даних або вийшов строк його дії'
          res.redirect('back')
        } else {
          res.redirect('/login');
        }
      })
  }
};
