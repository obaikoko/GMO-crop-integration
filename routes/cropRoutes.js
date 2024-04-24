import express from 'express';
import {
  getCrops,
  getCropById,
  addCrop,
} from '../controllers/cropController.js';

const router = express.Router();

router.route('/').post(addCrop).get(getCrops);
router.route('/:id').get(getCropById);

export default router;
