"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { initHeaderScroll } from '@/scripts/header';

export default function Header() {
  useEffect(() => {
    const cleanup = initHeaderScroll();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <header className="header">
      <div className="navbar">
        <div className="container">
          <div className="logo"><Link href="/"><img src="/images/logo.webp" alt="Show Grid" fetchPriority="high" /></Link></div>
          <div className="menus desk-menu">
            <ul>
              <li><Link href="/">Platform </Link></li>
              {/* <li><Link href="/about">About</Link></li> */}
              {/* <li><Link href="/blog">Blog</Link></li> */}
              {/* <li><Link href="/contact">Contact</Link></li> */}
              <li><Link href="/#portfolio">Portfolio Grid </Link></li>
              <li><Link href="/#how-it-works">How it works</Link></li>
              <li><Link href="/#trust">Trust</Link></li>
            </ul>
          </div>
          <div className="portal-menus">
            <ul>
              <li><Link href="/organizations">For Organization </Link></li>
              <li><Link href="/learners">For Learners </Link></li>
              <li>
                <Link href="/verification" className="credential-link">
                  <i className="bi bi-shield-check"></i> Verify Credential
                </Link>
              </li>
              <li><Link href="/signin">Sign in</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
