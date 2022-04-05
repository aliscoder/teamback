import User from "../models/User";
import { Jobs, Locations } from "../constants";
import _ from "lodash";
import { Request, Response } from "express";

export const seedUsers = async (req: Request, res: Response) => {
  for (let i = 0; i < 200; i++) {
    const phone = Math.floor(
      Math.random() * (Math.floor(9999999999) - Math.ceil(123456789)) +
        Math.ceil(123456789)
    );
    const genders = ["male", "female"];
    const newUser = new User({
      name: `کاربر شماره ${i}`,
      phone,
      gender: _.sample(genders),
      age: Math.floor(Math.random() * 100),
      locations: _.map(_.take(_.shuffle(Locations), 5), (item) => item.name),
      jobs: _.map(_.take(_.shuffle(Jobs), 5), (item) => item.name),
      isVerified: true,
    });
    await newUser.save();
  }

  res.status(200).send("Users Added");
};
