interface HowItWorksItem {
  num: string;
  label: string;
  title: string;
  icon: string;
  description: string;
}

const howItWorksData: HowItWorksItem[] = [
  {
    num: "01",
    label: "01 TEMPLATES",
    title: "Designed once. Minted forever.",
    icon: "/images/icon-2.png",
    description: "Build your institution's signature certificate with editable titles, body language and signatory blocks."
  },
  {
    num: "02",
    label: "02 CRYPTOGRAPHIC SEAL",
    title: "A SHA-256 fingerprint per credential.",
    icon: "/images/icon-1.png",
    description: "Every issuance generates a non-sequential UID and content hash. Tampering breaks the seal - and the verification."
  },
  {
    num: "03",
    label: "03 PUBLIC VERIFY",
    title: "One QR scan. One source of truth.",
    icon: "/images/icon-3.png",
    description: "Recipients share a link or scan; verifiers see the live status-valid or revoked alongside your brand."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding how-sections bg-white">
      <div className="container">
        <div className="text-center">
          <div className="section-heading animate-heading mb-3"> Why <span> ShowGrid </span> </div>
        </div>
        <div className="row mt-5">
          {howItWorksData.map((item) => (
            <div key={item.num} className="col-lg-4 mt-4 g-fade-up">
              <div className="how-box">
                <div className="how-icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="how-content">
                  <div className="how-num">{item.num}</div>
                  <span>{item.label}</span>
                  <div className="how-title">{item.title}</div>
                  <p className="m-0">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
