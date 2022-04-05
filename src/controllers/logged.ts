import { Request, Response } from "express";
import User from "../models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  const authId = req.params.id;
  const authUser = await User.findById(authId);
  const relatedUsers = await User.find()
    .in("locations", authUser.locations)
    .in("jobs", authUser.jobs);
  res.send(relatedUsers);
};
