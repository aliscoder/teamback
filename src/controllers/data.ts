import express, { Request, Response } from "express";
import { JobType, LocationType } from "../@types";
import { Categories, Jobs, Locations, Provinces } from "../constants";
const router = express.Router();

export const getProvinces = async (req: Request, res: Response) => {
  res.status(200).send(Provinces);
};

export const getCategories = async (req: Request, res: Response) => {
  res.status(200).send(Categories);
};

export const getLocations = async (req: Request, res: Response) => {
  const provinceId = req.params.id;
  const locations = Locations.filter(
    (item: LocationType) => item.provinceId === Number(provinceId)
  );
  res.status(200).send(locations);
};

export const getJobs = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const jobs = Jobs.filter(
    (item: JobType) => item.categoryId === Number(categoryId)
  );
  res.status(200).send(jobs);
};

export default router;
