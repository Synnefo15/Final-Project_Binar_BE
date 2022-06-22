const userRepository = require("../repository/user.repository");

const { user } = require("../models/index.js");
const db = require("../models");
var bcrypt = require("bcrypt");
const User = db.users;

exports.signup = async (payload) => {
  try {
    const user = {
      role_name: payload.fields.role_name,
      email: payload.fields.email,
      password: bcrypt.hashSync(payload.fields.password, 8),
    };
    return await userRepository.save(user);
  } catch (err) {
    console.log(err);
  }
};

exports.signin = async (payload) => {
  // try{
  //     const user = {
  //         email : payload.fields.email,
  //         password: payload.fields.password
  //     }
  // }
  return await User.findOne({
    where: {
      email: payload.fields.email,
    },
  }).then((user) => {
    res.status(200).send({
      user: user,
    });
  });

  //   User.findOne({
  //     where: {
  //       email: req.body.email,
  //     },
  //   })
  //     .then((user) => {
  //       if (!user) {
  //         return res.status(404).send({ message: "User Not found." });
  //       }
  //       var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  //       if (!passwordIsValid) {
  //         return res.status(401).send({
  //           accessToken: null,
  //           message: "Invalid Password!",
  //         });
  //       }
  //       var token = jwt.sign({ id: user.id }, config.secret, {
  //         expiresIn: 86400, // 24 hours
  //       });
  //       res.status(200).send({
  //         id: user.id,
  //         email: user.email,
  //         accessToken: token,
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(500).send({ message: err.message });
  //     });
};
