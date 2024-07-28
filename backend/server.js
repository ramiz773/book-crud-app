import express from "express";
import { MONGODBURI, PORT } from "./config.js";
import mongoose from "mongoose";
import bookRouter from "./router/bookRouter.js";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRouter);

// db connection
mongoose
   .connect(MONGODBURI)
   .then((host) => {
      console.log(`mongodb connected ${host.connection.host}`);
      app.listen(PORT || 3010, () => {
         console.log(`server running port number ${PORT}`);
      });
   })
   .catch((err) => {
      console.log(err);
   });
