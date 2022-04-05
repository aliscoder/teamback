import { CategoryType, JobType, LocationType } from "../@types";

const provinces = require("./provinces.json");
const locations = require("./locations.json");
const categories = require("./categories.json");
const jobs = require("./jobs.json");

export const Provinces: Array<CategoryType> = provinces;
export const Categories: Array<CategoryType> = categories;
export const Locations: Array<LocationType> = locations;
export const Jobs: Array<JobType> = jobs;
