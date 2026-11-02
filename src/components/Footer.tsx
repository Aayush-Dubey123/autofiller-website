import React from 'react';
import Link from 'next/link';
import { Bot } from 'lucide-react';
import { SITE_CONFIG } from '../config/site.config';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-sidebar)',
        color: '#E2E8F0',
        padding: 'clamp(20px, 3vh, 28px) 0 clamp(16px, 2vh, 20px) 0',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          className="footer-top-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '16px',
            marginBottom: '14px',
          }}
        >
          {/* Logo & Tagline */}
          <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Bot size={20} color="var(--bg-sidebar-active)" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#FFFFFF' }}>
                {SITE_CONFIG.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                {SITE_CONFIG.taglineSecondary}
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="footer-links" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '0.8125rem' }}>
            <Link href="/" className="footer-link-item" style={{ color: '#E2E8F0', textDecoration: 'none' }}>
              Home
            </Link>
            <Link href="/privacy" className="footer-link-item" style={{ color: '#E2E8F0', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="/license" className="footer-link-item" style={{ color: '#E2E8F0', textDecoration: 'none' }}>
              MIT License
            </Link>
            <a
              href={SITE_CONFIG.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
              style={{ color: '#E2E8F0', textDecoration: 'none' }}
            >
              Releases
            </a>
            <a
              href={SITE_CONFIG.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
              style={{ color: '#E2E8F0', textDecoration: 'none' }}
            >
              GitHub
            </a>
            <a
              href={SITE_CONFIG.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
              style={{ color: 'var(--bg-sidebar-active)', fontWeight: 700, textDecoration: 'none' }}
            >
              ayushdubey.studio
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="footer-bottom-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.75rem',
            color: '#94A3B8',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} AutoFiller AI. Open source under the MIT License.
          </div>
          <div>
            Built with Next.js • Hosted on Vercel at <code>{SITE_CONFIG.domain}</code>
          </div>
        </div>
      </div>
    </footer>
  );
};
