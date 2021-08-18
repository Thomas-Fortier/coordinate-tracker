import express from 'express';
import CoordinatesController from '../controllers/coordinates.controller.js';

const router = express.Router();

// Routes
router.route('/').get(CoordinatesController.findAll);
router.route('/').post(CoordinatesController.post);
router.route('/:id').delete(CoordinatesController.delete);

export default router;