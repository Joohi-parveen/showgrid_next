"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Forgot() {
  const [role, setRole] = useState<'student' | 'institution'>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [emailSent, setEmailSent] = useState('');
  const router = useRouter();

  const handleRecovery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmailSent(email);
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
                  <i className="bi bi-shield-check"></i> Showgrid Recovery
                </span>
                <h2 className="auth-sidebar-title">Restore access to <span>your passport.</span></h2>
                <p className="auth-sidebar-desc">
                  Recover your credentials to regain access to your tamper-proof diplomas, student badges, and custom courses.
                </p>
              </div>
              
              <div className="auth-sidebar-bullets">
                <div className="auth-sidebar-bullet">
                  <i className="bi bi-key-fill"></i>
                  <div>
                    <div className="auth-sidebar-bullet-title">Secure Key Recovery</div>
                    <div className="auth-sidebar-bullet-text">We verify identity checks using bank-grade protocols to protect student records.</div>
                  </div>
                </div>
                <div className="auth-sidebar-bullet">
                  <i className="bi bi-envelope-check-fill"></i>
                  <div>
                    <div className="auth-sidebar-bullet-title">One-Click Link</div>
                    <div className="auth-sidebar-bullet-text">Click the reset link sent to your registered email to specify a new password.</div>
                  </div>
                </div>
              </div>

              <div className="auth-sidebar-footer">
                <span>Ac 2026 Showgrid</span>
                <span>SHA-256 Certified</span>
              </div>
            </div>

            {/* Right Side Form Panel (Clean and Compact) */}
            <div className="auth-form-side">
              <div>
                <h2 className="auth-title">Recover Password</h2>
                <p className="auth-subtitle">Enter your email address to receive a recovery link</p>
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
              <form id="recovery-form" onSubmit={handleRecovery}>
                
                <div className="auth-form-group">
                  <label className="auth-form-label" htmlFor="recovery-email">Email Address</label>
                  <div className="auth-input-wrapper">
                    <input type="email" id="recovery-email" name="email" className="auth-form-input" placeholder="name@domain.com" required autoComplete="email" />
                    <i className="bi bi-envelope"></i>
                  </div>
                </div>

                <button type="submit" className="auth-btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" style={{ borderWidth: '0.15em' }}></span> Dispatching...
                    </>
                  ) : (
                    <>
                      {role === 'student' ? 'Send Student Recovery Link' : 'Send Institution Recovery Link'} <i className="bi bi-arrow-right"></i>
                    </>
                  )}
                </button>

              </form>

              <div className="auth-footer">
                Remembered your password? <Link href={`/signin?role=${role}`}>Sign In here</Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Success Modal Overlay */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(12, 24, 82, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, backdropFilter: 'blur(8px)' }}>
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', maxWidth: '400px', width: '90%', boxShadow: '0 15px 35px rgba(0,0,0,0.2)', borderTop: '5px solid var(--gold)', transform: 'scale(0.9)', transition: 'all 0.3s ease' }}>
            <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem', color: '#198754', display: 'block', marginBottom: '1rem' }}></i>
            <h4 style={{ color: 'var(--navy-blue)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Recovery Link Dispatched</h4>
            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>A secure password reset link has been dispatched to <b>{emailSent}</b>. Please check your inbox and spam folders.</p>
            <button onClick={closeModal} style={{ background: 'var(--secondary-blue)', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', width: '100%', transition: 'background 0.3s' }}>
              Back to Sign In
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
