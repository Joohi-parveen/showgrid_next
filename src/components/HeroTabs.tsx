"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function HeroTabs() {
  const [activeTab, setActiveTab] = useState<'organization' | 'student' | 'verifier'>('organization');

  return (
    <div className="hero-tabs">
      <ul className="nav nav-tabs" id="homeTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'organization' ? 'active' : ''}`}
            id="home-tab"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected={activeTab === 'organization' ? 'true' : 'false'}
            onClick={() => setActiveTab('organization')}
          >
            <i className="bi bi-briefcase"></i>
            Organization / Institute
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'student' ? 'active' : ''}`}
            id="profile-tab"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected={activeTab === 'student' ? 'true' : 'false'}
            onClick={() => setActiveTab('student')}
          >
            <i className="bi bi-mortarboard"></i>
            Student / Learner
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'verifier' ? 'active' : ''}`}
            id="contact-tab"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected={activeTab === 'verifier' ? 'true' : 'false'}
            onClick={() => setActiveTab('verifier')}
          >
            <i className="bi bi-shield-check"></i>
            For Verifier
          </button>
        </li>
      </ul>

      <div className="tab-content" id="homeTabContent">
        {/* Tab 1: Organization / Institute */}
        <div
          className={`tab-pane fade ${activeTab === 'organization' ? 'show active' : ''}`}
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex={0}
        >
          <div className="hero-content-flex">
            <div className="hero-tab-content">
              <div className="d-flex align-items-baseline gap-1">
                <i className="bi bi-file-earmark-bar-graph"></i>
                <div className="hero-tab-title">Branded templates</div>
              </div>
              <p>Logo, navy & gold, signatories-every page inherits your seal.</p>
            </div>
            <div className="hero-tab-content">
              <div className="d-flex align-items-baseline gap-1">
                <i className="bi bi-lock"></i>
                <div className="hero-tab-title">Sealed issuance </div>
              </div>
              <p>Bulk CSV with a SHA-256 fingerprint per credential.</p>
            </div>
            <div className="hero-tab-content">
              <div className="d-flex align-items-baseline gap-1">
                <i className="bi bi-qr-code-scan"></i>
                <div className="hero-tab-title">Public verify + QR</div>
              </div>
              <p>Recipients share a link or scan revocations propagate instantly.</p>
            </div>
          </div>

          <div className="hero-buttons d-flex align-items-center gap-3">
            <div className="btn-fill-primary">
              <Link href="/registerd?role=institution">
                Register your Institute <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="btn-outline-primary">
              <Link href="/singin?role=institution">Sign In</Link>
            </div>
          </div>
        </div>

        {/* Tab 2: Student / Learner */}
        <div
          className={`tab-pane fade ${activeTab === 'student' ? 'show active' : ''}`}
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex={0}
        >
          <div className="hero-content-flex">
            <div className="hero-tab-content">
              <div className="d-flex align-items-baseline gap-1">
                <i className="bi bi-patch-check"></i>
                <div className="hero-tab-title">Skill Passport </div>
              </div>
              <p>Every diploma , badge & micro-credential - one cureated grid</p>
            </div>
            <div className="hero-tab-content">
              <div className="d-flex align-items-baseline gap-1">
                <i className="bi bi-lock"></i>
                <div className="hero-tab-title">Anti-tamper </div>
              </div>
              <p>SHA-256 sealed and tied to your issuer&apos;s live ledger </p>
            </div>
            <div className="hero-tab-content">
              <div className="d-flex align-items-baseline gap-1">
                <i className="bi bi-linkedin"></i>
                <div className="hero-tab-title">Linkedin-ready</div>
              </div>
              <p>One public link or QR. Drop it anywhere; recruiters see the source. </p>
            </div>
          </div>

          <div className="hero-buttons d-flex align-items-center gap-3">
            <div className="btn-fill-primary">
              <Link href="/singin?role=student">
                Access your Grid <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="btn-outline-primary">
              <Link href="/registerd?role=student">Claim your passport</Link>
            </div>
          </div>
        </div>

        {/* Tab 3: For Verifier */}
        <div
          className={`tab-pane fade ${activeTab === 'verifier' ? 'show active' : ''}`}
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex={0}
        >
          <div className="hero-content-flex">
            <div className="hero-tab-content">
              <div className="d-flex align-items-baseline gap-1">
                <i className="bi bi-file-earmark-check"></i>
                <div className="hero-tab-title">Instant lookup </div>
              </div>
              <p>Paste any UID printed on a Showgrid certificate.</p>
            </div>
            <div className="hero-tab-content">
              <div className="d-flex align-items-baseline gap-1">
                <i className="bi bi-shield-check"></i>
                <div className="hero-tab-title">Live status</div>
              </div>
              <p>Valid or revoked - direct from the issuer&apos;s ledger </p>
            </div>
            <div className="hero-tab-content">
              <div className="d-flex align-items-baseline gap-1">
                <i className="bi bi-stars"></i>
                <div className="hero-tab-title">Cryptographic </div>
              </div>
              <p>See the SHA-256 fingerprint that sealed the issuance.</p>
            </div>
          </div>

          <div className="tab-vefircation-form">
            <form action="">
              <span className="form-tag">Verify a credential UID</span>
              <div className="form-group">
                <div className="form-feild">
                  <i className="bi bi-search"></i>
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="e.g.  7k2X-MQ9N-V4PR  or SBYX6QUSL330 "
                  />
                </div>
                <button type="submit" className="vefirfy-submit">
                  Verify <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
