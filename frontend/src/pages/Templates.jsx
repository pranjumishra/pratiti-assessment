import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const Templates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/templates')
      .then(response => response.json())
      .then(data => setTemplates(data))
      .catch(error => console.error('Error fetching templates:', error));
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container p-5">
        <h2>Templates</h2>
        <p>Your created templates will appear here.</p>
        <div className="list-group">
          {templates.map(template => (
            <a href="#" key={template.id} className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{template.name}</h5>
                <small>{new Date(template.created_at).toLocaleString()}</small>
              </div>
              <p className="mb-1">{template.description}</p>
              <small>{template.language}</small>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
