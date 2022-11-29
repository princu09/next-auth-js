import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import ConnectDB from "../../../middleware/_db";
import Users from "../../../models/Users";
var CryptoJS = require("crypto-js");

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // connect to mongodb
        await ConnectDB();

        // find the user with email
        const user = await Users.findOne({ email: email });

        // email does not exist
        if (!user) throw new Error("Email Id not exist");

        // check password
        var bytes = CryptoJS.AES.decrypt(user.password, "nfg");
        var decryptPass = bytes.toString(CryptoJS.enc.Utf8);

        if (email == user.email && password == decryptPass) {
          // return user
          return user;
        } else {
          // incorrect...
          throw new Error("Invalid Credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
