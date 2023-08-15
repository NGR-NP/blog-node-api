import userModel from "../model/userModel.js";

export const  register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  try {
    const newUser = new userModel({
      name: name,
      email: email,
      password: password,
    });
    await newUser.save();
    res.status(201).json({ message: `Account register successfully!!` });
  } catch (err) {
    res.status(500).json({ message: "something went wrong", error: err });
  }
};
export const  login = (req, res) => {
  res.send("you are in login route");
};
