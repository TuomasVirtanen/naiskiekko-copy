import express, { Request, Response, NextFunction } from "express";

var router = express.Router();
const players = require("../players.json");
const posts = require("../posts.json");

import * as dotenv from "dotenv";

const cookieparser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
import sendMail from "../services/mailservice";
import generateOTP from "../services/otp";

dotenv.config();

// Middleware functions

router.use(express.urlencoded({ extended: false }));
router.use(cookieparser());
router.use(express.json());

const users = [
  {
    id: <string>"1",
    username: <string>"seppo.hyvarinen@tuni.fi",
    admin: <boolean>true,
    otp: <string>"ppp",
  },
  {
    id: <string>"2",
    username: <string>"artem.tolpa@tuni.fi",
    admin: <boolean>true,
    otp: <string>"ppp",
  },
];

export interface userType {
  id: string;
  username: string;
  admin: boolean;
  otp: string;
}

router.get("/players", (req, res) => {
  res.send(players);
});

router.get("/posts", (req, res) => {
  res.send(posts);
});

// post route that handles checking whether user email
// is valid and then handles sending the email containing one-time-password
// TODO: find either a email service for testing (gmail don't work anymore) or wait
// for the client to get the domain emails to test this
router.post("/mailotp", async (req, res) => {
  const { thisUser } = req.body;
  console.log("at routes.ts: " + thisUser);
  try {
    var userExists: userType | undefined = users.find((u) => {
      return u?.username === thisUser;
    });

    console.log("userexists: " + userExists);
    if (userExists !== undefined) {
      var otp = generateOTP();
      userExists.otp = otp;
      // await sendMail(to, otp);
      res.send(otp);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json("this email is not authorized");
  }
});

// route for logging in
// TODO: whole frontend for reaching this route
router.post("/login", (req, res) => {
  const { thisUser, password } = req.body;

  var user: undefined | userType = users.find((u) => {
    return u?.username === thisUser && u?.otp === password;
  });

  console.log("At loggin " + user);

  if (user != undefined) {
    const accessToken = jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("access_token", accessToken);
    res.json({ user, accessToken });
  } else {
    res.status(400).json("incorrext");
  }
});

export interface verification {
  headers: {
    authorization: string;
  };
  body: {
    user: userType;
  };
}

// Middleware function that is used in any route
// that requires admin status

const verify = (req: Request, res: Response, next: NextFunction) => {
  const c = req.cookies.access_token;
  if (c) {
    const token = c;

    jwt.verify(token, process.env.SECRET, (err: Error, user: userType) => {
      if (err) {
        return res.status(403).json("Token not valid");
      }
      req.body.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

export default router;
