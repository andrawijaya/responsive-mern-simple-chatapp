const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, picture } = req.body;
    console.log(req.body);
    const users = await User.create({ name, email, password, picture });
    res.status(201).json(users);
  } catch (error) {
    let msg;
    if (error.code == 11000) {
      msg = "User already exists";
    } else {
      msg = error.message;
    }
    console.log(error);
    res.status(400).json(msg);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await User.findByCredentials(email, password);
    users.status = "online";
    await users.save();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.logoutUser = async (req, res) => {
  try {
    const { _id, newMessages } = req.body;
    const user = await User.findById(_id);
    user.status = "offline";
    user.newMessages = newMessages;
    await user.save();
    const members = await User.find();
    socket.broadcast.emit("new-user", members);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
};
