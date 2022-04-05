import express from "express";
import { getAllUsers } from "../../controllers/logged";

const router = express.Router();

router.get("/users/:id", getAllUsers);

export default router;
