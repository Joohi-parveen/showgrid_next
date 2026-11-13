interface MethodStep {
  num: string;
  title: string;
  icon: string;
  description: string;
}

const methodStepsData: MethodStep[] = [
  {
    num: "01",
    title: "Brand your portal",
    icon: "/images/method-icon-1.png",
    description: "Inject your logo; every page inherits your organization's unique identity."
  },
  {
    num: "02",
    title: "Design the template",
    icon: "/images/method-icon-2.png",
    description: "Define fields, body language, and signatures. Preview the certificate live."
  },
  {
    num: "03",
    title: "Issue in bulk",
    icon: "/images/method-icon-3.png",
    description: "Upload a CSV. Each row becomes a sealed credential with a unique UID."
  },
  {
    num: "04",
    title: "Verifiers verify",
    icon: "/images/method-icon-4.png",
    description: "Public route + QR. Recipients link to grids; revocations propagate immediately."
  }
];

export default function MethodSection() {
  return (
    <section className="section-padding method-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 g-fade-left">
            <div className="section-tag"> <i className="bi bi-stars"></i> THE SHOWGRID METHOD </div>
            <div className="section-heading animate-heading mb-3"> From issuer to recipient, in <span> four </span> moves. </div>
            <div className="section-subheading">An infrastructure crafted for organizations that treat their seal as sacred. </div>
          </div>
          <div className="col-lg-8">
            <div className="method-wrapper">
              {methodStepsData.map((step) => (
                <div key={step.num} className="method-steps g-fade-up">
                  <div className="method-icons">
                    <img src={step.icon} alt="" />
                  </div>
                  <div className="method-text">
                    <div className="method-num">{step.num}</div>
                    <div className="method-title">{step.title}</div>
                    <p className="m-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
