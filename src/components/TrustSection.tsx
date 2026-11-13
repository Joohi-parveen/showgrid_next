export default function TrustSection() {
  return (
    <section id="trust" className="section-padding design-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pe-lg-5 g-fade-left">
            <div className="section-tag text-white"> <i className="bi bi-stars"></i> TRUST BY DESIGN </div>
            <div className="section-heading animate-heading text-white mb-3"> A seal that survives the <span> screenshot
              era. </span>
            </div>
            <div className="section-subheading text-white">Read-only credentials by default. Cryptographic hashes stored
              against every record - because a forged PDF should never outlive a Showgrid verification page.</div>
            <div className="design-flex">
              <div className="design-box">
                <img src="/images/trust-1.png" alt="" />
                <p className="m-0">SHA-256 Sealed</p>
              </div>
              <div className="design-box">
                <img src="/images/trust-2.png" alt="" />
                <p className="m-0">Row-Level Tenant Isolation</p>
              </div>
              <div className="design-box">
                <img src="/images/trust-3.png" alt="" />
                <p className="m-0">Read-only by Default</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 g-fade-right">
            <div className="design-trust-img"><img src="/images/design-trust.webp" alt="" className="mx-auto" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
