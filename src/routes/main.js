import { Router } from 'express';
import { display } from '../controllers/main.js'

const router = Router();

router.route('/')
  .get(display)

export default router;