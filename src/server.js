import app from "./models/app.js";
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
