import { Router } from "express";
import * as userController from '../controllers/users'
import { verifyToken } from "../middleware/authMiddleware";

const router = Router();

router.post("/", userController.saveUser);

router.post("/login", userController.login);

router.get('/', verifyToken, userController.getUser)

export default router
