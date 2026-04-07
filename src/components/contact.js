import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card shadow border-0 p-4">
            <h2 className="fw-bold mb-4">Student Inquiry Form</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control" placeholder="Student Email" />
                </div>
              </div>
              <div className="mb-3">
                <select className="form-select">
                  <option>Select Department</option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>ECE</option>
                  <option>EEE</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button className="btn btn-primary px-5 py-2">Submit Request</button>
            </form>
          </div>
        </div>

        {/* VNR VJIET Details */}
        <div className="col-lg-5">
          <div className="bg-dark text-white p-4 rounded shadow h-100">
            <h3 className="mb-4">College Information</h3>
            <div className="mb-4">
              <h5>📍 Campus Address</h5>
              <p className="text-light">
                Vignana Jyothi Nagar, Pragathi Nagar,<br />
                Nizampet (S.O), Hyderabad,<br />
                Telangana - 500090
              </p>
            </div>
            <div className="mb-4">
              <h5>📞 General Queries</h5>
              <p className="text-light">040-2304 2758 / 59 / 60</p>
            </div>
            <div className="mb-4">
              <h5>✉️ Email Support</h5>
              <p className="text-light">postbox@vnrvjiet.ac.in</p>
            </div>
            <div className="mt-5">
              <h6>Follow Us</h6>
              <div className="d-flex gap-3 mt-2">
                <span className="badge bg-secondary">LinkedIn</span>
                <span className="badge bg-secondary">Twitter</span>
                <span className="badge bg-secondary">YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;