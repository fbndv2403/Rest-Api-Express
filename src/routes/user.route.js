import { Router } from "express";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/get", controllers.getClients);
router.post("/post/", controllers.postUser);
router.put("/put", controllers.putUser);
router.delete("/delete", controllers.deleteUser);

export default router;
