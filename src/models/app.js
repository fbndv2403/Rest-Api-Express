import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hola mundo");
});

export default app;