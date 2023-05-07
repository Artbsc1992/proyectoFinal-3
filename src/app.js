import express from "express";
import displayRoutes from "express-routemap";
import mongoose from "mongoose";
import cartsRoutes from "./routes/carts.routes.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import {
  DB_USER,
  DB_PASSWORD,
  PORT,
  BASE_PREFIX,
  PERSISTENCE,
} from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/${BASE_PREFIX}/carts`, cartsRoutes);
app.use(`/${BASE_PREFIX}/users`, userRoutes);
app.use(`/${BASE_PREFIX}/products`, productRoutes);

// configuración  de conección a mongo DB

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@ecommerce.2ubhiqd.mongodb.net/?retryWrites=true&w=majority`;
const connection = mongoose;
connection
  .connect(uri)
  .then((conn) => {
    console.log("🚀 ~ file: app.js:18 ~ CONECTADO!:");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:20 ~ err:", err);
  });

//configuración de express
app.listen(PORT, () => {
  displayRoutes(app);
  console.log(`Escuchando en puerto ${PORT}, PERSISTENCE: ${PERSISTENCE}`);
});



