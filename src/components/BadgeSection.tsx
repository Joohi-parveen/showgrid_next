import Link from 'next/link';

interface BadgeItem {
  id: string;
  title: string;
  sub: string;
  image: string;
  delay: string;
  raised?: boolean;
}

const badgesData: BadgeItem[] = [
  {
    id: "badge-1",
    title: "Academic",
    sub: "Excellence",
    image: "/images/badge-icon.png",
    delay: "0s"
  },
  {
    id: "badge-2",
    title: "Leadership",
    sub: "Verified",
    image: "/images/badge-icon-2.png",
    delay: ".1s",
    raised: true
  },
  {
    id: "badge-3",
    title: "Technical",
    sub: "Skill",
    image: "/images/badge-icon-3.png",
    delay: ".2s"
  },
  {
    id: "badge-4",
    title: "Achievement",
    sub: "Competition",
    image: "/images/badge-icon-4.png",
    delay: ".3s",
    raised: true
  },
  {
    id: "badge-5",
    title: "Industry",
    sub: "Certified",
    image: "/images/badge-icon.png",
    delay: ".4s"
  }
];

export default function BadgeSection() {
  return (
    <section className="home-badge-section">
      <div className="badge-glow-bg"></div>
      <div className="container position-relative text-center">
        <div className="section-heading animate-heading mb-3"> Digital <span> Badges </span> </div>
        <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>
          Every achievement, sealed and shareable. From academic honors to verified skills — issued once,
          trusted everywhere.
        </p>

        <div className="home-badge-strip">
          {badgesData.map((badge) => (
            <div
              key={badge.id}
              className={`home-badge-chip ${badge.raised ? 'chip-raise' : ''} g-fade-up`}
              style={{ animationDelay: badge.delay }}
            >
              <div className="home-badge-medallion">
                <img src={badge.image} alt="" />
              </div>
              <div className='h5'>{badge.title}</div>
              <span>{badge.sub}</span>
            </div>
          ))}
        </div>

        <div className="home-badge-cta-wrap g-fade-up">
          <div className="btn-fill-primary d-inline-block">
            <Link href="/badges">Explore All Badges <i className="bi bi-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
