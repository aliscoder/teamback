import express from "express";
import {
  initialAuthentication,
  sendCodeToUser,
  registerUser,
  verifyUser,
  finishRegisteration,
} from "../../controllers/auth";

import multer from "multer";
import {
  getCategories,
  getJobs,
  getLocations,
  getProvinces,
} from "../../controllers/data";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./public/images");
  },
  filename(req, file, callback) {
    callback(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post("/initial_auth", initialAuthentication);
router.post("/send_code", sendCodeToUser);
router.post("/verify_user", verifyUser);
router.post("/register_user", registerUser);
router.get("/provinces", getProvinces);
router.get("/categories", getCategories);
router.get("/provinces/:id/locations", getLocations);
router.get("/categories/:id/jobs", getJobs);
router.post(
  "/finish_registeration",
  upload.single("photo"),
  finishRegisteration
);

export default router;
