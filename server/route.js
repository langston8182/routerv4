const AuthenticationController = require('./controllers/authentication');
require('./services/passport');
const passport = require('passport');

const requireToken = passport.authenticate("jwt", {session: false});
const requireSignin = passport.authenticate("local", {session: false});

module.exports = function(expressServer) {
    expressServer.post("/signup", AuthenticationController.signup);

    expressServer.get("/ressourceSecrete", requireToken, function(req, res) {
       res.send({codeSecre: 42});
    });

    expressServer.post("/signin", requireSignin, AuthenticationController.signin);
};