import Link from 'next/link';

export default function Badges() {
  return (
    <main>
      {/* Segment 1: Hero Section */}
      <section className="learner-hero-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content g-fade-left">
                <div className="premium-badge-tag"><i className="bi bi-patch-check"></i> Digital Badges</div>
                <h1 className="learner-heading animate-heading">Achievements, <span>earned and</span> <br /> worn proudly.</h1>
                <div className="hero-subheading mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '90%' }}>
                  Every skill, milestone, and micro-credential deserves more than a line on a resume. Showgrid badges are cryptographically sealed, instantly verifiable, and built to be shared.
                </div>
                <div className="hero-buttons d-flex align-items-center gap-3">
                  <div className="btn-fill-primary">
                    <Link href="#">Explore Badge Gallery <i className="bi bi-arrow-right"></i></Link>
                  </div>
                  <div className="btn-outline-primary">
                    <Link href="#">How Issuance Works</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 g-fade-right mt-5 mt-lg-0">
              <div className="inner-hero-img" style={{ position: 'relative' }}>
                <img src="/images/student-showgrid.webp" alt="" />
                
                <div className="mockup-card floating-card g-scale" style={{ position: 'absolute', top: '-15px', left: '-25px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 10px 20px', borderLeft: '4px solid var(--gold)', background: 'white' }}>
                  <i className="bi bi-award-fill text-warning" style={{ fontSize: '1.1rem' }}></i>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-blue)' }}>Leadership Badge Earned</span>
                </div>
                
                <div className="mockup-card floating-card g-scale" style={{ position: 'absolute', bottom: '25px', left: '-35px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 10px 20px', borderLeft: '4px solid var(--primary-blue)', background: 'white' }}>
                  <i className="bi bi-share-fill text-primary" style={{ fontSize: '1.1rem' }}></i>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-blue)' }}>Shared to LinkedIn</span>
                </div>
                
                <div className="mockup-card floating-card g-scale" style={{ position: 'absolute', top: '40%', right: '-25px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 10px 20px', borderLeft: '4px solid #0a8b52', background: 'white' }}>
                  <i className="bi bi-qr-code text-success" style={{ fontSize: '1.1rem' }}></i>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-blue)' }}>Scan to Verify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 2: Badge Gallery */}
      <section className="badges-section">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
              <div className="section-heading animate-heading mb-3"> Badges <span> worth earning </span> </div>
              <p className="text-muted mb-0">A glimpse of the credential categories issued across the Showgrid network — each one sealed, dated, and publicly verifiable.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="badge-gallery-card g-fade-up" style={{ animationDelay: '0s' }}>
                <div className="badge-medallion gold-tone"><img src="/images/badge-icon.png" alt="" /></div>
                <span className="badge-category">Academic</span>
                <h4>Academic Excellence</h4>
                <p>Top-tier grade achievement</p>
                <span className="badge-verified-pill"><i className="bi bi-patch-check-fill"></i> Verified</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="badge-gallery-card g-fade-up" style={{ animationDelay: '.1s' }}>
                <div className="badge-medallion"><img src="/images/badge-icon-2.png" alt="" /></div>
                <span className="badge-category">Leadership</span>
                <h4>Student Leadership</h4>
                <p>Council & club leadership roles</p>
                <span className="badge-verified-pill"><i className="bi bi-patch-check-fill"></i> Verified</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="badge-gallery-card g-fade-up" style={{ animationDelay: '.2s' }}>
                <div className="badge-medallion gold-tone"><img src="/images/badge-icon-3.png" alt="" /></div>
                <span className="badge-category">Technical</span>
                <h4>Technical Skill</h4>
                <p>Verified coding & tooling ability</p>
                <span className="badge-verified-pill"><i className="bi bi-patch-check-fill"></i> Verified</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="badge-gallery-card g-fade-up" style={{ animationDelay: '.3s' }}>
                <div className="badge-medallion"><img src="/images/badge-icon-4.png" alt="" /></div>
                <span className="badge-category">Community</span>
                <h4>Community Impact</h4>
                <p>Verified volunteering hours</p>
                <span className="badge-verified-pill"><i className="bi bi-patch-check-fill"></i> Verified</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="badge-gallery-card g-fade-up" style={{ animationDelay: '0s' }}>
                <div className="badge-medallion gold-tone"><img src="/images/badge-icon.png" alt="" /></div>
                <span className="badge-category">Research</span>
                <h4>Research Contributor</h4>
                <p>Published or co-authored work</p>
                <span className="badge-verified-pill"><i className="bi bi-patch-check-fill"></i> Verified</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="badge-gallery-card g-fade-up" style={{ animationDelay: '.1s' }}>
                <div className="badge-medallion"><img src="/images/badge-icon-2.png" alt="" /></div>
                <span className="badge-category">Industry</span>
                <h4>Industry Certified</h4>
                <p>Partner-endorsed skill credential</p>
                <span className="badge-verified-pill"><i className="bi bi-patch-check-fill"></i> Verified</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="badge-gallery-card g-fade-up" style={{ animationDelay: '.2s' }}>
                <div className="badge-medallion gold-tone"><img src="/images/badge-icon-3.png" alt="" /></div>
                <span className="badge-category">Soft Skill</span>
                <h4>Public Speaking</h4>
                <p>Assessed communication ability</p>
                <span className="badge-verified-pill"><i className="bi bi-patch-check-fill"></i> Verified</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="badge-gallery-card g-fade-up" style={{ animationDelay: '.3s' }}>
                <div className="badge-medallion"><img src="/images/badge-icon-4.png" alt="" /></div>
                <span className="badge-category">Achievement</span>
                <h4>Competition Winner</h4>
                <p>Ranked event or hackathon result</p>
                <span className="badge-verified-pill"><i className="bi bi-patch-check-fill"></i> Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 3: Why Digital Badges */}
      <section className="badges-section alt-bg">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-heading animate-heading mb-3"> The anatomy of a <span> true credential </span> </div>
            <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>A badge on Showgrid isn't a sticker — it's a sealed, verifiable record that carries its proof wherever it goes.</p>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="why-badge-card g-fade-left">
                <div className="why-badge-icon-wrap"><i className="bi bi-shield-lock-fill"></i></div>
                <span className="why-badge-number">01</span>
                <div className="why-badge-label">Tamper-Proof</div>
                <h3>A seal that can't be faked.</h3>
                <p>Every badge is bound to a SHA-256 fingerprint at the moment of issuance — edit the artwork, and the seal breaks instantly.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="why-badge-card g-fade-up">
                <div className="why-badge-icon-wrap"><i className="bi bi-send-check-fill"></i></div>
                <span className="why-badge-number">02</span>
                <div className="why-badge-label">Portable Proof</div>
                <h3>Wear it anywhere.</h3>
                <p>Embed on LinkedIn, resumes, email signatures, or a personal site — one live link that always reflects the current status.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="why-badge-card g-fade-right">
                <div className="why-badge-icon-wrap"><i className="bi bi-qr-code-scan"></i></div>
                <span className="why-badge-number">03</span>
                <div className="why-badge-label">Instant Trust</div>
                <h3>Verified in one scan.</h3>
                <p>Recruiters and institutions confirm authenticity in seconds — no calls, no email chains, no guesswork.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 4: For Learners & For Instructors */}
      <section className="badges-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-heading animate-heading mb-3"> Built for <span> both sides </span> </div>
            <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>Whether you're earning the badge or issuing it, Showgrid keeps the process simple, sealed, and shareable.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="audience-panel learner-panel g-fade-left">
                <span className="audience-tag"><i className="bi bi-person-badge"></i> For Learners</span>
                <h3>Collect. Verify. Share.</h3>
                <ul className="audience-list">
                  <li>
                    <div className="audience-icon"><i className="bi bi-collection-fill"></i></div>
                    <div>
                      <strong>One passport, every badge</strong>
                      <span>All your earned badges live in a single Skill Passport, sorted and always up to date.</span>
                    </div>
                  </li>
                  <li>
                    <div className="audience-icon"><i className="bi bi-share-fill"></i></div>
                    <div>
                      <strong>Share with one link</strong>
                      <span>Drop a public, QR-ready link into applications, resumes, or your LinkedIn profile.</span>
                    </div>
                  </li>
                  <li>
                    <div className="audience-icon"><i className="bi bi-graph-up-arrow"></i></div>
                    <div>
                      <strong>Stand out to recruiters</strong>
                      <span>AI-tagged skills surface your badges to scholarships, internships, and job matches.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="audience-panel instructor-panel g-fade-right">
                <span className="audience-tag"><i className="bi bi-easel2-fill"></i> For Instructors</span>
                <h3>Issue at scale, without the risk.</h3>
                <ul className="audience-list">
                  <li>
                    <div className="audience-icon"><i className="bi bi-file-earmark-arrow-up-fill"></i></div>
                    <div>
                      <strong>Bulk issuance in minutes</strong>
                      <span>Upload a CSV and every row becomes a sealed, individually verifiable badge. </span>
                    </div>
                  </li>
                  <li>
                    <div className="audience-icon"><i className="bi bi-palette-fill"></i></div>
                    <div>
                      <strong>Your brand, every badge</strong>
                      <span>Design once with your institution's logo, colors, and signatory blocks — reused automatically.</span>
                    </div>
                  </li>
                  <li>
                    <div className="audience-icon"><i className="bi bi-x-octagon-fill"></i></div>
                    <div>
                      <strong>Revoke with confidence</strong>
                      <span>Made an error, or a badge no longer applies? Revocations propagate instantly everywhere it's shared.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 5: CTA / Trust band */}
      <section className="badge-cta-section">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="section-tag"><i className="bi bi-stars"></i> Start Earning</span>
              <h2>Every badge tells a story. <br /><em>Make yours verifiable.</em></h2>
              <p>Join the institutions and learners already building tamper-proof credential histories on Showgrid — sealed at issuance, valid for life.</p>
              <div className="hero-buttons d-flex align-items-center gap-3 mb-5 mb-lg-0">
                <div className="btn-fill-primary" style={{ background: 'var(--gold)' }}>
                  <Link href="#">Claim Your Badge <i className="bi bi-arrow-right"></i></Link>
                </div>
                <div className="btn-outline-primary" style={{ borderColor: '#fff', color: '#fff' }}>
                  <Link href="#" style={{ color: '#fff' }}>Talk to an Issuer</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="badge-stat-row justify-content-lg-end">
                <div className="stat-item">
                  <h3>12+</h3>
                  <span>Badge Categories</span>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <span>SHA-256 Sealed</span>
                </div>
                <div className="stat-item">
                  <h3>&lt;1s</h3>
                  <span>Verification Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
