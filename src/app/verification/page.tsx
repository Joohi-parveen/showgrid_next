import Link from 'next/link';

export default function Verification() {
  return (
    <main>
      {/* Segment 1: Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="hero-content g-fade-left">
                <div className="section-tag"><i className="bi bi-stars"></i> Instant Authentication</div>
                <h1 className="learner-heading animate-heading">Instant authentication. <br /> <span> Zero friction.</span></h1>
                <div className="hero-subheading mb-4 text-muted" style={{ maxWidth: '90%' }}>
                  Verify candidate skills and credentials in seconds. If an achievement is on Showgrid, it is mathematically impossible to forge.
                </div>
                <div className="hero-buttons d-flex align-items-center gap-3">
                  <div className="btn-fill-primary">
                    <Link href="#">Test a Credential <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="inner-hero-img" style={{ position: 'relative' }}>
                <img src="/images/authenitcation.webp" alt="Authentication" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment 2: How Verification Works */}
      <section className="section-padding method-section" style={{ backgroundColor: '#f9f6ef', padding: '7rem 0' }}>
        <div className="container">

          <div className="row align-items-center mb-5 pb-3">
            <div className="col-lg-6">
              <div className="g-fade-left">
                <div className="section-tag"> <i className="bi bi-stars"></i> AUTOMATED PROCESS </div>
                <div className="section-heading mb-3"> One scan. <br /> <span>Absolute certainty.</span></div>
                <p className="section-subheading text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Verify student credentials instantly. The ledger performs automated, decentralized verification checks in under two seconds.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="workflow-timeline-wrapper">

                {/* Step 1 */}
                <div className="timeline-step-card g-fade-up" style={{ animationDelay: '0.1s', width: '30%' }}>
                  <div className="step-icon-wrapper">
                    <img src="/images/method-icon-4.png" alt="Icon 1" />
                  </div>
                  <div className="step-card-body" style={{ minHeight: '250px' }}>
                    <div className="step-num-badge">01</div>
                    <h4>Scan or Click</h4>
                    <p>Employers scan the QR code on a physical resume or click the candidate's public profile link.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="timeline-step-card g-fade-up" style={{ animationDelay: '0.2s', width: '30%' }}>
                  <div className="step-icon-wrapper">
                    <img src="/images/method-icon-3.png" alt="Icon 2" />
                  </div>
                  <div className="step-card-body" style={{ minHeight: '250px' }}>
                    <div className="step-num-badge">02</div>
                    <h4>Live Ledger Check</h4>
                    <p>The system instantly checks the unique UID hash value against the issuing organization's live secure database records.</p>
                  </div>
                </div>

                {/* Step 3: Featured Highlight Step */}
                <div className="timeline-step-card featured-step g-scale" style={{ animationDelay: '0.3s', width: '30%' }}>
                  <div className="step-icon-wrapper">
                    <img src="/images/method-icon-2.png" alt="Icon 3" />
                  </div>
                  <div className="step-card-body" style={{ minHeight: '250px' }}>
                    <div className="step-num-badge">03</div>
                    <h4>Instant Result</h4>
                    <p>See the live verification status—Valid or Revoked—alongside official credentials and branding instantly. No phone calls required.</p>
                    <span className="method-badge">Real-Time Verification</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Segment 3: The Cryptographic Backbone (Dark Blue UI block style) */}
      <section className="section-padding design-section" style={{ padding: '7rem 0' }}>
        <div className="container">
          <div className="row align-items-center">

            {/* Left Column: Copy */}
            <div className="col-lg-6 pe-lg-5">
              <div className="g-fade-left">
                <div className="section-tag text-white"><i className="bi bi-stars"></i> Cryptographic Backbone</div>
                <h2 className="section-heading text-white mb-3">Security is our <br /> <span>core infrastructure.</span></h2>
                <p className="section-subheading text-white mb-4" style={{ opacity: 0.85, lineHeight: 1.6 }}>
                  Every achievement issued through Showgrid is sealed with a unique SHA-256 fingerprint. Any attempt to alter a downloaded record instantly breaks the seal, rendering the verification invalid. Because the platform is read-only by default, absolute integrity is maintained.
                </p>

                <div className="design-flex mt-4" style={{ display: 'flex', gap: '20px' }}>
                  <div className="design-box" style={{ flex: 1 }}>
                    <i className="bi bi-patch-check" style={{ fontSize: '2.2rem', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}></i>
                    <h5 className="text-white" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '4px' }}>SHA-256 Sealing</h5>
                    <p className="m-0 text-white" style={{ fontSize: '0.8rem', opacity: 0.7 }}>Unique file hashes matching active ledgers.</p>
                  </div>
                  <div className="design-box" style={{ flex: 1 }}>
                    <i className="bi bi-database-check" style={{ fontSize: '2.2rem', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}></i>
                    <h5 className="text-white" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '4px' }}>Read-Only Grid</h5>
                    <p className="m-0 text-white" style={{ fontSize: '0.8rem', opacity: 0.7 }}>Immutable profiles that only issuers can amend.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Security illustration mockup */}
            <div className="col-lg-6 mt-5 mt-lg-0">
               <div className="inner-hero-img" style={{ position: 'relative' }}>
                  <img src="/images/certificate.webp" alt="Certificate Security" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
