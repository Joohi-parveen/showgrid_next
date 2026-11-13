import Link from 'next/link';

export default function Organizations() {
  return (
    <main>

      <section className="hero-section Inner-hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content Inner-hero-content g-fade-left">
                <div className="section-tag"><i className="bi bi-stars"></i> For Organizations</div>
                <h1 className="hero-heading animate-heading">Protect your brand. <br /> <span>Empower</span> your learners.</h1>
                <div className="hero-subheading mb-4">
                  Issue tamper-proof, branded credentials at scale. From universities and vocational academies to sports federations, ShowGrid gives organizations the infrastructure to turn static records into verified digital identities.
                </div>
                <div className="hero-buttons d-flex align-items-center gap-3">
                  <div className="btn-fill-primary">
                    <Link href="#">Register Your Organization <i className="bi bi-arrow-right"></i></Link>
                  </div>
                  <div className="btn-outline-primary">
                    <Link href="#">Talk to Sales</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 g-fade-right">
              <div className="inner-hero-img"><img src="/images/dashboard-overview.webp" alt="" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding method-section" style={{ backgroundColor: '#f9f6ef' }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="g-fade-left">
                <div className="section-tag"> <i className="bi bi-stars"></i> AUTOMATED GENERATION </div>
                <div className="section-heading mb-3"> Seamless issuance <span>workflow.</span></div>
                <div className="section-subheading">
                  Upload one CSV file and instantly issue hundreds or thousands of secure credentials while keeping your branding, signatures, and cryptographic validation completely automated.
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="workflow-timeline-wrapper">
                
                <div className="timeline-step-card g-fade-up" style={{ animationDelay: '0.1s' }}>
                  <div className="step-icon-wrapper">
                    <img src="/images/method-icon-1.png" alt="Icon 1" />
                  </div>
                  <div className="step-card-body">
                    <div className="step-num-badge">01</div>
                    <h4>Brand Portal</h4>
                    <p>Inject your logo; every certificate and grid inherits your organization's unique identity.</p>
                  </div>
                </div>
                
                <div className="timeline-step-card g-fade-up" style={{ animationDelay: '0.2s' }}>
                  <div className="step-icon-wrapper">
                    <img src="/images/method-icon-2.png" alt="Icon 2" />
                  </div>
                  <div className="step-card-body">
                    <div className="step-num-badge">02</div>
                    <h4>Design Template</h4>
                    <p>Define fields, body language, and signatures. Preview the certificate live.</p>
                  </div>
                </div>
                
                <div className="timeline-step-card featured-step g-scale" style={{ animationDelay: '0.3s' }}>
                  <div className="step-icon-wrapper">
                    <img src="/images/method-icon-3.png" alt="Icon 3" />
                  </div>
                  <div className="step-card-body">
                    <div className="step-num-badge">03</div>
                    <h4>Issue in Bulk</h4>
                    <p>Upload a CSV. Each row becomes a sealed credential with a unique UID.</p>
                    <span className="method-badge">CSV &bull; 1000 Certs &bull; 1-Click</span>
                  </div>
                </div>
                
                <div className="timeline-step-card g-fade-up" style={{ animationDelay: '0.4s' }}>
                  <div className="step-icon-wrapper">
                    <img src="/images/method-icon-4.png" alt="Icon 4" />
                  </div>
                  <div className="step-card-body">
                    <div className="step-num-badge">04</div>
                    <h4>Verifiers Verify</h4>
                    <p>Public route + QR. Recipients link to grids; revocations propagate immediately.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding bg-white">
        <div className="container">
          <div className="row align-items-center">
          
            <div className="col-lg-6 g-fade-left mb-5 mb-lg-0">
              <div className="inner-hero-img">
                <img src="/images/dashboard-overview.webp" alt="" />
              </div>
            </div>
            

            <div className="col-lg-6 ps-lg-5">
              <div className="g-fade-right">
                <div className="section-tag"><i className="bi bi-stars"></i> Infrastructure</div>
                <h2 className="section-heading mb-3">Engineered for secure <span>governance.</span></h2>
                <p className="section-subheading mb-4 text-muted">
                  Maintain absolute control over your issued records. With tenant-level isolation, real-time revocation capabilities, and automated batch issuing, ShowGrid reduces administrative overhead while eliminating the risk of credential fraud across any industry.
                </p>
                

                <div className="governance-features-grid mt-4">
                  

                  <div className="gov-feature-card">
                    <div className="gov-feature-icon">
                      <i className="bi bi-database-fill-lock"></i>
                    </div>
                    <div className="gov-feature-content">
                      <h5>Tenant Isolation</h5>
                      <p>Isolated databases guard student lists and academic structures from shared leaks.</p>
                    </div>
                  </div>

                  <div className="gov-feature-card">
                    <div className="gov-feature-icon">
                      <i className="bi bi-shield-slash-fill"></i>
                    </div>
                    <div className="gov-feature-content">
                      <h5>Real-Time Revocation</h5>
                      <p>Instantly revoke or modify certificates in one click without replacing PDFs.</p>
                    </div>
                  </div>

                  <div className="gov-feature-card">
                    <div className="gov-feature-icon">
                      <i className="bi bi-lightning-charge-fill"></i>
                    </div>
                    <div className="gov-feature-content">
                      <h5>Automated Batch Issuing</h5>
                      <p>Seal hundreds of credentials from a single spreadsheet in seconds.</p>
                    </div>
                  </div>

                  <div className="gov-feature-card">
                    <div className="gov-feature-icon">
                      <i className="bi bi-safe2-fill"></i>
                    </div>
                    <div className="gov-feature-content">
                      <h5>Enterprise Security</h5>
                      <p>Bank-grade protection protocols with full activity trail logs and dual signatures.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
