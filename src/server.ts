import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { config } from "./config";
import authRoute from "./routes/auth";
import loggedRoute from "./routes/logged";
import seedRoute from "./routes/data";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(authRoute);
app.use(loggedRoute);
app.use(seedRoute);
app.use(express.static("public"));

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.listen(config.server.port, () =>
  console.log(`Server started on port : ${config.server.port}`)
);
