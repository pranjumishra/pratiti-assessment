import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: '280px', height: '100vh' }}>
      <div className="d-flex align-items-center mb-4">
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#d3d3d3',
          marginRight: '10px'
        }}></div>
      </div>
      <Link to="/get-started" className="btn btn-light border mb-3 text-start">+ New Content</Link>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/templates" className="nav-link link-dark">
            Templates
          </Link>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            English
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
