import app from "./api/config/express.js";
import connectTomongodb from "./api/config/mongoDB.js";

const PORT = 8080;

app.listen(PORT, () => {
  console.log("server started" + "\n" + "host:  https://localhost:" + PORT);
  connectTomongodb();
});
