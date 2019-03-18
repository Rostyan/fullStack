const express = require('express');
const router = express.Router();
const passwordReset = require("../utils/email/passwordReset/passwordReset");
const createAdmins = require("../utils/createAdmin");
const sendInvite = require("../utils/email/invite/sendInvite");
const saveManyInvites = require("../utils/email/invite/saveManyInvites");
const getAdmin = require("../utils/getAdmin");
const patchAdmin = require("../utils/patchAdminById");
const setNewPassword = require("../utils/email/passwordReset/setNewPassword");
const createEmployee = require('../utils/createEmployee');
const showEmployees = require('../utils/showEmployees');
const { ensureAuthenticated } = require('../config/auth');
const passport = require('passport');

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/logout');
});

router.get('/login', (req, res) => {
  res.send({message: 'OK!'});
});

router.post('/login', (req, res, next) => {  
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })(req, res, next);
});

router.post('/new_candidate', createEmployee.post);

router.get('/', ensureAuthenticated, (req, res) => {
  res.send({
    role: req.session.passport.user.role,
    id: req.session.passport.user._id,
    name: req.session.passport.user.name
  });
});

router.get('/employees', showEmployees.get);

router.get('/admin', ensureAuthenticated, (req, res) => {
  res.send({role: req.session.passport.user.role});   
});

router.get("/password_reset", passwordReset.get);

router.post("/password_reset",passwordReset.send);

router.post("/signup/:token", createAdmins.post);

router.get("/signup/:token", createAdmins.get);

router.post("/invite", sendInvite.send);

router.post("/invite_many", saveManyInvites.saveAndSend);

router.get("/invite_many", (req,res) => res.send("invite page"));

router.get("/:id",getAdmin.get);

router.patch("/:id",patchAdmin.patch);

router.get("/reset/:token",setNewPassword.get);

router.patch("/reset/:token",setNewPassword.set);

module.exports = router;