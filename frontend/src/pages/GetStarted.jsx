import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const [goal, setGoal] = useState('');
  const [tone, setTone] = useState('');
  const [language, setLanguage] = useState('english');
  const navigate = useNavigate();

  const handleContinue = () => {
    const data = { goal, tone, language };
    fetch('http://localhost:5001/api/templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      navigate('/templates');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container p-5">
        <h2>Let's get you started!</h2>
        <div className="my-4">
          <p className="mb-2">Choose content goal:</p>
          <div className="d-flex gap-2">
            <button className={`btn ${goal === 'Blog Post' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setGoal('Blog Post')}>Blog Post</button>
            <button className={`btn ${goal === 'Instagram Caption' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setGoal('Instagram Caption')}>Instagram Caption</button>
            <button className={`btn ${goal === 'Email Newsletter' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setGoal('Email Newsletter')}>Email Newsletter</button>
            <button className={`btn ${goal === 'Product Description' ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setGoal('Product Description')}>Product Description</button>
          </div>
        </div>
        <div className="my-4">
          <p className="mb-2">Pick tone:</p>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="tone" id="friendly" value="friendly" onChange={(e) => setTone(e.target.value)} />
            <label className="form-check-label" htmlFor="friendly">Friendly</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="tone" id="professional" value="professional" onChange={(e) => setTone(e.target.value)} />
            <label className="form-check-label" htmlFor="professional">Professional</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="tone" id="witty" value="witty" onChange={(e) => setTone(e.target.value)} />
            <label className="form-check-label" htmlFor="witty">Witty</label>
          </div>
        </div>
        <div className="my-4">
          <p className="mb-2">Choose language:</p>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="language" id="english" value="english" defaultChecked onChange={(e) => setLanguage(e.target.value)} />
            <label className="form-check-label" htmlFor="english">English</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="language" id="hindi" value="hindi" onChange={(e) => setLanguage(e.target.value)} />
            <label className="form-check-label" htmlFor="hindi">Hindi</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="language" id="marathi" value="marathi" onChange={(e) => setLanguage(e.target.value)} />
            <label className="form-check-label" htmlFor="marathi">Marathi</label>
          </div>
        </div>
        <button className="btn btn-secondary" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default GetStarted;
