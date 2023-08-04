import React from 'react';

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Welcome to our website!</h1>
              <p className="card-text text-center">
                Thank you for visiting. We are excited to have you here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
