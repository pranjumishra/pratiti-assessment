import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleTryForFree = () => {
    navigate('/get-started');
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">HO</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          {/* <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Help</a></li> */}
          <li className="nav-item"><Link to="/signup" className="nav-link">Sign up</Link></li>
        </ul>
      </header>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold">Create content 10x faster with AI - in-English or Hindi</h1>
          <ul className="list-unstyled">
            <li>Write blogs, social posts,emails in seconds.</li>
            <li>Supports multiple tanguages</li>
          </ul>
          <button className="btn btn-dark btn-lg" type="button" onClick={handleTryForFree}>Try for Free</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://picsum.photos/200/150?random=1" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Blog Posts</h5>
              <p className="card-text">Generate engaging blog posts in minutes.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://picsum.photos/200/150?random=2" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Social Media</h5>
              <p className="card-text">Create captivating social media content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://picsum.photos/200/150?random=3" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Emails</h5>
              <p className="card-text">Draft professional emails in seconds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
