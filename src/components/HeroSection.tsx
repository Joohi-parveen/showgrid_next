import Link from 'next/link';
import HeroTabs from './HeroTabs';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 g-fade-left">
            <div className="hero-content ">
              <div className="hero-tag">ONE PORTAL. THREE ROLES.</div>
              <h1 className="hero-heading animate-heading">The new gold <br /> standard <span> <br /> for credentials.
              </span>
              </h1>
              <div className="hero-subheading">Whether you issue, earn, or trust them — <b>Showgrid is the definitive source for all tamper-proof credentials and digital badges.</b>
              </div>
              
              <HeroTabs />

            </div>
          </div>
          <div className="col-lg-6 g-fade-right">
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <img src="/images/certificate.webp" alt="" />
              </div>
              <div className="hero-icon"><img src="/images/certified-logo.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
