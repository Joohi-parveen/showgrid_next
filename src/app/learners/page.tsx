import Link from 'next/link';

export default function Learners() {
  return (
    <main>
      {/* Segment 1: Hero Section (Modern styling) */}
      <section className="learner-hero-bg">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="hero-content g-fade-left">
                <div className="premium-badge-tag"><i className="bi bi-person-badge"></i> For Learners & Alumni</div>
                <h1 className="learner-heading animate-heading">A <span>passport,</span> <br /> not a folder.</h1>
                <div className="hero-subheading mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  Stop sending unverified PDFs. Consolidate your degrees, vocational certifications, and AI-tagged micro-credentials into a single, unified digital identity.
                </div>
                <div className="hero-buttons d-flex align-items-center gap-3">
                  <div className="btn-fill-primary">
                    <Link href="#">Claim Your Passport <i className="bi bi-arrow-right"></i></Link>
                  </div>
                  <div className="btn-outline-primary">
                    <Link href="#">View Sample Passport</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 g-fade-right mt-5 mt-lg-0">
              <div className="inner-hero-img" style={{ position: 'relative' }}>
                <img src="/images/student-showgrid.webp" alt="" />

                {/* Floating modern micro-cards for interactive 3D wow factor */}
                <div className="mockup-card floating-card g-scale" style={{ position: 'absolute', top: '-15px', left: '-25px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 10px 20px', borderLeft: '4px solid var(--gold)', background: 'white' }}>
                  <i className="bi bi-patch-check-fill text-success" style={{ fontSize: '1.1rem' }}></i>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-blue)' }}>Verified B.Sc. Degree</span>
                </div>

                <div className="mockup-card floating-card g-scale" style={{ position: 'absolute', bottom: '25px', left: '-35px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 10px 20px', borderLeft: '4px solid var(--primary-blue)', background: 'white' }}>
                  <i className="bi bi-cpu-fill text-primary" style={{ fontSize: '1.1rem' }}></i>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-blue)' }}>AI Tag: Python & Data Engineering</span>
                </div>

                <div className="mockup-card floating-card g-scale" style={{ position: 'absolute', top: '40%', right: '-25px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 10px 20px', borderLeft: '4px solid #0a8b52', background: 'white' }}>
                  <i className="bi bi-shield-check text-success" style={{ fontSize: '1.1rem' }}></i>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-blue)' }}>Cryptographic Seal: Secured</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment 2: Modern Grid Features */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', padding: '7rem 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 g-fade-left">
              <div className="inner-hero-img ms-auto"><img src="/images/dashboard-overview.webp" alt="" /></div>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5 g-fade-right">
              <div>
                <div className="section-tag"><i className="bi bi-stars"></i> Career Architecture</div>
                <h2 className="section-heading mb-3">Prove what <br /> you <span>can do.</span></h2>
                <p className="section-subheading text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Your ShowGrid Passport becomes a living portfolio of verified achievements that grows throughout your academic and professional journey. Integrate certificates, accolades, and public speaking credits directly into one credible portal.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="modern-learner-grid">
                {/* Milestone 1 */}
                <div className="modern-learner-card g-fade-up" style={{ animationDelay: '0.1s' }}>
                  <div className="card-step-badge">01</div>
                  <div className="modern-card-icon"><i className="bi bi-patch-check-fill"></i></div>
                  <h3>Verified Grid</h3>
                  <p>Say goodbye to self-reported resumes. Your curated grid aggregates achievements generated directly by trusted organizations, making your accomplishments instantly credible.</p>
                  <div className="card-highlight-txt">✧ Direct-from-Issuer Credentials</div>
                </div>

                {/* Milestone 2 */}
                <div className="modern-learner-card g-fade-up" style={{ animationDelay: '0.2s' }}>
                  <div className="card-step-badge">02</div>
                  <div className="modern-card-icon"><i className="bi bi-shield-fill-check"></i></div>
                  <h3>Trusted Ledger</h3>
                  <p>Every credential is protected through cryptographic ledger checks and linked directly to secure organization records, eliminating PDF tampering and fraud.</p>
                  <div className="card-highlight-txt">✧ 100% Cryptographic Security</div>
                </div>

                {/* Milestone 3 */}
                <div className="modern-learner-card g-fade-up" style={{ animationDelay: '0.3s' }}>
                  <div className="card-step-badge">03</div>
                  <div className="modern-card-icon"><i className="bi bi-share-fill"></i></div>
                  <h3>Shareable Identity</h3>
                  <p>Share your professional identity anywhere using your personalized public profile, QR codes, or links optimized for LinkedIn, resumes, and portfolios.</p>
                  <div className="card-highlight-txt">✧ One-Click Public Profiles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 3: Redesigned Interactive Journey Indicator */}
      <section className="journey-section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="g-fade-up text-center mb-4">
                <div className="section-tag"><i className="bi bi-stars"></i> Interactive Journey</div>
                <h2 className="section-heading">Your path to verified <span>visibility.</span></h2>
                <p className="section-subheading text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
                  Watch your professional credentials transform from unverified documents into active career opportunities.
                </p>
              </div>

              <div className="modern-journey-flow">
                {/* Node 1 */}
                <div className="journey-step-node">
                  <div className="journey-step-circle"><i className="bi bi-mortarboard-fill"></i></div>
                  <div className="journey-step-label">Earn</div>
                  <div className="journey-step-desc">Issuers seal achievements directly on the ledger.</div>
                </div>

                {/* Node 2 */}
                <div className="journey-step-node">
                  <div className="journey-step-circle"><i className="bi bi-cpu-fill"></i></div>
                  <div className="journey-step-label">AI Tagging</div>
                  <div className="journey-step-desc">ShowGrid adds verified, industry skills.</div>
                </div>

                {/* Node 3 */}
                <div className="journey-step-node">
                  <div className="journey-step-circle"><i className="bi bi-person-badge-fill"></i></div>
                  <div className="journey-step-label">Passport</div>
                  <div className="journey-step-desc">Consolidate milestones in one private hub.</div>
                </div>

                {/* Node 4 */}
                <div className="journey-step-node">
                  <div className="journey-step-circle"><i className="bi bi-grid-3x3-gap-fill"></i></div>
                  <div className="journey-step-label">Portfolio</div>
                  <div className="journey-step-desc">Publish a clean public profile and share.</div>
                </div>

                {/* Node 5 */}
                <div className="journey-step-node">
                  <div className="journey-step-circle"><i className="bi bi-briefcase-fill"></i></div>
                  <div className="journey-step-label">Opportunities</div>
                  <div className="journey-step-desc">Attract admissions, awards, and careers.</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
