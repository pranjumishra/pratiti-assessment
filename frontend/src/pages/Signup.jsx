import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="position-absolute top-0 start-0 p-3">
        <button className="btn btn-light" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>
      <div className="text-center">
        <h2>Sign up or Login</h2>
        <div className="d-grid gap-2 col-12 mx-auto my-4">
          <button className="btn btn-light border" type="button">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" className="me-2" />
            Sign-up with Google
          </button>
          <button className="btn btn-outline-secondary" type="button">
            Already have an account?
          </button>
        </div>
        <p>
          Already have an account? <a>Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
