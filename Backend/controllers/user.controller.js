const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const Salt = 10;
var jwt = require('jsonwebtoken');
const sendmail = require('../utils/sendmail');
const { Navigate } = require("react-router-dom");


exports.register = async (req, res) => {
    try {
        const { password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, Salt)
        req.body.password = encryptedPassword;
        //Below code create 6 Digit verification Code
        const randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

        const user = await User.create(req.body)

        user.code = randomNumber;
        user.save();
        const subject = "Welcome to Stylo";
        const text = `This is a greeting note for you as you have registered on our website.Thnks.This is your verification code ${randomNumber}`;
        sendmail(user.email, subject, text);

        res.json({ status: 200, message: "User created successfully", user })
    }
    catch (err) {
        console.log(err);
    }
};

exports.verifyUser = async (req, res) => {
    try{
        const {code}= req.body;
        
       const user = await User.findOne({code:code});
       
       
      if(code === user.code){
        user.isEmailverified=true;
        user.code=null;
        user.save();
        var token = jwt.sign({ id: user._id }, 'abc123456');
      }
      else{
        return res.json ({status:404, message:"Wrong Verification Code", success:false})
      }
      return res.json ({status:200, message:"Verified Successfully",token, success:true})
    }
    catch(err){
      console.log(err);
    }
}

exports.forgotPassword = async (req, res) => {
  try{
     
  }
  catch(err){
    console.log(err);
  }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({ status: 404, message: "User not found", success: false });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (comparePassword) {
            var token = jwt.sign({ id: user._id }, 'abc123456');
            return res.json({ status: 200, message: "User Login Successfully.", success: true, token: token });
        }
        else {
            return res.json({ status: 401, message: "Wrong Password", success: false });
        }

    }
    catch (err) {
        console.log(err);
    }
};

exports.index = async (req, res) => {
    try {
        const users = await User.find()
        res.json({ status: 200, message: "Users fetched successfully", users })
    }
    catch (err) {
        console.log(err);
    }
};

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.json({ status: 404, success: false, message: `User not found` })
        }
        res.json({ status: 200, success: true, message: "User found successfully", user })
    }
    catch (err) {
        console.log(err);
    }
};

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const user = await User.findOneAndDelete({ _id: id })
        if (!user) {
            return res.json({ status: 404, success: false, message: `User not found` })
        }
        res.json({ status: 200, message: "User deleted successfully" })
    }
    catch (err) {
        console.log(err);
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const user = await user.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!user) {
            return res.json({ status: 404, success: false, message: `User not found` })
        }
        res.json({ status: 200, message: "User updated successfully" })
    }
    catch (err) {
        console.log(err);
    }
};