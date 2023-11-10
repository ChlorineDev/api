import { Router } from 'express';
import { getAllCats, createCat, updateCat } from '../controllers/cat.js';

const router = Router();

router.route('/')
  .get(getAllCats);

router.route('/')
  .post(createCat)

router.route('/:id')
  .patch(updateCat)

export default router;