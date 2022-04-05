import express from "express";
import { seedUsers } from "../controllers/seeder";

const router = express.Router();

router.get("/seed/users", seedUsers);

export default router;
