import { Router } from "express";
import * as authContoller from '../controllers/authenticate'

const router = Router();

router.post("/:userId", authContoller.getUser);

export default router