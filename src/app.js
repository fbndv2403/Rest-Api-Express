import express from "express";
import cors from "cors";

export default app = express();

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.listen(3000, () => {
  console.log(`Server on port 3000`);
});
