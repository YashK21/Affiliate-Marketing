import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});
// console.log(process.env.DB_URI)
const app = express();
const corsOptions = {
  origin: [process.env.LOCAL_HOST],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.route("/api/v1",rou)
export default app;
