"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [role, setRole] = useState<'student' | 'institution'>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [registeredName, setRegisteredName] = useState('');

  // Handle query params on load
  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam === 'institution') {
      setRole('institution');
    } else {
      setRole('student');
    }
  }, [searchParams]);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password') as string;
    const confirm = formData.get('confirm') as string;
    
    const name = role === 'student' 
      ? formData.get('name') as string 
      : formData.get('instName') as string;

    if (password !== confirm) {
      alert("Passwords do not match. Please verify and try again.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setRegisteredName(name || 'User');
      setShowModal(true);
    }, 1200);
  };

  const closeModal = () => {
    setShowModal(false);
    router.push(`/signin?role=${role}`);
  };

  return (
    <main>
      <section className="auth-section">
        <div className="container d-flex justify-content-center">
          
          <div className="auth-split-container">
            
            {/* Left Side Sidebar (Visual Context Panel) */}
            <div className="auth-sidebar">
              <div>
                <span className="auth-sidebar-tag">
                  <i className="bi bi-shield-check"></i> Showgrid Register
                </span>
                <h2 className="auth-sidebar-title">Join the credential <span>network.</span></h2>
                <p className="auth-sidebar-desc">
                  Establish your verified identity. Purchase courses, learn, and showcase tamper-proof accomplishments on the live ledger.
                </p>
              </div>
              
              <div className="auth-sidebar-bullets">
                <div className="auth-sidebar-bullet">
                  <i className="bi bi-person-check-fill"></i>
                  <div>
                    <div className="auth-sidebar-bullet-title">Personalized Skill Grid</div>
                    <div className="auth-sidebar-bullet-text">Display courses, badges, and academic credentials in a single link.</div>
                  </div>
                </div>
                <div className="auth-sidebar-bullet">
                  <i className="bi bi-graph-up-arrow"></i>
                  <div>
                    <div className="auth-sidebar-bullet-title">Monetize & Issue</div>
                    <div className="auth-sidebar-bullet-text">Institutions can publish digital courses and automate secure badge issuance.</div>
                  </div>
                </div>
              </div>

              <div className="auth-sidebar-footer">
                <span>Ac 2026 Showgrid</span>
                <span>SHA-256 Certified</span>
              </div>
            </div>

            {/* Right Side Form Panel (Clean, Compact and Multi-Column) */}
            <div className="auth-form-side">
              <div>
                <h2 className="auth-title">Create Account</h2>
                <p className="auth-subtitle">Join Showgrid today</p>
              </div>

              {/* Role Selector Tabs */}
              <div className="auth-tabs">
                <button 
                  type="button" 
                  className={`auth-tab-btn ${role === 'student' ? 'active' : ''}`} 
                  onClick={() => setRole('student')}
                >
                  <i className="bi bi-mortarboard"></i> Student / Learner
                </button>
                <button 
                  type="button" 
                  className={`auth-tab-btn ${role === 'institution' ? 'active' : ''}`} 
                  onClick={() => setRole('institution')}
                >
                  <i className="bi bi-briefcase"></i> Institution
                </button>
              </div>

              {/* Form */}
              <form id="register-form" onSubmit={handleRegister}>
                
                {/* Dynamic Fields Container based on state */}
                {role === 'student' ? (
                  <>
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="auth-form-group">
                          <label className="auth-form-label" htmlFor="reg-name">Full Name</label>
                          <div className="auth-input-wrapper">
                            <input type="text" id="reg-name" name="name" className="auth-form-input" placeholder="e.g. Jane Doe" required autoComplete="name" />
                            <i className="bi bi-person"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="auth-form-group">
                          <label className="auth-form-label" htmlFor="reg-email">Email Address</label>
                          <div className="auth-input-wrapper">
                            <input type="email" id="reg-email" name="email" className="auth-form-input" placeholder="jane@domain.com" required autoComplete="email" />
                            <i className="bi bi-envelope"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="auth-form-group">
                          <label className="auth-form-label" htmlFor="reg-inst-name">Institution Name</label>
                          <div className="auth-input-wrapper">
                            <input type="text" id="reg-inst-name" name="instName" className="auth-form-input" placeholder="e.g. Academy Online" required />
                            <i className="bi bi-building"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="auth-form-group">
                          <label className="auth-form-label" htmlFor="reg-rep-name">Authorized Rep Name</label>
                          <div className="auth-input-wrapper">
                            <input type="text" id="reg-rep-name" name="repName" className="auth-form-input" placeholder="e.g. Prof. Alan Smith" required />
                            <i className="bi bi-person-badge"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="auth-form-group">
                      <label className="auth-form-label" htmlFor="reg-inst-email">Official Contact Email</label>
                      <div className="auth-input-wrapper">
                        <input type="email" id="reg-inst-email" name="email" className="auth-form-input" placeholder="registrar@academy.edu" required autoComplete="email" />
                        <i className="bi bi-envelope"></i>
                      </div>
                    </div>
                  </>
                )}

                {/* Common Password Fields */}
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="auth-form-group">
                      <label className="auth-form-label" htmlFor="reg-password">Password</label>
                      <div className="auth-input-wrapper">
                        <input type="password" id="reg-password" name="password" className="auth-form-input" placeholder="Min. 8 characters" required autoComplete="new-password" />
                        <i className="bi bi-lock"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="auth-form-group">
                      <label className="auth-form-label" htmlFor="reg-confirm">Confirm Password</label>
                      <div className="auth-input-wrapper">
                        <input type="password" id="reg-confirm" name="confirm" className="auth-form-input" placeholder="Confirm password" required autoComplete="new-password" />
                        <i className="bi bi-shield-lock"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="auth-form-options">
                  <label className="auth-checkbox-label">
                    <input type="checkbox" id="terms-agree" required />
                    I agree to the Terms & Privacy Policy
                  </label>
                </div>

                <button type="submit" className="auth-btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" style={{ borderWidth: '0.15em' }}></span> Registering Account...
                    </>
                  ) : (
                    <>
                      {role === 'student' ? 'Register as Student' : 'Register as Institution'} <i className="bi bi-arrow-right"></i>
                    </>
                  )}
                </button>

              </form>

              <div className="auth-footer">
                Already have an account? <Link href={`/signin?role=${role}`}>Sign In here</Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Success Modal Overlay */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(12, 24, 82, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, backdropFilter: 'blur(8px)' }}>
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', maxWidth: '400px', width: '90%', boxShadow: '0 15px 35px rgba(0,0,0,0.2)', borderTop: '5px solid var(--gold)', transform: 'scale(0.9)', transition: 'all 0.3s ease' }}>
            <i className="bi bi-shield-check-fill" style={{ fontSize: '3.5rem', color: 'var(--gold)', display: 'block', marginBottom: '1rem' }}></i>
            <h4 style={{ color: 'var(--navy-blue)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Registration Successful!</h4>
            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
              Welcome to Showgrid, <b>{registeredName}</b>. Your account has been provisioned as a <b>{role === 'student' ? 'Student / Learner' : 'Institution / Organizer'}</b>.
            </p>
            <button onClick={closeModal} style={{ background: 'var(--secondary-blue)', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', width: '100%', transition: 'background 0.3s' }}>
              Proceed to Sign In
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
