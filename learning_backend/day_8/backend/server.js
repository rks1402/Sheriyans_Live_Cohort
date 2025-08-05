const app = require("./src/app");
const connectToDB = require("./src/db/db");
require("dotenv").config();

connectToDB();

app.listen(3500, () => {
  console.log("Server is running on port 3500");
});
