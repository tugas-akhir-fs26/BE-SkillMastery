const express = require("express");
const app = express();
const allRoutes = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Port Running at Port ${PORT}`);
});
