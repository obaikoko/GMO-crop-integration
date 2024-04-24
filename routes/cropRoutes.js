import express from 'express';
import { getCrops, getCropById } from '../controllers/cropController.js';

const router = express.Router();

router.route('/').get(getCrops);
router.route('/:id').get(getCropById);

export default router;
