import express from "express";
import routes from "../routes/routes.js";
const app = express();

// express build-in middleware
app.use(express.urlencoded({ extended: false })); // to handle form data
app.use(express.json()); // to handle json data

// custom middleware
app.use(routes); // router middleware

export default app;
