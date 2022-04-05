import { Request, Response } from "express";
import User from "../models/User";

/* check user existance by phone at app initialization */
export const initialAuthentication = async (req: Request, res: Response) => {
  const phone = req.body.phone;
  const user = await User.findOne({ phone: phone });
  res.status(200).send({ user });
};

/* verify user auth after verification code entered */
export const verifyUser = async (req: Request, res: Response) => {
  const phone = req.body.phone;
  const user = await User.findOne({ phone: phone });
  if (user) {
    res.status(200).send({ status: true, user: user });
  } else {
    const newUser = new User({ phone });
    await newUser.save();
    res.status(200).send({ status: false, user: newUser });
  }
};

/* send generated code to user phone */
export const sendCodeToUser = async (req: Request, res: Response) => {
  const phone = req.body.phone;
  const code = req.body.code;
  // send code as sms to user phone number;
  res.status(200).send({
    status: "Done",
  });
};

/* register user data in database */
export const registerUser = async (req: Request, res: Response) => {
  const useregisterationData = req.body;
  await User.create(useregisterationData, (err: any, user: any) => {
    if (err) {
      res.status(403).send({
        status: "Error",
        message: err.message,
      });
    } else {
      res.status(200).send({
        status: "Done",
      });
    }
  });
};

/* complete profile and navigate to home */
export const finishRegisteration = async (req: Request, res: Response) => {
  const userData = JSON.parse(req.body.user);
  userData.isVerified = true;
  userData.locations = userData.locations.map((item: any) => item.name);
  userData.jobs = userData.jobs.map((item: any) => item.name);
  const user = await User.findOneAndUpdate({ phone: userData.phone }, userData);
  res.status(200).send({ user });
};
