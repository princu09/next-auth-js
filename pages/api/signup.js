import ConnectDB from "../../middleware/_db";
import Users from "../../models/Users";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { officeID, userRole, fname, lname, email, genralEmail } = req.body;
    let u = new Users({
      userRole,
      fname,
      lname,
      email,
      password: CryptoJS.AES.encrypt(req.body.password, "nfg").toString(),
    });
    await u.save();
    // let field = await Fields.find();
    res.status(200).json({ success: "success" });
  } else {
    res
      .status(400)
      .json({ error: "Something went wrong... try another method.." });
  }
};

export default ConnectDB(handler);
