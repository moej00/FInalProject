const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admins");
const orgRoute = require("./routes/orgs");
const userRoute = require("./routes/users");

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/admins", adminRoute);
app.use("/api/orgs", orgRoute);
app.use("/api/users", userRoute);

app.listen(4000, () => {
  console.log("Server is Running");
});
