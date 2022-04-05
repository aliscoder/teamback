import dotenv from "dotenv";
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || "";
const SERVER_PORT = process.env.SERVER_PORT || "";

export const config = {
  mongo: {
    url: MONGODB_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
