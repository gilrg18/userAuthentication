import { Router } from "express";
import * as userController from '../controllers/users'

const router = Router();

router.post("/", userController.saveUser);

router.get("/:id", userController.getUser);

export default router
