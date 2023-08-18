import express from "express";
import routes from "../routes/routes.js";
import errorHandler from "../middleware/errorHandlingMiddleWare.js";
import cors from "cors";
import "dotenv/config";

const app = express();

// Cross-origin resource sharing
app.use(cors()); // if you are using Brave browser and  Brave Shields is truned on then we can use fetch in console.log("http://localhost:8080")

// express build-in middleware:
// Provided by express like
// 1: -- express.urlencoded,
// 2: -- express.json,
// 3: -- express.static

app.use(express.urlencoded({ extended: false })); // to handle form data
app.use(express.json()); // to handle json data

// Express middleware can be loaded for all routes using
// -- app.use(<middleware function>)
// or for selected routes using
// -- app.use(<route url> , <middleware fuction> )

app.use(routes); // all routes

// error handling middleware
app.use(errorHandler);

app.all("*", (req, res) => {
  res.status(404).json({
    message: `the requested route ${req.url} does not exist in the ${req.method} mothod`,
  });
});

export default app;
