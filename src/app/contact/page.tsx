import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      {/* Segment 1: Contact Hero Section */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-hero-content g-fade-up">
                <div className="contact-badge-tag">
                  <i className="bi bi-envelope-open-fill"></i> Get In Touch
                </div>
                <h1 className="contact-heading-large">
                  Let's build trust <span>together.</span>
                </h1>
                <p className="contact-hero-desc">
                  Have questions about ShowGrid integrations, credential sealing, or partnership opportunities? Reach out to our support team or sales staff today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 2: Main Contact Section (Details & Form) */}
      <section className="section-padding bg-white pt-5">
        <div className="container">
          <div className="row">
            
            {/* Left Column: Contact Cards */}
            <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 g-fade-left">
              <div className="contact-info-wrapper">
                
                {/* Card 1: Address */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Office Headquarters</h4>
                    <p>123 Lorem Street, CBD</p>
                    <p>Auckland, 1010, New Zealand</p>
                  </div>
                </div>

                {/* Card 2: Phone */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Call Our Team</h4>
                    <p>Support: <Link href="tel:+6491234567">+64 9 123 4567</Link></p>
                    <p>Sales Hotline: <Link href="tel:+6497654321">+64 9 765 4321</Link></p>
                  </div>
                </div>

                {/* Card 3: Email */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-envelope-check-fill"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Email Communications</h4>
                    <p>General inquiries: <Link href="mailto:info@showgrid.com.nz">info@showgrid.com.nz</Link></p>
                    <p>Issuer Support: <Link href="mailto:support@showgrid.com.nz">support@showgrid.com.nz</Link></p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="col-lg-7 col-md-12 g-fade-right">
              <div className="contact-form-card">
                <form action="" method="POST">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="contact-form-group">
                        <label htmlFor="contact-name" className="contact-form-label">Full Name</label>
                        <input type="text" id="contact-name" name="name" className="contact-form-input" placeholder="e.g. John Doe" required />
                      </div>
                    </div>
                    
                    <div className="col-md-6 col-12">
                      <div className="contact-form-group">
                        <label htmlFor="contact-email" className="contact-form-label">Email Address</label>
                        <input type="email" id="contact-email" name="email" className="contact-form-input" placeholder="name@domain.com" required />
                      </div>
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-role" className="contact-form-label">Your Portal Role</label>
                    <input type="text" id="contact-role" name="role" className="contact-form-input" placeholder="Student, Academic Institution, Verifier, or Other" required />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-message" className="contact-form-label">How can we help?</label>
                    <textarea id="contact-message" name="message" className="contact-form-textarea" rows={6} placeholder="Describe your request in detail..." required></textarea>
                  </div>

                  <button type="submit" className="contact-form-submit-btn">
                    Send Inquiry Message <i className="bi bi-send-fill"></i>
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
