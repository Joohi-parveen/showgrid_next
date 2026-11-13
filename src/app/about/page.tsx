import Link from 'next/link';

interface VisionItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const visionData: VisionItem[] = [
  {
    id: "vision-1",
    icon: "bi bi-patch-check-fill",
    title: "Unalterable Ledgers",
    description: "Every credential is sealed with a cryptographic fingerprint, rendering tampering mathematically impossible."
  },
  {
    id: "vision-2",
    icon: "bi bi-safe-fill",
    title: "Learner Sovereignty",
    description: "Students own their achievements permanently in one single dashboard. No lost papers, no costly re-issuing fees."
  }
];

interface PillarItem {
  id: string;
  delayClass: string;
  icon: string;
  title: string;
  description: string;
  tagIcon: string;
  tagText: string;
}

const pillarsData: PillarItem[] = [
  {
    id: "pillar-1",
    delayClass: "delay-1",
    icon: "bi bi-bank2",
    title: "For Institutions",
    description: "Empower your institution with advanced template customizers, instant bulk CSV uploads, and mathematical brand protection. Turn student records into verified, interactive career passports.",
    tagIcon: "bi bi-check-circle-fill",
    tagText: "Cryptographic Issuance"
  },
  {
    id: "pillar-2",
    delayClass: "delay-2",
    icon: "bi bi-mortarboard-fill",
    title: "For Students",
    description: "Consolidate your degrees, vocational certifications, and AI-tagged micro-credentials into a single, unified digital ledger passport that remains yours permanently.",
    tagIcon: "bi bi-check-circle-fill",
    tagText: "Unified Skill Grid"
  },
  {
    id: "pillar-3",
    delayClass: "delay-3",
    icon: "bi bi-shield-check",
    title: "For Verifiers",
    description: "Verify candidate credentials instantly. Employers and admissions officers scan a QR code or click a secure link to query the live issuer ledger in under two seconds.",
    tagIcon: "bi bi-check-circle-fill",
    tagText: "Real-time Validation"
  }
];

export default function About() {
  return (
    <main>
  
      <section className="about-hero-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="hero-content g-fade-left">
                <div className="about-hero-badge">
                  <i className="bi bi-info-circle-fill"></i> About ShowGrid
                </div>
                <h1 className="about-heading animate-heading">
                  Redefining how the world <br /> <span>trusts credentials.</span>
                </h1>
                <p className="about-hero-subheading text-muted">
                  ShowGrid is a verification-first digital credentials portal connecting learners, educational institutions, and employers. By eliminating static PDFs and replacing them with a secure, cryptographic passport, we build career architecture designed for modern trust.
                </p>
                <div className="hero-buttons d-flex align-items-center gap-3">
                  <div className="btn-fill-primary">
                    <Link href="/organizations">For Institutions <i className="bi bi-arrow-right"></i></Link>
                  </div>
                  <div className="btn-outline-primary">
                    <Link href="/learners">For Learners</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 g-fade-right mt-5 mt-lg-0">
              <div className="about-hero-img-wrapper">
                <img src="/images/design-trust.webp" alt="Showgrid Trust Infrastructure" className="about-hero-img" />
                <div className="mockup-card floating-card g-scale about-floating-card-1">
                  <i className="bi bi-shield-check text-success"></i>
                  <span>100% Verified Profile</span>
                </div>

                <div className="mockup-card floating-card g-scale about-floating-card-2">
                  <i className="bi bi-stars"></i>
                  <span>LMS Integrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="about-section-padding vision-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 g-fade-left mb-5 mb-lg-0 pe-lg-5">
              <div className="section-tag"><i className="bi bi-stars"></i> Our Core Mission</div>
              <h2 className="about-vision-heading mb-4">
                A future built on <br /> <span>verifiable trust.</span>
              </h2>
              <p className="about-vision-subheading text-muted mb-4">
                The traditional credential ecosystem is slow, fragmented, and vulnerable to misrepresentation. ShowGrid was founded to build a secure career architecture where students own their digital credentials, institutes issue them automatically, and employers trust them instantly.
              </p>
              <p className="about-vision-text-secondary text-muted">
                By bridging the gap between learning achievements and real-world opportunities, we help learners build a verified portfolio of lifelong learning milestones that are authentic, secure, and shareable.
              </p>
            </div>

            <div className="col-lg-6 col-md-12 g-fade-right">
              <div className="vision-cards-stack d-flex flex-column gap-4 about-vision-stack">
                {visionData.map((item) => (
                  <div key={item.id} className="vision-item d-flex gap-4 p-4 about-vision-card">
                    <div className="about-vision-icon-box">
                      <i className={item.icon}></i>
                    </div>
                    <div className="vision-content">
                      <h4 className="about-vision-card-title">{item.title}</h4>
                      <p className="about-vision-card-text text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about-section-padding pillars-section pt-0">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8 g-fade-up">
              <div className="section-tag"><i className="bi bi-grid-3x3-gap-fill"></i> Ecosystem Pillars</div>
              <h2 className="about-pillars-heading mb-3">
                Designed for the entire <span>educational network.</span>
              </h2>
              <p className="about-pillars-subheading text-muted">
                ShowGrid is built on three key pillars, uniting issuers, recipients, and validators into a single, seamless digital identity loop.
              </p>
            </div>
          </div>

          <div className="about-pillar-grid">
            {pillarsData.map((pillar) => (
              <div key={pillar.id} className={`about-pillar-card g-fade-up ${pillar.delayClass}`}>
                <div className="about-pillar-icon">
                  <i className={pillar.icon}></i>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="about-pillar-tag">
                  <i className={pillar.tagIcon}></i> {pillar.tagText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="about-section-padding cta-section">
        <div className="container">
          <div className="row align-items-center">
 
            <div className="col-lg-6 col-md-12 g-fade-left pe-lg-5 mb-5 mb-lg-0">
              <div className="section-tag"><i className="bi bi-stars"></i> Ready to transition?</div>
              <h2 className="about-vision-heading mb-4">
                Join the new <br /> <span>credential standard.</span>
              </h2>
              <p className="about-vision-subheading text-muted mb-4">
                Whether you are looking to secure your institution's issued certificates, consolidate your student achievements, or authenticate job candidates, ShowGrid has the infrastructure to help you succeed.
              </p>
              <div className="cta-buttons d-flex gap-3 flex-wrap mt-4">
                <div className="btn-fill-primary">
                  <Link href="/organizations">
                    Register Institute <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                <div className="btn-outline-primary">
                  <Link href="/learners">
                    Claim Learner Passport
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-6 col-md-12 g-fade-right">
              <div className="about-cta-img-wrapper">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" alt="Students Collaborating" className="about-cta-img" />
                <div className="about-cta-img-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
