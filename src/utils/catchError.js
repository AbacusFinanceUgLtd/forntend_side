const { signedInUser } = require("./signedInUser");

const catchError = (req, res, pageName) => {
  // FUTURE TODO: when error occurs in production send email to the devs
  let signInUser;
  if (req.cookies.token) {
    signInUser = signedInUser(req.cookies);
  }
  return res.render(pageName, {
    message: "Sorry something went wrong, try again",
    // user: userObject,
    signedInUser: signInUser,
  });
};

module.exports = { catchError };
