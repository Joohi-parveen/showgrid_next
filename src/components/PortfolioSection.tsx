import Link from 'next/link';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding portfolio-grid-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 g-fade-left">
            <div className="section-tag"> <i className="bi bi-stars"></i> The Showgrid Recipient Grid</div>
            <div className="section-heading animate-heading mb-3"> A passport, <br /> not a <span>folder.</span></div>
            <div className="section-subheading">
              Your hard-earned achievements shouldn&apos;t be trapped in a PDF.
              Showgrid turns your degrees, vocational certifications, sports accolades, and
              micro-credentials into a verified digital identity.
            </div>
            <ul className="portfolio-lists">
              <li>
                <img src="/images/portfolio-icon-1.png" alt="" />
                <span>Read-only by design — only issuers can amend</span>
              </li>
              <li>
                <img src="/images/portfolio-icon-2.png" alt="" />
                <span>Skill Passport aggregates valid records across all issuing organizations.</span>
              </li>
              <li>
                <img src="/images/portfolio-icon-1.png" alt="" />
                <span>One public link -shareable - QR-ready.</span>
              </li>
            </ul>
            <div className="portfolio-buttons d-flex align-items-center gap-3 mt-4">
              <div className="btn-fill-primary"><Link href="/register">Register your Institute <i className="bi bi-arrow-right"></i>
              </Link></div>
              <div className="btn-outline-primary"><Link href="/signin">Sign In </Link></div>
            </div>
          </div>
          <div className="col-lg-8 g-fade-right">
            <div className="portfolio-wrapper">
              <div className="portfolioe-img"><img src="/images/portfolio-grid.webp" alt="" /></div>
              <div className="portfolio-qr"><img src="/images/portfolio-qr.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
