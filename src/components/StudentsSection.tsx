import Link from 'next/link';

interface StudentFeature {
  className: string;
  badge: string;
  title: string;
  image: string;
  description: string;
}

const studentFeaturesData: StudentFeature[] = [
  {
    className: "one",
    badge: "EVALUATE",
    title: "AI Analysis",
    image: "/images/student-1.png",
    description: "Al instantly analyzes raw extracurriculars, sports, or project achievements."
  },
  {
    className: "two",
    badge: "TAG",
    title: "Verified Skill Tags",
    image: "/images/student-2.png",
    description: "Automatically appends verified, industry-recognized skill tags (e.g., Public Speaking, Strategic Planning)."
  },
  {
    className: "three",
    badge: "MAGNETIZE",
    title: "Active Magnets",
    image: "/images/student-3.png",
    description: "Transforms static credentials into active magnets for scholarships, admissions, and hiring."
  }
];

export default function StudentsSection() {
  return (
    <section id="students" className="section-padding students-section bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 g-fade-left">
            <div className="section-tag"> <i className="bi bi-stars"></i> For Learners </div>
            <div className="section-heading animate-heading mb-3"> Ai-Tagging for <br /> <span> Industry </span> <br /> Standards. </div>
            <div className="section-subheading">
              Add an activity, and our Al translates it into global opportunities. We evaluate over 100+ raw activities and automatically tag them with standardized skills to act as a magnet for the has scholarships and jobs.
            </div>
            <div className="portfolio-buttons d-flex align-items-center gap-3 mt-4">
              <div className="btn-fill-primary">
                <Link href="/register">Register your Institute <i className="bi bi-arrow-right"></i></Link>
              </div>
              <div className="btn-outline-primary">
                <Link href="/signin">Sign In</Link>
              </div>
            </div>
            <img src="/images/student-img.png" alt="" className="student-img-main mt-4" />
          </div>
          <div className="col-lg-7 g-fade-up">
            <div className="students-wrapper">
              {studentFeaturesData.map((feature) => (
                <div key={feature.className} className={`students-box ${feature.className}`}>
                  <div className="student-img">
                    <img src={feature.image} alt="" />
                  </div>
                  <div className="student-text">
                    <span>{feature.badge}</span>
                    <div className="student-title">{feature.title}</div>
                    <p className="m-0">{feature.description}</p>
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
