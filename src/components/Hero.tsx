import React from 'react';
import { Download, ShieldCheck, Lock, Cpu, EyeOff, Sparkles, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/site.config';
import { LatestReleaseData } from '../lib/github-release';

interface HeroProps {
  release: LatestReleaseData;
}

export const Hero: React.FC<HeroProps> = ({ release }) => {
  return (
    <section
      id="hero"
      className="viewport-section"
      style={{
        padding: 'clamp(32px, 4.5vh, 56px) 0',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--accent-green-bg)',
            color: 'var(--accent-green-text)',
            fontSize: '0.8125rem',
            fontWeight: 700,
            border: '1px solid var(--badge-green-border)',
            marginBottom: '24px',
          }}
        >
          <Sparkles size={15} />
          <span>AutoFiller AI v{release.version} Released</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>{release.releaseDate}</span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: 800,
            color: 'var(--text-title)',
            letterSpacing: '-0.02em',
            maxWidth: '920px',
            margin: '0 auto 18px auto',
          }}
        >
          {SITE_CONFIG.taglinePrimary}
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            margin: '0 auto 36px auto',
            lineHeight: 1.6,
          }}
        >
          {SITE_CONFIG.description}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          <a
            href={release.installer.url}
            style={{
              padding: '14px 28px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--accent-primary)',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 14px rgba(22, 101, 78, 0.25)',
              transition: 'all 0.2s ease',
            }}
          >
            <Download size={20} />
            <span>Download for Windows ({release.installer.sizeMb})</span>
          </a>

          <a
            href="#download"
            style={{
              padding: '14px 22px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            <span>Portable & Checksums</span>
          </a>

          <a
            href={SITE_CONFIG.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '14px 22px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>GitHub Source</span>
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Core Pillars Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              padding: '16px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'left',
            }}
          >
            <div style={{ color: 'var(--status-success)', flexShrink: 0 }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--text-title)' }}>
                Never-Submit Invariant
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Automation permanently halts for manual human review
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '16px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'left',
            }}
          >
            <div style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>
              <Lock size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--text-title)' }}>
                Local AES-256-GCM Vault
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Encrypted with DPAPI key protection on your PC
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '16px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'left',
            }}
          >
            <div style={{ color: '#0284C7', flexShrink: 0 }}>
              <EyeOff size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--text-title)' }}>
                Zero-Value AI Mapping
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Outbound mapping requests send labels only, zero values
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '16px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'left',
            }}
          >
            <div style={{ color: '#D97706', flexShrink: 0 }}>
              <Cpu size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--text-title)' }}>
                Operator Takeover
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Never bypasses CAPTCHAs, OTPs, or sign-in gates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
