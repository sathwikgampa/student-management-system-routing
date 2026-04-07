import React from 'react';
// Import specific icons from Font Awesome (fa)
import { FaUserCircle, FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div className="card shadow" style={{ width: '400px', borderRadius: '15px' }}>
        <div className="card-body">
          {/* Added a large user icon at the top */}
          <div className="text-center mb-4">
            <FaUserCircle size={50} className="text-primary" />
            <h3 className="card-title mt-2">Student Login</h3>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label">
                <FaUserCircle className="me-2" /> Email address
              </label>
              <input type="email" className="form-control" placeholder="name@vnrvjiet.in" required />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <FaLock className="me-2" /> Password
              </label>
              <input type="password" className="form-control" placeholder="Enter Password" required />
            </div>

            <button className="btn btn-primary w-100 py-2 fw-bold">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;