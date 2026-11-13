"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [role, setRole] = useState<'student' | 'institution'>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle query params on load
  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam === 'institution') {
      setRole('institution');
    } else {
      setRole('student');
    }
  }, [searchParams]);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // For now, redirect to home page upon sign in
      router.push('/');
    }, 1200);
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
                  <i className="bi bi-shield-check"></i> Showgrid Secure
                </span>
                <h2 className="auth-sidebar-title">A passport, <br />not a <span>folder.</span></h2>
                <p className="auth-sidebar-desc">
                  Access the definitive source for tamper-proof digital credentials, course modules, and skill records.
                </p>
              </div>
              
              <div className="auth-sidebar-bullets">
                <div className="auth-sidebar-bullet">
                  <i className="bi bi-patch-check-fill"></i>
                  <div>
                    <div className="auth-sidebar-bullet-title">Tamper-Proof Ledger</div>
                    <div className="auth-sidebar-bullet-text">Every badge and diploma is secured via cryptographic hashing.</div>
                  </div>
                </div>
                <div className="auth-sidebar-bullet">
                  <i className="bi bi-bag-check-fill"></i>
                  <div>
                    <div className="auth-sidebar-bullet-title">Course Marketplace</div>
                    <div className="auth-sidebar-bullet-text">Instantly enroll in or monetize specialized training modules.</div>
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
                <h2 className="auth-title">Welcome Back</h2>
                <p className="auth-subtitle">Sign in to your learning dashboard</p>
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
              <form id="signin-form" onSubmit={handleSignIn}>
                
                <div className="auth-form-group">
                  <label className="auth-form-label" htmlFor="signin-email">Email Address</label>
                  <div className="auth-input-wrapper">
                    <input type="email" id="signin-email" name="email" className="auth-form-input" placeholder="name@domain.com" required autoComplete="email" />
                    <i className="bi bi-envelope"></i>
                  </div>
                </div>

                <div className="auth-form-group">
                  <label className="auth-form-label" htmlFor="signin-password">Password</label>
                  <div className="auth-input-wrapper">
                    <input type="password" id="signin-password" name="password" className="auth-form-input" placeholder="••••••••" required autoComplete="current-password" />
                    <i className="bi bi-lock"></i>
                  </div>
                </div>

                <div className="auth-form-options">
                  <label className="auth-checkbox-label">
                    <input type="checkbox" id="remember-me" name="remember" />
                    Remember me
                  </label>
                  <Link href={`/forgot?role=${role}`} className="auth-forgot-link">Forgot Password?</Link>
                </div>

                <button type="submit" className="auth-btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" style={{ borderWidth: '0.15em' }}></span> Signing In...
                    </>
                  ) : (
                    <>
                      {role === 'student' ? 'Sign In as Student' : 'Sign In as Institution'} <i className="bi bi-arrow-right"></i>
                    </>
                  )}
                </button>

              </form>

              <div className="auth-footer">
                Don't have an account? <Link href={`/register?role=${role}`}>Register here</Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
