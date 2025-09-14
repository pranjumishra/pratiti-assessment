const templates = [
  { id: 1, name: 'Sample Blog Post', description: 'This is a sample template for a friendly blog post.', language: 'English', created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() },
  { id: 2, name: 'Sample Instagram Caption', description: 'A witty caption for your next post.', language: 'English', created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() },
  { id: 3, name: 'Email Newsletter', description: 'A professional newsletter template.', language: 'English', created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() },
];

const getAllTemplates = () => {
  return templates;
};

const createTemplate = (templateData) => {
  const newTemplate = {
    id: templates.length + 1,
    name: templateData.goal,
    description: `A ${templateData.tone} template for ${templateData.goal}.`,
    language: templateData.language,
    created_at: new Date().toISOString(),
  };
  templates.push(newTemplate);
  return newTemplate;
};

export default {
  getAllTemplates,
  createTemplate,
};
