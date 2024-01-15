import express from "express";
const app = express();

const port = 8080;

import routes from "./fakeApi/routes/routes";

import cors from "cors";

app.use(cors());
app.use(express.static("../frontend/dist"));
app.use("/routes", routes);

const server = app.listen(port, (): void => {
  console.log(`youre in`);
});
