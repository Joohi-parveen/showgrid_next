import Link from 'next/link';
import Script from 'next/script';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-contact-infos">
          <div className="footer-contact-info">
            <i className="bi bi-telephone"></i>
            <div className="footer-contact-text">
              <span>Call Us</span>
              <a href="tel:+">12345 67890</a>
            </div>
          </div>
          <div className="footer-contact-info">
            <i className="bi bi-envelope"></i>
            <div className="footer-contact-text">
              <span>Write to us</span>
              <a href="mailto:info@showgrid.com.nz">info@showgrid.com.nz</a>
            </div>
          </div>
          <div className="footer-contact-info">
            <i className="bi bi-geo-alt"></i>
            <div className="footer-contact-text">
              <span>Address</span>
              <a href="tel:+">123 Lorem, ipsum.</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-info">
              <img src="/images/logo.webp" alt="" className="footer-logo" />
              <p>Showgrid provides the infrastructure for verifiable digital identities
                and modern career architecture, replacing static paper with dynamic, tamper-proof
                records for all industries</p>
              <div className="footer-social">
                <Link href="#"><i className="bi bi-facebook"></i></Link>
                <Link href="#"><i className="bi bi-twitter-x"></i></Link>
                <Link href="#"><i className="bi bi-instagram"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-links">
              <div className="footer-title">Platform</div>
              <ul>
                <li><Link href="/organizations"> For Organizations</Link></li>
                <li><Link href="/learners">For Learners</Link></li>
                <li><Link href="/verification">Verification & Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-links">
              <div className="footer-title">Quick Links</div>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/blog">Blog Insights</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-newsletter">
              <div className="footer-title">Subscribe</div>
              <p>Subscribe to stay updated with our latest courses and exclusive offers </p>
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button type="submit"><i className="bi bi-arrow-right"></i></button>
              </form>
            </div>
          </div>
          <div className="col-lg-12 mt-5 border-top py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="copyright-text">Copyright @2026 Matebiz. All Rights Reserved</div>
              <div className="supports-links d-flex align-items-center gap-2">
                <Link href="#">Term & Condition</Link>
                <Link href="#">Help & Support</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
