import { config } from "dotenv";

config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

export const {
  API_VERSION,
  NODE_ENV,
  PORT,
  ORIGIN,
  DB_CNN,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  PRUEBA,
  S_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  SECRET_JWT,
  BASE_PREFIX,
  PERSISTENCE,
} = process.env;

// module.exports = {
//   API_VERSION,
//   NODE_ENV,
//   PORT,
//   ORIGIN,
//   DB_CNN,
//   DB_HOST,
//   DB_PORT,
//   DB_NAME,
//   DB_USER,
//   DB_PASSWORD,
//   PRUEBA,
//   S_SECRET,
//   GITHUB_CLIENT_ID,
//   GITHUB_CLIENT_SECRET,
//   SECRET_JWT,
//   BASE_PREFIX
// };
