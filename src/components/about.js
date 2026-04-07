import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-5">
          <h1 className="display-4 text-primary fw-bold">About VNR VJIET</h1>
          <p className="lead text-muted">Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology</p>
          <hr className="my-4" />
          
          <div className="row mt-4">
            <div className="col-md-8">
              <h3>Our Vision</h3>
              <p>
                To be a World Class University providing value-based education and research 
                in the field of Engineering and Management. Established in 1995, VNR VJIET 
                has been a pioneer in technical education in Hyderabad.
              </p>
              
              <h4 className="mt-4">Academic Excellence</h4>
              <ul>
                <li>Autonomous Institution (UGC)</li>
                <li>NAAC Accredited 'A++' Grade</li>
                <li>Ranked consistently among top Engineering colleges in Telangana</li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="p-3 bg-light rounded shadow-sm">
                <h5>Quick Stats</h5>
                <p className="mb-1"><strong>Founded:</strong> 1995</p>
                <p className="mb-1"><strong>Location:</strong> Bachupally, Hyderabad</p>
                <p className="mb-1"><strong>Affiliation:</strong> JNTU-H</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;