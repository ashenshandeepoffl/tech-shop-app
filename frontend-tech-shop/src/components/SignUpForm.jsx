import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCalendarAlt } from 'react-icons/fa';

const SignUpForm = () => {
  const [gender, setGender] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(false);

  // Function to handle Google Sign-Up
  const handleGoogleSignUp = () => {
    const googleAuthUrl = 'https://yourapi.com/auth/google';
    window.location.href = googleAuthUrl;
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg border-0 w-100" style={{ maxWidth: '900px', borderRadius: '15px' }}>
        <div className="row g-0">
          
          {/* Left Section with Conditional Rendering */}
          <div
            className={`col-md-4 d-flex flex-column align-items-center justify-content-center text-center text-white p-4 position-relative ${isLoginMode ? 'order-md-2' : ''}`}
            style={{
              backgroundImage: 'url("/images/reg.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px 0 0 15px',
              overflow: 'hidden',
              minHeight: '100%' // Ensures full height on mobile
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 1,
              }}
            ></div>

            <div style={{ zIndex: 2, position: 'relative' }}>
              <h2 className="fw-bold mt-4">{isLoginMode ? 'Welcome Back' : 'Welcome'}</h2>
              <p className="lead" style={{ fontSize: '1rem' }}>
                {isLoginMode ? 'Sign in to access your account' : 'Sign up with your Google account!'}
              </p>
              {!isLoginMode && (
                <button
                  onClick={handleGoogleSignUp}
                  className="btn btn-light mt-3"
                  style={{
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // Center button content
                    padding: '0.5rem 1.5rem',
                    fontWeight: 'bold',
                    margin: '0 auto',
                  }}
                >
                  <img
                    src="/images/gicon.png"
                    alt="Google G Icon"
                    style={{ width: '20px', height: '20px', marginRight: '0.5rem' }}
                  />
                  Sign Up with Google
                </button>
              )}
              <div className="text-center mt-4">
                <p className="mb-0 mt-4" style={{ fontSize: '0.9rem' }}>{isLoginMode ? 'New here?' : 'Already have an account?'}</p>
                <button
                  onClick={() => setIsLoginMode(!isLoginMode)}
                  className="btn btn-outline-light mt-2"
                  style={{ borderRadius: '25px' }}
                >
                  {isLoginMode ? 'Sign Up' : 'Sign In'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Form with Transition */}
          <div className={`col-md-8 p-5 ${isLoginMode ? 'order-md-1' : ''}`} style={{ transition: 'all 0.5s ease' }}>
            <h2 className="text-center fw-bold mb-4">{isLoginMode ? 'Sign In' : 'Sign Up'}</h2>
            <form>
              <div className="row g-3">
                
                {isLoginMode ? (
                  // Sign In Form Fields
                  <>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Your Email</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaEnvelope /></span>
                        <input type="email" className="form-control border border-dark" id="email" placeholder="you@example.com" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaLock /></span>
                        <input type="password" className="form-control border border-dark" id="password" placeholder="********" required />
                      </div>
                    </div>
                  </>
                ) : (
                  // Sign Up Form Fields
                  <>
                    <div className="col-12 col-md-6">
                      <label htmlFor="username" className="form-label">Username</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaUser /></span>
                        <input type="text" className="form-control border border-dark" id="username" placeholder="Username" required />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaUser /></span>
                        <input type="text" className="form-control border border-dark" id="firstName" placeholder="First Name" required />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaUser /></span>
                        <input type="text" className="form-control border border-dark" id="lastName" placeholder="Last Name" required />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaCalendarAlt /></span>
                        <input type="date" className="form-control border border-dark" id="dateOfBirth" required />
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Gender</label>
                      <div className="d-flex gap-2 mt-2">
                        <button
                          type="button"
                          className={`btn ${gender === 'Male' ? 'btn-primary text-white' : 'btn-outline-dark'} w-20`}
                          onClick={() => setGender('Male')}
                        >
                          Male
                        </button>
                        <button
                          type="button"
                          className={`btn ${gender === 'Female' ? 'btn-primary text-white' : 'btn-outline-dark'} w-20`}
                          onClick={() => setGender('Female')}
                        >
                          Female
                        </button>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Your Email</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaEnvelope /></span>
                        <input type="email" className="form-control border border-dark" id="email" placeholder="you@example.com" required />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="password" className="form-label">Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaLock /></span>
                        <input type="password" className="form-control border border-dark" id="password" placeholder="********" required />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaLock /></span>
                        <input type="password" className="form-control border border-dark" id="confirmPassword" placeholder="********" required />
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border border-dark text-dark"><FaPhone /></span>
                        <input type="tel" className="form-control border border-dark" id="contactNumber" placeholder="Phone Number" required />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-4 text-center">
                <button type="submit" className="btn btn-primary btn-lg w-100" style={{ borderRadius: '25px' }}>
                  {isLoginMode ? 'Sign In' : 'Sign Up'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
