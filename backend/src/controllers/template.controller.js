import templateService from '../services/template.service.js';

const getAllTemplates = (req, res) => {
  try {
    const templates = templateService.getAllTemplates();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving templates' });
  }
};

const createTemplate = (req, res) => {
  try {
    const newTemplate = templateService.createTemplate(req.body);
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(500).json({ message: 'Error creating template' });
  }
};

export default {
  getAllTemplates,
  createTemplate,
};
