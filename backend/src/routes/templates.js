import express from 'express';
import templateController from '../controllers/template.controller.js';

const router = express.Router();

router.get('/', templateController.getAllTemplates);
router.post('/', templateController.createTemplate);

export default router;
