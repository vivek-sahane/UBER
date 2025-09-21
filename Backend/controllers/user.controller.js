const userModel = require('../models/user.model');
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model')


module.exports.registerUser = async(req,res,next) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return resizeBy.status(400).json({ errors: errors.array()})
    }

    const { fullname, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({token, user});

}

module.exports.loginUser = async(req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return resizeBy.status(400).json({errors: errors.array()});
    }

    const { email,password } = req.body;

    const user = await userModel.findOne({email}).select('password');
    
    if(!user) {
        return res.status(401).json({message: 'Invalid email or password'})
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch) {
        return res.status(401).json({message: 'Invalid email or password'})
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({token, user});
}

module.exports.getUserProfile = async(req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
  try {
    // clear cookie if you are using cookie-based auth
    res.clearCookie("token");

    // read from cookie or authorization header
    let token = req.cookies?.token;   // works if you use cookie-parser middleware

    if (!token && req.headers.authorization) {
      // "Bearer <token>"
      const parts = req.headers.authorization.split(" ");
      if (parts.length === 2 && parts[0] === "Bearer") {
        token = parts[1];
      }
    }

    if (!token) {
      return res.status(400).json({ message: "Token not provided" });
    }

    // blacklist the token
    await blacklistTokenModel.create({ token });

    return res.status(200).json({ message: "Logged out" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
