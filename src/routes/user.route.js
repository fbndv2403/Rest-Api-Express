import { Router } from "express";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/get", controllers.getUser)
router.post("/post/", controllers.postUser)

export default router