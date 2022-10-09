import express from "express";
import cors from "cors";

import paths from "../services/paths.js";
import routes from "../routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(paths.main, routes.userRoutes);

export default app;
