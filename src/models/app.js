import express from "express";
import cors from "cors";

const app = express(); 

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  try {   
    res.status(200).json({ route: "get" });
  } catch (error) {
    console.error(error)
  }
});

export default app;

